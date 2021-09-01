<template>
  <div class="app">
    <div class="demo">
      <Test title="美食">
        <ul>
          <li v-for="(f, index) in food" :key="index">
            {{ f }}
          </li>
        </ul>
      </Test>
      <Test title="游戏">
        <ol>
          <li v-for="(g, index) in game" :key="index">
            {{ g }}
          </li>
        </ol>
        <a slot="center" href="#">百度一下,你就知道</a>
      </Test>
      <Test title="电影">
        <h4 v-for="(f, index) in file" :key="index">{{ f }}</h4>
        <!-- 用template包裹,直接用 v-slot:center-->
        <template v-slot:center>
          <a href="#">热门</a>
          <a href="#">推荐</a>
          <a href="#">金典</a>
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
      game: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      food: ["鸡", "鸭", "鱼", "肉"],
      file: ["《送你一朵小红花》", "《少年的你》", "《五百》", "《匆匆那年》"],
    };
  },
};
</script>

<style scoped>
.app {
  background-color: #eee;
}
.demo {
  display: flex;
  justify-content: space-around;
}
</style>