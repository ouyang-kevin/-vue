<template>
  <div>
    <h2>社会主义接班人</h2>
    <School></School>
    <hr/>
    <Student></Student>
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
    School
  },
  data() {
    return {
      msg: "这是展示的一些信息",
    };
  },
  methods: {
  },
};
</script>

<style>
</style>