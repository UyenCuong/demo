import { App } from 'vue'
import {
  Button,
  Input,
  Form,
  Anchor,
  Image,
  Row,
  Col
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
export default {
  install: (app: App) => {
    const components = [
      Button,
      Input,
      Form,
      Anchor,
      Image,
      Row,
      Col
    ]
    components.map((c) => app.use(c))
  }
}
