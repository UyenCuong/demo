<template>
<a-layout>
  <TopBar />
  <div>
     <a-row>
    <a-col :span="1">
    <Vertical />
    </a-col>
    <a-col :span="4">
      <Slider />
    </a-col>
  </a-row>
  </div>
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
