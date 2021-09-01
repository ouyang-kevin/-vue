// 引入vue
import Vue from 'vue'
// 引入Vuex插件
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions---用于响应组件中的动作
const actions = {}
// 准备mutations---用于操作数据(state)
const mutations = {}
// 准备state---用于存储数据
const state = {}

// 创建和暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})

// Vuex 可以帮助我们管理共享状态(数据)