<template>
  <div class="Test">
    <h2>当前求和为: {{$store.state.sum}}</h2>
    <h2>当前求和10倍为: {{$store.getters.bigSum}}</h2>
    <h3>当前所在地: {{$store.state.address}} {{$store.state.weather}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addOdd">当前求和为奇数再加</button>
    <button @click="addWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // dispatch 是发给store中的actions
    increment() {
      this.$store.commit('JIA', this.n)
    },
    decrement() {
      this.$store.commit('JIAN', this.n)
    },
    addOdd() {
      this.$store.dispatch('jiaOdd', this.n)
    },
    addWait() {
      this.$store.dispatch('jiaWait', this.n)
    },
  },
  mounted() {
   
  },
};
</script>
<style >
button {
  margin-left: 4px;
}
</style>
