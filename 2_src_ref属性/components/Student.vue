<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student", 
  data() {
    return {
      name: '李四',
      age: 16,
      sex: '男'
    };
  },
};
</script>

<style>
</style>