// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 全局引入mixin文件
// import {hunhe2} from './main'
// 全局注册mixin文件
// Vue.mixin(hunhe2)

Vue.config.productionTip = false 

new Vue({
  render: h => h(App),   
}).$mount('#app')        
  
