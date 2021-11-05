<template>
  <div class="contentappitem">
    <div class="contentappitem__app">
      <div class="bkr__img">
        <slot name="img"><img :src="getSrc" alt="" /></slot>
        <slot name="nameapp">
          <h5 class="title">{{ getTitle }}</h5></slot
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'

interface Pops {
  src?: string;
  title?: string;
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

<style lang="scss" scope>
.contentappitem {
  .contentappitem__app {
    .bkr__img {
      background-color: $background-white;
      height: 120px;
      width: 100px;
      border-radius: 4px;
      margin-top: 20px;
    }
    img {
      height: 90px;
      object-fit: cover;
      width: 90px;
      margin: 5px;
      border-radius: 3px;
    }
  }
}
</style>
