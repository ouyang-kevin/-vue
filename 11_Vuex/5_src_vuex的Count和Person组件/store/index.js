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
  },
  ADD_PERSON(state, value) {
    state.personList.unshift(value)
  }
}
// 准备state---用于存储数据(相当于data)
const state = {
  sum: 0,
  address: '深圳',
  weather: '30℃',
  personList: [{id:'001', name:'张三'}]
}
// 准备getters---对state数据进行操作(相当于computed)
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建和暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
