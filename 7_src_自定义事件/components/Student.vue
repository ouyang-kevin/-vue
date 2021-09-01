<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给App</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例身上的atguigu事件(在App组件上定义的组件),并且将参数name传入
      this.$emit('atguigu', this.name)
    }
  },
};
</script>

<style scoped>
.student {
  background-color: orange;
  margin: 30px 0;
}
</style>