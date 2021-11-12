<template>
  <a-layout>
    <SliderBar />
    <a-layout>
      <a-layout-header>
        <TopBar />
      </a-layout-header>
      <a-layout>
        <Slider />
        <a-layout>
          <a-layout-header>
            <ContentHeader />
          </a-layout-header>
          <a-layout-content>
            <Content />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { onMounted } from 'vue'
import TopBar from '@/modules/Demo5/components/HeaderLayout/TopBar.vue'
import SliderBar from '@/modules/Demo5/components/Slider/SliderBar.vue'
import Slider from '@/modules/Demo5/components/Slider/Slider.vue'
import ContentHeader from '@/modules/Demo5/components/Contents/ContentHeader.vue'
import Content from '@/modules/Demo5/components/Contents/Content.vue'
export default {
  components: {
    SliderBar,
    TopBar,
    Slider,
    ContentHeader,
    Content
  },
  setup () {
    onMounted(() => {
      const str = JSON.stringify(window.localStorage.getItem('user'))
    })
  }
}
</script>

<style>

</style>
