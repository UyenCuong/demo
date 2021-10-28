<template>
 <a-row class="rowcontent">
    <a-col :span="12">
    <a-image class="image"
    :width="300"
    src="https://i.pinimg.com/originals/48/d5/eb/48d5ebb5c96aa214ee2c585dcd5b0761.jpg"
  />
  </a-col>
  <a-col :span="12">
    <a-form class="formlogin" @submit.prevent="handleSubmit">
   <a-form-item label="Email" name="email"></a-form-item>
     <a-input type="email" required v-model:value="value16"/>
   <a-form-item label="Password (6 or more characters required)" name="pass"></a-form-item>
    <a-input type="password" required  v-model:value="nameTitle"/>
   <a-form-item label="Repeat Password" name="checkPass">
   </a-form-item>
    <a-input type="password" required />
   <a-form-item class="formlogin__submit">
     <a-button type="primary" html-type="submit"  @click="onSubmit()">Sign Up</a-button>
     <a-anchor-link href="#components-anchor-demo-basic" title="terms & conditions" />
   </a-form-item>
 </a-form></a-col>
  </a-row>
</template>
<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'Formlogin',
  setup () {
    const value16 = ref<string>('')
    // const validatePass = computed(() => {
    //   if (pass.length <6 && value === '') {
    //     return ()
    //   }
    // } )
    const nameTitle = ref('')
    const onSubmit = () => {
      console.log(nameTitle.value.length)
    }
    return {
      value16,
      onSubmit
    }
  }
}
</script>
<style lang="scss">
.rowcontent{
  justify-content: center;
}
  .ant-col-12 {
    flex: 0 0 0;
  }
  .image {
    height: 430px;
    object-fit: cover;
  }
.formlogin {
    width: $widthcontact__form;
    position: relative;
    background-color: $background-white;
    padding: $padding-contact__form;
    .ant-form-item-control-input-content {
      display: flex;
      margin-top: 20px;
    }
}
</style>
