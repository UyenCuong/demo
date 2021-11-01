import { App } from 'vue'
import {
  Button,
  Input,
  Form,
  Anchor,
  Image,
  Row,
  Col,
  Layout,
  Menu

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
      Col,
      Layout,
      Menu
    ]
    components.map((c) => app.use(c))
  }
}
