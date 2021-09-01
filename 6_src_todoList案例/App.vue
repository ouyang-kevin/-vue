<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList
        :todoArr="todoArr"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
      <MyFooter :todoArr="todoArr" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
    </div>
  </div>
</template>

<script>
// 引入组件
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todoArr: [
        { id: "001", title: "抽烟", done: true },
        { id: "002", title: "喝酒", done: false },
        { id: "003", title: "开车", done: true },
      ],
    };
  },
  methods: {
    // 删除todo对象
    deleteTodo(id) {
      // todoArr.filter()过滤掉数组中不符合条件的元素   生成一个新数组.让todoArr等于这个新数组
      this.todoArr = this.todoArr.filter((todo) => {
        return todo.id != id; //return 过滤的条件(id不同)
      });
    },
    // 是否勾选todo对象
    checkTodo(id) {
      this.todoArr.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 添加todo对象
    addTodo(val) {
      this.todoArr.unshift(val);
    },
    // 全部勾选与非全勾
    checkAllTodo(val) {
      this.todoArr.forEach((todo) => {
        todo.done = val;
      });
    },
    // 清除已完成的todo
    clearAllTodo() {
      this.todoArr = this.todoArr.filter((todo) => {
        return !todo.done //过滤掉todo.done为false
      });
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>