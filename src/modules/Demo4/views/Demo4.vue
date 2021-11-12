<template>
  <div class="container-fluid">
      <router-view/>
  </div>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup () {
    // const route = useRoute()
    const router = useRouter()
    // const onLogin = () => {
    //   router.push({ name: 'login' })
    // }
    // const onRegister = () => {
    //   router.push({ name: 'register' })
    // }
    // return {
    //   // onLogin,
    //   onRegister
    // }
    // onMounted(() => {
    //   const str = window.localStorage.getItem('user')
    //   if (str) {
    //     router.push({ name: 'demo5' })
    //   }
    // })
  }
}
</script>

<style>

</style>
