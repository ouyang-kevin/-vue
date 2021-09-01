<template>
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ TheAge }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="addAge">点我年龄加一</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  //  简单声明接收   props接收的数据级别高于本地data中定义的数据级别
  // props: ["name", "age", 'sex'], 
  // 接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age: Number,
  //   sex:String
  // },
  // 完整声明接收
  props: {
    name: {
      type: String, //类型要求
      required: true, //要求必传的数据
    },
    age: {
      type: Number,
      default: 17  //默认数据值; 与required两者只能出现一个
    },
    sex: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      TheAge: this.age,
    };
  },
  methods: {
    addAge() {
      this.TheAge++;
    },
  },
};
</script>

<style>
</style>