<template>
<a-layout>
  <TopBar />
  <Vertical />
  <Slider />
</a-layout>
</template>

<script>
import TopBar from '@/modules/Demo5/components/HeaderLayout/TopBar.vue'
import Vertical from '@/modules/Demo5/components/VerticalLayout/Vertical.vue'
import Slider from '@/modules/Demo5/components/Slider/Slider.vue'
export default {
  components: {
    TopBar,
    Vertical,
    Slider
  }
}
</script>

<style>

</style>
