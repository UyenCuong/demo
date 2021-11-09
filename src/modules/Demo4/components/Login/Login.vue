<template>
  <div class="formcat">
    <PageLogin />
    <Formlogin />
  </div>
</template>
<script langs="ts">
import PageLogin from '@/modules/Demo4/components/Login/PageLogin.vue'
import Formlogin from '@/modules/Demo4/components/Login/Formlogin.vue'
export default {
  components: {
    PageLogin,
    Formlogin
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
