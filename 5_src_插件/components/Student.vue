<template>
  <div class="stu">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
    <button @click='getHello'>点我输出hello函数</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "李四",
      age: 16,
      sex: "男",
    };
  },
  methods: {
    getHello() {
      this.hello()
    }
  },
};
</script>

<style>
.stu {
  background: skyblue;
}
</style>