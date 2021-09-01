<template>
  <div> 
    <!-- 
      对于传统的html标签(h1. button)来说,ref跟id是同一个作用,相当于一个标志
      对于组件来说,(Student).ref就可以拿到组件的实例对象(vc)
     -->
    <h2 v-text="msg" ref="title" id="tit"></h2>
    <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
    <Student ref="stu"></Student>
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
  },
  methods: {
    showDom() {
      console.log('id获取Dom元素11111',document.getElementById('tit'))
      console.log('ref获取Dom元素2222',this.$refs)
      console.log('ref获取Dom元素3333',this.$refs.stu.age)  //通过ref通过组件获取组件上的属性age(组件间通信)
    }
  },
};
</script>

<style>
</style>