<template>
<a-layout>
    <a-layout-sider :width="60">
      <Vertical />
    </a-layout-sider>
    <a-layout-header><TopBar /></a-layout-header>
    <a-layout-sider><Slider /></a-layout-sider>
</a-layout>
    <a-layout>
    <a-layout>
      <a-layout-content><ContentHeader /></a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import TopBar from '@/modules/Demo5/components/HeaderLayout/TopBar.vue'
import Vertical from '@/modules/Demo5/components/VerticalLayout/Vertical.vue'
import Slider from '@/modules/Demo5/components/Slider/Slider.vue'
import ContentHeader from '@/modules/Demo5/components/Contents/ContentHeader.vue'
export default {
  components: {
    TopBar,
    Vertical,
    Slider,
    ContentHeader
  }
}
</script>

<style>

</style>
