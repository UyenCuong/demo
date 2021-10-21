<template>
  <div class="header">
     <h1>{{ title }}</h1>
     <p>
         {{ target }}
     </p>
 </div>
</template>
<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    const title = ref<string>('Todo List')
    const target = ref<string>('Get thing done, one item at a time.')
    return {
      title,
      target
    }
  }
}
</script>

<style lang="scss">
.header {
    font-weight: $font-weight;
    margin: 35px 35px 0 35px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: $background-white;
    }
}
</style>
