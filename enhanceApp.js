import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(ElementUI);
  const requireComponent = require.context(
    './globalcomponents',
    false,
    /[A-Za-z0-9-]+\.(vue|js)$/
  )

  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
    Vue.component(componentName, componentConfig.default || componentConfig)
  })

  // 创建一个全局事件总线
  const EventBus = new Vue()

  // 将事件总线添加到 Vue 原型上
  Vue.prototype.$EventBus = EventBus

}
