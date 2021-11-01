<template>

  <span
    role="img"
    :aria-label="ariaLabel"
    :class="spanClass"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      :fill="color || 'currentColor'"
      :width="width || size"
      :height="height || size"
    >
      <path :d="iconPath" ></path>
    </svg>
  </span>
</template>
<script lang="ts">
import { computed } from 'vue'
// import { toPascalCase } from '@/common/helpers/string-utils'
import icons from '@/core/components/Icons/mdi'
export default {
  setup (props: any) {
    const viewBox = computed(() => '0 0 24 24')
    const iconPath = computed(() => icons[props.name])
    const spanClass = computed(() => {
      const classValue: string[] = []
      if (props.disable) classValue.push('disable')
      const mdiIcon = ['mdi', `mdi-${props.name}`, props.spin ? 'mdi-spin' : '']
      mdiIcon.map((item: string) => classValue.push(item))
      return classValue
    })
    return {
      viewBox,
      iconPath,
      spanClass
    }
  },
  props: {
    width: [Number, String],
    height: [Number, String],
    ariaLabel: [String],
    name: {
      type: String,
      required: true
    },
    size: {
      type: [Number, String],
      default: 24
    },
    spin: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style lang="scss">
.app-icon {
  display: inline-flex;
  vertical-align: middle;
}
.disable {
  cursor: not-allowed
}
.mdi > svg {
  vertical-align: middle
}
.mdi.mdi-spin > svg {
  -webkit-animation: mdi-spin 2s infinite linear;
     -moz-animation: mdi-spin 2s infinite linear;
          animation: mdi-spin 2s infinite linear;
}
@-webkit-keyframes mdi-spin {
  0% {
      -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
@keyframes mdi-spin {
  0% {
      -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
</style>
