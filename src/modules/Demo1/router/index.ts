import { RouteRecordRaw } from 'vue-router'
import Demo1 from '../views/Demo1.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo1',
    name: 'demo1',
    component: Demo1
  }
]

export default routes
