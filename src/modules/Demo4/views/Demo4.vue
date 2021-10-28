<template>
<div class="formcat">
  <Page />
  <Formlogin />
</div>
</template>
<script langs="ts">
import Page from '@/modules/Demo4/components/Page.vue'
import Formlogin from '@/modules/Demo4/components/Formlogin.vue'
export default {
  components: {
    Page,
    Formlogin
  }
}
</script>
<style langs="ts">
.formcat {
  background-color: hsl(101, 87%, 51%);
  background-image :linear-gradient(to right,hsl(101, 87%, 51%), hsl(101, 88%, 16%));
  height: 600px;
  width: auto;
}
</style>
