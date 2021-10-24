<template>
<div>
  <HeaderForm />
  <ContentForm />
  <FooterForm />
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

</style>
