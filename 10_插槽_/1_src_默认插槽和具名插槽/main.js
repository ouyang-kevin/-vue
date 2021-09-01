import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //阻止 vue 在启动中生成生产提示

// 绑定全局事件总线  GlobalEventBus
new Vue({
  render: h => h(App),
}).$mount('#app')           
