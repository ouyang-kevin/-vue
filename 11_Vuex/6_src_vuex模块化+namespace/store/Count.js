// 求和相关数据
export default {
  // 配置命名空间
  namespaced: true,
  actions: {
    // commit是将数据发给store中的mutations
    jiaOdd(context, value) {
      context.commit('JIAODD', value)
    },
    jiaWait(context, value) {
      context.commit('JIAWAIT', value)
    },
  },
  mutations: {
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
  },
  state: {
    sum: 0,
    address: '深圳',
    weather: '30℃',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
}