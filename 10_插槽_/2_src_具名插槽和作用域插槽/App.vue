<template>
  <div class="app">
    <div class="demo">
      <Test title="游戏">
        <!-- 使用默认插槽 -->
        <!-- <p>默认数据,我是App模版</p> -->
        <!-- 使用作用域插槽 -->
        <!-- 父组件接受来自子组件的插槽内传入的内容(v-slot="game")以对象的形式接收-->
        <template v-slot="slotInfo">
          <ol>
            <li v-for="(g, index) in slotInfo.game" :key="index">
              {{ g }}
            </li>
          </ol>
          <span>{{slotInfo.otherInfo}}</span>
        </template>
        <!-- 使用具名插槽 -->
        <!-- <a slot="foot" href="#">百度一下,你就知道</a> -->
        <!-- 具名插槽有template模版时,可以简写, v-slot:foot-->
        <template v-slot:foot>
        <a href="#">百度一下,你就知道</a>
        </template>
      </Test>
    </div>
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
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.app {
  background-color: #eee;
}
.demo, a {
  display: flex;
  justify-content: space-around;
}
</style>