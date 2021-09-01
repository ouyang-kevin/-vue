// Vuex 可以帮助我们管理共享状态(数据)
// 引入vue
import Vue from 'vue'
// 引入Vuex插件
import Vuex from 'vuex'
// 引入count相关配置
import countAbout from './Count'
// 引入person相关配置
import personAbout from './Person'


// 使用Vuex插件
Vue.use(Vuex)


// 创建和暴露store
export default new Vuex.Store({
  modules: {
    countAbout,
    personAbout
  }
})