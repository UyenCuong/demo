<template>
  <div class="product-image">
       <img v-bind:src="image" width="200" height="260">
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
.img {
   width: 300px;
   height:auto;
   object-fit: contain;
}

</style>
