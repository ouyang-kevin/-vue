<template>
  <div>
    <h3 :style="{color: 'red'}">Count组件的当前求和值: {{sum}}</h3>
    <h4>列表的第一个人姓名: {{fristname}}</h4>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addRandom">随机添加</button>
    <ul>
      <li v-for="item in person" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    // 方法属性,就需要在commit('personAbout/ADD_PERSON', objList)文件名前ADD_PERSON添加相关的配置名
    add() {
      const objList = {id: nanoid(), name: this.name.trim()}
      this.$store.commit('personAbout/ADD_PERSON', objList)
      this.name = ''
    },
    addWang() {
      const objList = {id: nanoid(), name: this.name.trim()}
      this.$store.dispatch('personAbout/addFirstnameWang', objList)
      this.name = ''
    },
    addRandom() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
  computed: {
    // 计算属性可以直接在state后,加上相关配置的配置名就可以找到配置中的state数据
    sum() {
      return this.$store.state.countAbout.sum
    },
    person() {
      return this.$store.state.personAbout.personList
    },
    fristname() {
      // getters中寻找相关路径['personAbout/showFristname']
      return this.$store.getters['personAbout/showFristname']
    }
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>

</style>