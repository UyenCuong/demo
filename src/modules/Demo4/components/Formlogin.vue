<template>
 <a-row class="rowcontent">
    <a-col :span="12">
    <a-image class="image"
    :width="300"
    src="https://i.pinimg.com/originals/48/d5/eb/48d5ebb5c96aa214ee2c585dcd5b0761.jpg"
  />
  </a-col>
  <a-col :span="12">
    <a-form class="formlogin" ref="formRef" :rules="rules" :model="dataForm">
   <a-form-item label="Email" name="email">
      <a-input type="email" v-model:value="dataForm.email"/>
   </a-form-item>
   <a-form-item label="Password (6 or more characters required)" ref="password" name="password">
      <a-input type="password" v-model:value="dataForm.password"/>
   </a-form-item>
   <a-form-item label="Repeat Password" name="checkPass">
     <a-input type="password" v-model:value="dataForm.repeatpassword" />
   </a-form-item>
   <a-form-item class="formlogin__submit">
     <a-button type="primary" html-type="submit"  @click="onSubmit()">Sign Up</a-button>
     <a-anchor-link href="#components-anchor-demo-basic" title="terms & conditions" />
   </a-form-item>
 </a-form></a-col>
  </a-row>
</template>
<script lang="ts">
import { ref, reactive, toRaw } from 'vue'
export default {
  name: 'Formlogin',
  setup () {
    const formRef = ref()
    const dataForm = reactive({
      email: '',
      password: '',
      repeatpassword: ''
    })
    const rules = reactive({
      email: [
        {
          type: 'email',
          message: 'The input is not valid E-mail!'
        },
        {
          required: true,
          message: 'Please input your E-mail!'
        }
      ],
      password: [
        {
          required: true,
          message: 'Password is required',
          trigger: 'change'
        },
        {
          min: 6,
          message: 'Password is too short',
          trigger: 'change'
        }
      ],
      repeatpassword: [
      ]
    })
    const onSubmit = () => {
      formRef.value.validate()
        .then(() => {
          console.log('values', dataForm, toRaw(dataForm))
        })
    }
    return {
      formRef,
      rules,
      dataForm,
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
    height: 450px;
    object-fit: cover;
  }
.formlogin {
    width: $widthcontact__form;
    position: relative;
    background-color: $background-white;
    padding: $padding-contact__form;
    height: 450px;
    .ant-form-item-control-input-content {
      display: flex;
      margin-top: 20px;
      width: 352px;
    }
}
.check {
      color: red;
    }
</style>
