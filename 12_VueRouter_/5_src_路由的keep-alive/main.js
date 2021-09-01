import Vue from 'vue'
import App from './App.vue'
import router from './route'

Vue.config.productionTip = false //阻止 vue 在启动中生成生产提示

new Vue({
  render: h => h(App),
  router
}).$mount('#app')           
