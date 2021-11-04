<template>
  <div class="bkr__img">
    <slot name="img"
      ><img
        :src="getSrc"
        alt=""
    /></slot>
    <slot name="nameapp"> <h5 class="title">{{getTitle}}</h5></slot>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'

interface Pops {
   src?: string,
   title?: string
 }

export default {
  props: {
    src: {
      type: String
    },
    title: {
      type: String
    }
  },
  setup (props: Pops) {
    const getSrc = computed(() => props.src)
    const getTitle = computed(() => props.title)

    return {
      getSrc,
      getTitle
    }
  }
}
</script>

<style lang="scss">
img {
  height: 100px;
  object-fit: cover;
  width: 100px;
  margin: 5px;
  border-radius: 3px;
}
.bkr__img {
  background-color: $background-white;
  height: 130px;
  width: 110px;
  border-radius: 4px;
  margin-top: 20px;
}

</style>
