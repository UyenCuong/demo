import { createApp, h } from 'vue'
import router from './router'
import App from './components/App.vue'
export default function registerVueModule (plugins: any, modules: any = []) {
  const app = createApp({
    render () {
      return (
        h(App)
      )
    }
  })
  modules.map((Module: any) => new Module(router).install(app))
  app.use(router)
  Object.values(plugins).forEach((plugin: any) => app.use(plugin))
  app.mount('#app')
}
