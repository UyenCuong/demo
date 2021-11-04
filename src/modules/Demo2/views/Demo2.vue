<template>
<div class="travel">
<div class="travel__content">
  <Container />
  <Content />
</div>
</div>
</template>

<script lang="ts">
import Container from '@/modules/Demo2/components/Container.vue'
import Content from '@/modules/Demo2/components/Content.vue'

export default {
  components: {
    Container,
    Content
  }
}
</script>

<style lang="scss">
.travel {
  background-color: #eedfcc;
  height: 330px;
}
.travel__content{
  display: flex;
  width: $width-app;
  height: 260px;
  background-color:$color-white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>
