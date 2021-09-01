// Vuex 可以帮助我们管理共享状态(数据)
// 引入vue
import Vue from 'vue'
// 引入Vuex插件
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions---用于响应组件中的动作
const actions = {
  // commit是将数据发给store中的mutations
  jia(context, value) {
    context.commit('JIA', value)
  },
  jian(context, value) {
    context.commit('JIAN', value)
  },
  jiaOdd(context, value) {
    context.commit('JIAODD', value)
  },
  jiaWait(context, value) {
    context.commit('JIAWAIT', value)
  },
}
// 准备mutations---用于操作数据(state)
const mutations = {
  JIA(state, value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
  JIAODD(state, value) {
    if (state.sum % 2) {
      state.sum += value
    }
  },
  JIAWAIT(state, value) {
    setTimeout(() => {
      state.sum += value
    }, 300);
  }
}
// 准备state---用于存储数据
const state = {
  sum: 0,
}

// 创建和暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
