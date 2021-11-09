import { RouteRecordRaw } from 'vue-router'
import Demo4 from '../views/Demo4.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo4',
    name: 'demo4',
    component: Demo4,
    children: [
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }
    ]
  }
]

export default routes
