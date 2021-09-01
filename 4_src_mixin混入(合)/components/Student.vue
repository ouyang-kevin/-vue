<template>
  <div class="stu">
    <h2 @click="showName">学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <h2>学生性别:{{ sex }}</h2>
  </div>
</template>

<script>
// 引入分别暴露的mixin文件
import {hunhe} from '../mixin'
export default {
  name: "Student", 
  data() {
    return {
      name: '李四',
      age: 16,
      sex: '男'
    };
  },
  // 局部注册mixins
  mixins:[hunhe]
};
</script>

<style>
.stu{
  background: skyblue;
}
</style>