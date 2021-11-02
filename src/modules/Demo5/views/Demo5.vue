<template>
<a-layout>
  <a-layout-sider :width="60">
      <Vertical />
  </a-layout-sider>
  <a-layout-content>
    <a-layout>
      <a-layout-header><TopBar /></a-layout-header>
    <a-layout-content>
    <a-row>
      <a-col :span="4"><Slider /></a-col>
      <a-col :span="20"><ContentHeader /></a-col>
    </a-row>
    </a-layout-content>
    </a-layout>
 </a-layout-content>
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
