<template>
  <div>
    <h3 :style="{color: 'red'}">Count组件的当前求和值: {{sum}}</h3>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="add">添加</button>
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
    add() {
      if (this.name === '') {
        alert('输入不能为空')
       }else{
         this.$store.commit('ADD_PERSON',{id: nanoid(), name: this.name.trim()})
       }
       this.name = ''
       console.log(this.$store.state.personList)
    }
  },
  computed: {
    sum() {
      return this.$store.state.sum
    },
    person() {
      return this.$store.state.personList
    }
  }
}
</script>

<style>

</style>