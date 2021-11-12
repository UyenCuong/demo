<template>
  <a-row class="rowcontent">
    <a-col :span="12">
      <a-image
        class="image"
        :width="300"
        src="https://vaithuhayho.com/wp-content/uploads/2021/04/hinh-anh-meo-de-thuong-4.jpg"
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
        <a-form-item class="formlogin__submit">
          <a-button @click="onSubmit()" class="demo5 formlogin__submit--btn">
            Login
          </a-button>
          <a-button @click="onSubmitsignup()" class="register">
            Sign Up
          </a-button>
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
import { ref, reactive } from 'vue'
import useIndexedDB from '@/modules/Demo4/composables/useIndexedDB'
import { useRouter } from 'vue-router'
export default {
  name: 'Formlogin',
  setup () {
    const title = ref<boolean>(false)
    const router = useRouter()
    const { get } = useIndexedDB()
    const formRef = ref()
    const dataForm = reactive({
      email: '',
      password: ''
    })
    const validatePassword = async (rule: RuleObject, value: string) => {
      const datas: any[] = await get()
      const findPassword = datas.find(
        (item) => item.password === dataForm.password
      )
      if (value === '') {
        return Promise.reject(new Error('Please input the Email again'))
      } else if (!findPassword) {
        return Promise.reject(new Error('Password is incorrect'))
      } else {
        return Promise.resolve()
      }
    }
    const validatorEmaillogin = async (rule: RuleObject, value: string) => {
      const datas: any[] = await get()
      const findEmail = datas.find((item) => item.email === dataForm.email)
      if (value === '') {
        return Promise.reject(new Error('Please input the Email again'))
      } else if (!findEmail) {
        return Promise.reject(new Error('Email is incorrect'))
      } else {
        return Promise.resolve()
      }
    }
    const rules = reactive({
      email: [
        {
          required: true,
          trigger: 'change',
          validator: validatorEmaillogin
        }
      ],
      password: [
        {
          required: true,
          trigger: 'change',
          validator: validatePassword
        }
      ]
    })
    const onSubmit = async () => {
      formRef.value.validate().then(async () => {
        window.localStorage.setItem('user', JSON.stringify(dataForm))
        router.push({ name: 'demo5' })
      })
    }
    const onSubmitsignup = () => {
      router.push({ name: 'register' })
    }
    return {
      formRef,
      dataForm,
      onSubmit,
      rules,
      title,
      onSubmitsignup
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
  .title {
    color: rgb(238, 27, 27);
    text-align: center;
  }
  .formlogin__submit--btn {
    margin-top: -2px;
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
