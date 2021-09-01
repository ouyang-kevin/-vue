<template>
  <div> 
    <h2>{{msg}}</h2>
    <hr>
    <Student name='张三' sex="男" :age="18"></Student>
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
  data() {
    return {
      msg: '这是展示的一些信息'
    }
  }
};
</script>

<style>
</style>