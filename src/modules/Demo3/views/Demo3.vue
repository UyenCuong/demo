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
import HeaderForm from '@/modules/Demo3/components/InputForm.vue'
import ContentForm from '@/modules/Demo3/components/OptionForm.vue'
import FooterForm from '@/modules/Demo3/components/CheckForm.vue'

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
  background-color: $background-colorform;
  background-image: $background-image;
  height: $heightform;
  .contact__form {
    height: $heightcontact__form;
    width: $widthcontact__form;
    position: relative;
    background-color: $background-white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: $padding-contact__form;
  }
}
</style>
