<template>
  <div class="Test">
    <button @click="isShow = !isShow">显示与隐藏</button>
    <!-- 
      vue中使用配置的动画
    transition只能配置一组html标签页
    transition-group能配置多组html标签页
    appear是让动画自行进入
     -->
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">{{ info }}</h1>
      <h1 v-show="!isShow" key="2">{{ infos }}</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      info: "你好啊!",
      infos: "你好啊!世界",
      isShow: true,
    };
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
/* 进入的动画属性 */
.hello-enter-active {
  animation: atguigu 0.5s linear;
}
/* 离开的动画属性 */
.hello-leave-active {
  animation: atguigu 0.5s linear reverse;
}
/* 配置动画名为atguigu */
@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>