<template>
<div class="contact">
  <form class="contact__form">
  <HeaderForm />
  <ContentForm />
  <FooterForm />
  </form>
</div>
</template>

<script lang="ts">
import HeaderForm from '@/modules/Demo3/components/HeaderForm.vue'
import ContentForm from '@/modules/Demo3/components/ContentForm.vue'
import FooterForm from '@/modules/Demo3/components/FooterForm.vue'

export default {
  components: {
    HeaderForm,
    ContentForm,
    FooterForm
  }
}
</script>

<style lang="scss">
.contact {
  background-color: rgb(0, 225, 255);
  background-image: linear-gradient(to right,rgb(0, 225, 255) , rgb(83, 43, 226));
  height: 700px;
  .contact__form {
    width: 400px;
    height: 600px;
    position: relative;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px 24px 40px 24px;
  }
}
</style>
