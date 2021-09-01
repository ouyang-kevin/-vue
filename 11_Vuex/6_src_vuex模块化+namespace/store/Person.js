import axios from "axios"
import { nanoid } from "nanoid"

// 人员管理相关数据
export default  {
  namespaced: true,
  // 准备actions---用于响应组件中的动作
  actions: {
    addFirstnameWang(context, value) {
      // if(0)为false;  if(-1)\if(1)均为true    indexOf('a')为a在第几个位置出现(0-n)
      if (value.name.indexOf('王')) {
        alert('输入必须姓氏是王!')
      }else{
        context.commit('ADD_PERSON', value)
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
      response => {
        context.commit('ADD_PERSON', {id:nanoid(), name: response.data})
      },
      error => {
        alert(error.message)
      }
      )
    }
  },
  // 准备mutations---用于操作数据(state)
  mutations: {
    ADD_PERSON(state, value) {
      if(value.name === ''){
        alert('输入不能为空!!')
      }else{
        state.personList.unshift(value)
      }
    }
  },
  // 准备state---用于存储数据(相当于data)
  state: {
    personList: [{
      id: '001',
      name: '张三'
    }]
  },
  // 准备getters---对state数据进行操作(相当于computed)
  getters: {
    showFristname(state) {
      return state.personList[0].name
    }
  },
}