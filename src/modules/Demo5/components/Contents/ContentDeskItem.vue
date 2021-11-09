<template>
  <div class="brk__chat">
    <a-row type="flex">
      <a-col :flex="3" class="brk__chat--des">
        <img
          src="https://f6183f6bc37ad0.desktop.com/images/e0da884b8b2d82366bb2801af38b2fa7-apple-touch-logo-192x192.png"
          class="brk__chat--icon"
        />
        <span class="brk__chat--title">www.destop.com</span>
        <slot name="namedesk">
          <p class="brk__chat--titles">{{ getmakequestion }}</p></slot
        >
      </a-col>
      <a-col :flex="2"><img :src="getsrc" class="brk__chat--img" /></a-col>
    </a-row>
    <div class="icon-sp">
      <div>
        <app-icon :name="'alpha-v'" class="greenicon"></app-icon>
        <app-icon :name="'heart-outline'"></app-icon>
      </div>
      <div>
        <app-icon :name="'dots-horizontal'"></app-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'

interface Popps {
  makequestion?: string;
  src?: string;
}

export default {
  props: {
    makequestion: {
      type: String
    },
    src: {
      type: String
    }
  },
  setup (props: Popps) {
    const getmakequestion = computed(() => props.makequestion)
    const getsrc = computed(() => props.src)

    return {
      getmakequestion,
      getsrc
    }
  }
}
</script>

<style lang="scss">
.brk__chat {
  background-color: $background-white;
  border-radius: 4px;
  margin: 0 3px;
  &--des {
    width: 102px;
    margin: 0 6px;
    height: 90px;
  }
  &--img {
    height: 50px;
    width: 50px;
    margin-top: 10px;
  }
  &--icon {
    width: 15px;
    height: 15px;
  }
  &--title {
    margin: 0;
    font-size: 10px;
  }
  &--titles {
    font-size:12px;
    margin: 0;
  }
  .icon-sp {
    display: flex;
    justify-content: space-between;
    width: 167px;
    .greenicon {
      color: $background-white;
      background: rgb(172, 230, 14);
      margin-left: 3px;
    }
  }
}
</style>
