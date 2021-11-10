import { ref, unref, toRaw, onBeforeMount } from 'vue'
import { Register } from '../types/types'

const useIndexedDB = () => {
  const database = ref()

  const connect = async () => {
    return new Promise((resolve, reject) => {
      if (database.value) {
        resolve(database.value)
      }
      const request = window.indexedDB.open('demo', 1)
      request.onerror = (event) => {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ msg: 'ERROR: Unable to open database', event })
      }
      request.onsuccess = (event: any) => {
        database.value = event.target.result
        resolve(database.value)
      }
      request.onupgradeneeded = (event: any) => {
        const db = event.target.result
        if (!db.objectStoreNames.contains('users')) {
          db.createObjectStore('users', {
            autoIncrement: true,
            keyPath: 'id'
          })
        }
      }
    })
  }

  const get = async (): Promise<any> => {
    database.value = await connect()
    return new Promise((resolve, reject) => {
      const transaction = database.value.transaction('users', 'readonly')
      const store = transaction.objectStore('users')
      const result: any[] = []
      store.openCursor().onsuccess = (event: any) => {
        const cursor = event.target.result
        console.log('get() onsuccess', cursor)
        if (cursor) {
          result.push(cursor.value)
          cursor.continue()
        }
      }
      transaction.oncomplete = () => {
        console.log('get() oncomplete', result)
        resolve(result)
      }
      transaction.onerror = () => {
        console.log('get() error')
        // eslint-disable-next-line prefer-promise-reject-errors
        reject([])
      }
    })
  }

  const create = async (data: Register) => {
    database.value = await connect()
    console.log(database.value)
    const rawData = toRaw(data)
    return new Promise((resolve, reject) => {
      const transaction = database.value.transaction(['users'], 'readwrite')
      const store = transaction.objectStore('users')
      const request = store.add(rawData)
      request.onsuccess = (event: any) => {
        const result = { ...rawData, id: event.target.result }
        console.log('create() onsuccess', event.target.result, result)
        resolve(result)
      }
      request.onerror = () => {
        console.log('create() onerror')
      }
    })
  }

  //   const count = async (): Promise<number> => {
  //     database.value = await connect()
  //     return new Promise((resolve, reject) => {
  //       const transaction = database.value.transaction('users', 'readonly')
  //       const store = transaction.objectStore('users')
  //       const countRequest = store.count()
  //       countRequest.onsuccess = (event: any) => {
  //         console.log('countRequest.result', countRequest.result)
  //         resolve(countRequest.result as number)
  //       }
  //     })
  //   }

  //   const getById = async (id: number): Promise<Todo> => {
  //     database.value = await connect()
  //     return new Promise((resolve, reject) => {
  //       const transaction = database.value.transaction('users', 'readonly')
  //       const store = transaction.objectStore('users')
  //       const request = store.get(id)
  //       request.onsuccess = (event: any) => {
  //         console.log('getById() onsuccess', request.result)
  //         resolve(request.result as Todo)
  //       }
  //       request.onerror = () => {
  //         console.log('getById() error')
  //         reject({})
  //       }
  //     })
  //   }

  //   const set = (data: Todo) => {
  //     return new Promise((resolve, reject) => {
  //       const rawData = toRaw(data)
  //       const transaction = database.value.transaction(['users'], 'readwrite')
  //       const store = transaction.objectStore('users')
  //       const request = store.put(rawData)
  //       request.onsuccess = function (event: any) {
  //         const result = { ...rawData, id: event.target.result }
  //         console.log('set() successfully', result)
  //         resolve(result)
  //       }
  //       request.onerror = function (event: any) {
  //         console.log('set() failed')
  //       }
  //     })
  //   }

  //   const remove = (id: number) => {
  //     return new Promise((resolve, reject) => {
  //       const transaction = database.value.transaction(['users'], 'readwrite')
  //       const store = transaction.objectStore('users')
  //       const request = store.delete(id)
  //       request.onsuccess = function () {
  //         console.log('remove() successfully')
  //         resolve(id)
  //       }
  //     })
  //   }

  return {
    connect,
    create,
    get
    // getById,
    // count,
    // set,
    // remove
  }
}

export default useIndexedDB