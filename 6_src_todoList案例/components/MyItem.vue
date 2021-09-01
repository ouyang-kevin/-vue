<template>
  <li>
    <label>
      <!-- 
          对input既要'选择'(:checked)又要'点击判断'(@click), 
          可以使用v-model来代替这两个,但是这里操作的数据是props传入的数据. 
          props传入的数据,不建议用v-model绑定,否则数据发生改变,监测不到
      -->
      <!-- <input type="checkbox" v-model="todo.done"/>  不推荐使用-->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="changeCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="btnDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    // 删除todo对象
    btnDelete(id) {
      if (confirm("确认删除吗?")) {
        this.deleteTodo(id);
      }
    },
    // todo是否勾选的方法
    changeCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.checkTodo(id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #eee;
}
li:hover button {
  display: block;
}
</style>