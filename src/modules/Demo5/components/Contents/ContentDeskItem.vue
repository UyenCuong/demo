<template>
  <div class="brk__chat">
    <a-row type="flex">
      <a-col :flex="3">
        <app-icon :name="'card-multiple-outline'"></app-icon>
        <span>www.destop.com</span>
        <slot name="namedesk"> <p>{{getmakequestion}}</p></slot>
      </a-col>
      <a-col :flex="2"
        ><img
          src="https://global-uploads.webflow.com/5fdc9a528126120a2b773972/60d1e5dd4a6cb9331c78550a_chat.svg"
      /></a-col>
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
   makequestion?: string,
 }

export default {
  props: {
    makequestion: {
      type: String
    }
  },
  setup (props: Popps) {
    const getmakequestion = computed(() => props.makequestion)

    return {
      getmakequestion
    }
  }
}
</script>

<style lang="scss">
.brk__chat {
  background-color: $background-white;
  border-radius: 4px;
  .icon-sp {
    display: flex;
    justify-content: space-between;
    .greenicon {
      color: $background-white;
      background: rgb(172, 230, 14);
      margin-left: 3px;
    }
  }
}
</style>
