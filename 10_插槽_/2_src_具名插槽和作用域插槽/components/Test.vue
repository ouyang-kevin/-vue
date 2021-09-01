<template>
  <div class="Test">
    <!-- 默认插槽不可以与作用域插槽同时使用,会将默认插槽给替换掉.所以默认插槽不起作用.两者不能同时使用. -->
    <!-- 具名插槽可以与作用域插槽同时使用 -->
    <!-- 默认插槽 -->
    <!-- <slot>默认数据</slot> -->
    <h5 > {{title}}分类</h5>
    <!-- 作用域插槽 -->
    <!-- 将本地的game数据和otherInfo数据传递给父组件 -->
    <slot :game="game" :otherInfo="otherInfo">插槽内容能够访问子组件中才有的数据,作用域插槽</slot>
    <!-- 具名插槽 -->
    <slot name="foot">我是具名插槽,没有模版,我会默认输出</slot>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Test",
  props:['title'],
  data() {
    return {
      defalutMes:'默认数据',
      otherInfo:'有的没的信息',
      game: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
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