<template>
  <div class="container">
    <div class="product-image">
      <div><img v-bind:src="image" width="228" height="260" /></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Container',
  setup () {
    return {
      image: require('@/assets/travel.jpg')
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 0;
  .container__img {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }
}
</style>
