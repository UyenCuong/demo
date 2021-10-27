import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import registerVueModule from '@/core'
import 'ant-design-vue/dist/antd.css'
import App from './core/components/App.vue'

import { Demo1Module } from '@/modules/Demo1'
import { Demo2Module } from '@/modules/Demo2'
import { Demo3Module } from '@/modules/Demo3'
import { Demo4Module } from '@/modules/Demo4'

// import '@/styles/main.scss'

registerVueModule({
}, [
  Demo1Module,
  Demo2Module,
  Demo3Module,
  Demo4Module
])
createApp(App).use(Antd)
