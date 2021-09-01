<template>
  <div class="app">
    <h2>{{ msg }}</h2>
    <hr />
    <!-- 通过父组件给子组件传递函数类型的props实现: 子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第一种写法,使用@或者v-on) -->
    <!-- <Student v-on:atguigu="getStudentName"/> -->
    <!-- 简写形式 -->
    <!-- <Student @atguigu="getStudentName"/> -->
    <!-- 事件只触发一次.使用once -->
    <!-- <Student @atguigu.once="getStudentName"/> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现: 子给父传递数据(第二种写法,使用ref.  使用ref可以控制事件多久之后再绑定) -->
    <Student ref="student" />
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊!",
    };
  },
  methods: {
    // 传统父传子方式
    getSchoolName(name) {
      console.log("App收到了学校名-----", name);
    },
    getStudentName(name) {
      console.log("App收到了学生名*****", name);
    },
  },
  mounted() {
    // 3秒之后,再绑定atguigu事件(事件为执行getStudentName函数)
    setTimeout(() => {
      this.$refs.student.$on("atguigu", this.getStudentName);
    }, 3000);
    // 事件只触发一次.使用once
    // setTimeout(() => {
    //   this.$refs.student.$once("atguigu", this.getStudentName);
    // }, 3000);
  },
};
</script>

<style scoped>
.app {
  background-color: #eee;
}
</style>