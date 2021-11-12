
<template>
  <a-row class="rowcontent">
    <a-col :span="12">
      <a-image
        class="image"
        :width="300"
        src="https://i.pinimg.com/originals/48/d5/eb/48d5ebb5c96aa214ee2c585dcd5b0761.jpg"
      />
    </a-col>
    <a-col :span="12" class="formlogin">
      <a-form ref="formRef" :rules="rules" :model="dataForm">
        <a-form-item label="Email" name="email">
          <a-input type="email" v-model:value="dataForm.email" />
        </a-form-item>
        <a-form-item
          label="Password (6 or more characters required)"
          ref="password"
          name="password"
        >
          <a-input type="password" v-model:value="dataForm.password" />
        </a-form-item>
        <a-form-item label="Repeat Password" name="repeatpassword">
          <a-input type="password" v-model:value="dataForm.repeatpassword" />
        </a-form-item>
        <a-form-item class="formlogin__submit">
          <a-button @click="onSubmit()" class="login"> Sign Up </a-button>
          <div class="container-fluid">
            <router-view />
          </div>
          <a-button @click="onSubmitlogin()" class="loginrt"> Login </a-button>
          <div class="container-fluid">
            <router-view />
          </div>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { RuleObject } from 'ant-design-vue/es/form/interface'
import { ref, reactive, toRaw } from 'vue'
import useIndexedDB from '@/modules/Demo4/composables/useIndexedDB'
import { useRouter } from 'vue-router'
export default {
  name: 'Formlogin',
  setup () {
    const { create, get } = useIndexedDB()
    const formRef = ref()
    const dataForm = reactive({
      email: '',
      password: '',
      repeatpassword: ''
    })
    const validatePass = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(new Error('Please input the password'))
      } else if (value.length < 6) {
        return Promise.reject(new Error('Password is too short'))
      } else {
        if (dataForm.repeatpassword !== '') {
          formRef.value.validateFields('repeatpassword')
        }
        return Promise.resolve()
      }
    }
    const validatePass2 = async (rule: RuleObject, value: string) => {
      if (value === '') {
        return Promise.reject(new Error('Please input the password again'))
      } else if (value !== dataForm.password) {
        return Promise.reject(new Error('Two passwords do not match'))
      } else {
        return Promise.resolve()
      }
    }
    const validatorEmail = async (rule: RuleObject, value: string) => {
      const datas: any[] = await get()
      const find = datas.find((item) => item.email === value)
      if (find) {
        return Promise.reject(new Error('Email already exists'))
      } else if (value === '') {
        return Promise.reject(new Error('Please input the Email again'))
      } else {
        return Promise.resolve()
      }
    }
    const rules = reactive({
      email: [
        {
          required: true,
          trigger: 'change',
          validator: validatorEmail
        }
      ],
      password: [
        {
          required: true,
          trigger: 'change',
          validator: validatePass
        }
      ],
      repeatpassword: [
        {
          required: true,
          validator: validatePass2
        }
      ]
    })
    const router = useRouter()
    const onSubmit = () => {
      formRef.value.validate().then(async () => {
        create(toRaw(dataForm)).then((data) => {
          console.log('data', data)
        })
        router.push({ name: 'login' })
      })
    }
    const onSubmitlogin = () => {
      router.push({ name: 'login' })
    }
    return {
      formRef,
      rules,
      dataForm,
      onSubmit,
      onSubmitlogin
    }
  }
}
</script>
<style lang="scss">
.rowcontent {
  justify-content: center;
  .ant-col-12 {
    flex: 0 0 0;
    .image {
      height: 450px;
      object-fit: cover;
      border-top-left-radius: $boder-radiuss;
      border-bottom-left-radius: $boder-radiuss;
      margin: 0;
    }
  }
  .formlogin {
    background-color: $background-white;
    padding: 15px;
    height: 450px;
    border-top-right-radius: $boder-radiuss;
    border-bottom-right-radius: $boder-radiuss;
    .ant-form-item-control-input-content {
      display: flex;
      margin-top: 20px;
      width: 352px;
      .ant-btn {
        border-radius: 10px;
        background: $btn-color;
        width: $width-distance;
        &:hover {
          background-color: $btn-color;
          border-color: $btn-color;
          color: black;
        }
      }
    }
  }
}
</style>
