<template>
  <div class="form">
    <h1 class="form__title">
      {{ sign }}
    </h1>
    <p>
      {{ based }}
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup () {
    const sign = ref<string>('SIGN UP FORM(CODED)')
    const based = ref<string>('Based on Sign Up Design #39 by Denis Abdullin')
    return {
      sign,
      based
    }
  }
}
</script>

<style lang="scss">
.form {
  text-align: center;
  .form__title {
    color: black;
  }
}
</style>
