import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import routes from './router'
import { App } from 'vue'

export class Demo3Module implements VueModule {
  readonly name = 'demo3'
  // eslint-disable-next-line no-useless-constructor
  constructor (private router: Router) {}

  install (app: App) {
    this.router.addRoute('app', routes[0])
  }
}
