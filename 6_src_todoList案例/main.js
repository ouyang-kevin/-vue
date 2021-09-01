// 引入vue
import Vue from 'vue'
// 引入APP
import App from './App.vue'


// 关闭vue的生产提示
Vue.config.productionTip = false 

new Vue({
  el: '#app',
  render: h => h(App),   
})     
  
