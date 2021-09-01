<template>
  <!-- total为0时, v-show="false" -->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- 
          对input既要'选择'(:checked)又要'点击判断'(@click), 
          可以使用v-model来代替这两个,这里操作的数据是本地computed中isArr的数据. 可以使用
      -->
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 这里的isAll就不能用简写形式,必须要用标准形式,get和set -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoArr", "checkAllTodo", 'clearAllTodo'],
  data() {
    return {
      deleteTodo:[]
    }
  },
  computed: {
    // todo完成统计
    doneTotal() {
      // reduce中第一个参数(箭头函数),执行次数取决于todoArr数组的长度(3),current是数组长度的每一项
      return this.todoArr.reduce((pre, current) => {
        // return返回的是执行数组长度(3次)的次数之后的返回值
        return pre + (current.done === true ? 1 : 0); //pre是前一次的返回值,第一次(初始值)为0
      }, 0); // pre 的初始值为0
    },
    // todo的个数
    total() {
      return this.todoArr.length;
    },
    // todo是否全部勾选
    // isAll() {
    //   return this.doneTotal === this.total && this.total > 0;
    // },
    // todo是否全部勾选   &&    全部勾选与非全勾
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(val) {
        this.checkAllTodo(val);
      },
    },
  },
  methods: {
    // 清除已完成任务
    clearAll() {
      this.clearAllTodo()
    },
    // 全部勾选与非全勾
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked)
    // }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>