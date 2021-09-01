<template>
  <div class="Test">
    <button @click="getStudentInfo">获取学生数据</button>
    <button @click="getCarInfo">获取汽车数据</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  data() {
    return {};
  },
  methods: {
    getStudentInfo() {
      axios
        .get(`http://localhost:8080/stus/students`)
        .then((response) => {
          console.log("请求成功", response.data);
        })
        .catch((err) => {
          console.log("请求失败", err.message);
        });
    },
    getCarInfo() {
      axios
        .get(`http://localhost:8080/cars/cars`)
        .then((response) => {
          console.log("请求成功", response.data);
        })
        .catch((err) => {
          console.log("请求失败", err.message);
        });
    },
  },
};
</script>

<style scoped>
.Test {
  margin: 30px 0;
}
h1 {
  background-color: orange;
}
</style>