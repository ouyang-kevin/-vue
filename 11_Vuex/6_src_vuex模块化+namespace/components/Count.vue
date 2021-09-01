<template>
  <div class="Test">
    <h2>当前求和为: {{ sum }}</h2>
    <h2>当前求和10倍为: {{ bigSum }}</h2>
    <h3>当前所在地: {{ address }} {{ weather }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
    <h3 :style="{ color: 'red' }">Person组件中的人员个数: {{personList.length}}</h3>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // 借助mapState生成计算属性,从state中读取数据(数组写法)
    // 在store中配置了namespaced(命名空间), 就可以通过countAbout直接去找路径
    ...mapState('countAbout', ["sum", "address", "weather"]),
    ...mapState('personAbout', ['personList']),

    // 借助mapGetters生成计算属性,从getter中读取数据(数组写法)
    ...mapGetters('countAbout', ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成对应的方法, 方法中会调用commit去联系mutations(对象写法)
    ...mapMutations('countAbout', { increment: "JIA", decrement: "JIAN" }),

    // 借助mapActions生成对应的方法, 方法中会调用dispatch去联系actions(对象写法)
    ...mapActions('countAbout', { addOdd: "jiaOdd", addWait: "jiaWait" }),
  },
};
</script>
<style >
button {
  margin-left: 4px;
}
</style>
