<template>
  <div class="content">
    <header class="header-content">
      <h3>{{ title }}</h3>
    </header>
    <main class="main-content">
      <h3>{{ target }}</h3>
      <p>{{ location }}</p>
    </main>
    <footer class="footer-content">
      <h4>{{ findout }}</h4>
    </footer>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Content',
  setup () {
    const title = ref<string>('TRAVEL')
    const target = ref<string>('10 Best Things to Do in Seattle')
    const location = ref<string>(
      'Seattle is a seaport city on the west coast of United State...'
    )
    const findout = ref<string>('By Katherine Kato')
    return {
      title,
      target,
      location,
      findout
    }
  }
}
</script>

<style lang="scss">
.content {
  padding: 20px 32px;
  .header-content {
    margin-bottom: 20px;
    color: $color-content;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 22px;
      left: 0;
      width: 77px;
      height: 2px;
      background-color: $background-colorcontent;
      .main-content {
        margin-bottom: 40px;
        position: relative;
      }
    }
  }
}
.main-content::after {
  content: "";
  position: absolute;
  width: 45%;
  height: 1px;
  background-color: $background-colorcontent;
}
</style>
