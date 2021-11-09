<template>
  <div id="nav">
    <div class="login" @click="onLogin">Login</div>
    <div class="register" @click="onRegister">Register</div>
    </div>
  <div class="container-fluid">
      <router-view/>
  </div>
</template>

<script lang="ts">
import { useRoute, useRouter } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const onLogin = () => {
      router.push({ name: 'login' })
    }
    const onRegister = () => {
      router.push({ name: 'register' })
    }
    return {
      onLogin,
      onRegister
    }
  }
}
</script>

<style>

</style>
