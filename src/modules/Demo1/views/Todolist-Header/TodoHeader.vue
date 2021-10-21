<template>
  <div class="header">
     <h1>{{ title }}</h1>
     <p>
         {{ target }}
     </p>
 </div>
</template>
<script lang="ts">

export default {
  setup () {
    return {
      title: 'Todo List',
      target: ' Get thing done, one item at a time.'
    }
  }
}
</script>

<style lang="scss">
$background-white: white;
$font-weight: 300;
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
