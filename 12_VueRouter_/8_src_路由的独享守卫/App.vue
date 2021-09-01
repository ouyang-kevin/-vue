<template>
  <div class="app">
    <Header/>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" route-active="active" to="/about">About</router-link>
          <router-link class="list-group-item" route-active="active" to="/home">Home</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 引入组件
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  }
};
</script>