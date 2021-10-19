declare module 'vue-modules' {
  import { App } from 'vue'
  export interface VueModule<T = Record<string, any>> {
    readonly name: string;
    install(app: typeof App): void;
    install(app: typeof App, options: T): void;
  }
}
