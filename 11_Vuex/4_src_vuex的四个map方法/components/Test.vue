<template>
  <div class="Test">
    <h2>当前求和为: {{sum}}</h2>
    <h2>当前求和10倍为: {{bigSum}}</h2>
    <h3>当前所在地: {{address}} {{weather}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="addOdd(n)">当前求和为奇数再加</button>
    <button @click="addWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from "vuex";
export default {
  name: "Test",
  props: ["title"],
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    // 借助mapState生成计算属性,从state中读取数据(对象写法)
    // ...mapState({sum: 'sum', address: 'address', weather:'weather'}),
    // 借助mapState生成计算属性,从state中读取数据(数组写法)
    ...mapState(['sum','address','weather']),

    // 借助mapGetters生成计算属性,从getter中读取数据(对象写法)
    // ...mapGetters({bigSum: 'bigSum'}),
    // 借助mapGetters生成计算属性,从getter中读取数据(数组写法)
    ...mapGetters(['bigSum']),
  },
  methods: {
    // 借助mapGetters生成计算属性,从getter中读取数据(数组写法)
    // 程序员自己写
    // increment() {
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN', this.n)
    // },

    // 借助mapMutations生成对应的方法, 方法中会调用commit去联系mutations(对象写法) 
    ...mapMutations({increment: 'JIA', decrement: 'JIAN' }),
    // 借助mapMutations生成对应的方法, 方法中会调用commit去联系mutations(数组写法) 
    // ...mapMutations(['JIA','JIAN']),(要去改名字都为JIA)

    // 程序员自己写
    // addOdd() {
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // addWait() {
      //   this.$store.dispatch('jiaWait', this.n)
    // },

    // 借助mapActions生成对应的方法, 方法中会调用dispatch去联系actions(对象写法) 
    ...mapActions({addOdd: 'jiaOdd', addWait: 'jiaWait'}),
    // 借助mapActions生成对应的方法, 方法中会调用dispatch去联系actions(数组写法) 
    // ...mapActions(['jiaOdd', 'jiaWait']),(要去改名字都为jiaOdd)
  },
};
</script>
<style >
button {
  margin-left: 4px;
}
</style>
