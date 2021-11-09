<template>
  <div class="formcat">
    <PageRegister />
    <FormRegister />
  </div>
</template>
<script langs="ts">
import { onMounted } from 'vue'
import PageRegister from '@/modules/Demo4/components/Register/PageRegister.vue'
import FormRegister from '@/modules/Demo4/components/Register/FormRegister.vue'
import useIndexedDB from '@/modules/Demo4/composables/useIndexedDB.ts'
export default {
  components: {
    PageRegister,
    FormRegister
  }
}
</script>
<style langs="ts">
.formcat {
  background-color: hsl(101, 87%, 51%);
  background-image: linear-gradient(
    to right,
    hsl(101, 87%, 51%),
    hsl(101, 88%, 16%)
  );
  height: 600px;
  width: auto;
}
</style>
