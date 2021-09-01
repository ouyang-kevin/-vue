<template>
  <div class="app">
    <Test/>
  </div>
</template>

<script>
// 引入组件
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    Test,
  },
};
</script>

<style scoped>
.app {
  background-color: #eee;
}
</style>