import registerVueModule from '@/core'
import Antd from './antd'
import { Demo1Module } from '@/modules/Demo1'
import { Demo2Module } from '@/modules/Demo2'
import { Demo3Module } from '@/modules/Demo3'
import { Demo4Module } from '@/modules/Demo4'
// import '@/styles/main.scss'
registerVueModule({
  Antd
}, [
  Demo1Module,
  Demo2Module,
  Demo3Module,
  Demo4Module
])
