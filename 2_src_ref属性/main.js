import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //阻止 vue 在启动中生成生产提示

new Vue({
  render: h => h(App),   //render函数可以让我们不引用完整版的vue
}).$mount('#app')        // $mount是操作配置el: "#app"    

// new Vue({
//   el: '#app',
//   template: `<App></App>`,
//   components: {
//     App
//   }
// })    
