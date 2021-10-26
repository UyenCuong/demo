<template>
  <h4>Feature</h4>
    <form action="" class="form-feature">
      <div class="form__feature--checked">
        <ul
          v-for="lang in langs"
          :key="lang.name"
          class="form__feature--list"
          >
          <li class="form__feature--title">
            <input
              type="checkbox"
              class="form__feature--input"
              v-model="lang.comleted"
            >
            <p>
              {{ lang.name }}
            </p>
          </li>
        </ul>
      </div>
      <div class="form__feature--all" @click="CheckAll">
        <input
          type="checkbox"
          class="form__feature--input"
          v-model="allSelected"
        >
        <p>CheckAll</p>
      </div>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue'
interface langs {
  id: string;
  name: string;
  comleted: boolean;
}
export default {
  setup () {
    const langs:Array<langs> = [
      { id: '1', name: 'Reactivity', comleted: false },
      { id: '2', name: 'Encapsulation', comleted: false },
      { id: '3', name: 'Data Binding', comleted: false }
    ]
    const allSelected = ref(false)
    const CheckAll = () => {
      allSelected.value = !allSelected.value
      if (allSelected.value) {
        langs.forEach((item) => {
          if (!item.comleted) {
            item.comleted = true
          }
        })
      } else {
        langs.forEach((item) => {
          if (item.comleted) {
            item.comleted = false
          }
        })
      }
    }
    //     let inputElems = langs.comleted,
    //     count = 0;
    //     for (var index=0; index< langs.length; index++) {
    //       langs.every((item) => {
    //     if ( item.comleted === true){
    //          count++;
    //     }
    //     if (inputElems === langs.length ){
    //       item.comleted = !item.comleted
    //     }
    //   }
    // }
    // if (allSelected.value) {
    //   langs.every((item) => {
    //     let inputElems = item.comleted
    //     if (item.comleted === true && inputElems < 3) {
    //       item.comleted = true
    //     }
    //   })
    // } else {
    //   langs.every((item) => {
    //     if (langs.comleted < langs.length) {
    //       item.comleted = false
    //    }
    //   })
    // }
    return {
      langs,
      allSelected,
      CheckAll
    }
  }
}
</script>

<style lang="scss">
.form__feature--checked {
  display: flex;
  .form__feature--list {
    padding: 0;
    margin: 0;
    .form__feature--title {
      list-style-type: none;
      text-align: center;
      display: flex;
      padding: 0;
      width: $width-distance;
    .form__feature--input {
       height: $height-form;
    }
    }
  }
}
.form__feature--all {
  text-align: center;
  display: flex;
  .form__feature--input {
       height: $height-form;
  }
}
</style>
