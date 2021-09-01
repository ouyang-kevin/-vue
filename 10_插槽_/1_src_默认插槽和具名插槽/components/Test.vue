<template>
  <div class="Test">
    <h5 > {{title}}分类</h5>
    <slot>我是默认插槽</slot>
    <slot name="center">我是具名插槽</slot>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  props:['title'],
  data() {
    return {
        
    };
  },
};
</script>

<style scoped>
.Test {
  margin: 30px 0;
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h5{
  text-align: center;
  background-color: orange;
}
</style>