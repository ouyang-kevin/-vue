<template>
  <div>
    <ul>
      <li v-for="m in detailList" :key="m.id">
        <router-link
          replace
          :to="{
            name: 'xiangqing', 
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
          <!-- 在input输入框输入内容后,路由跳转至别的页面,返回该页面时,input输入框内容不会被清空(即让页面不被销毁) -->
          <input type="text">
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
  
<script>
export default {
  name: "Message",
  data() {
    return {
      detailList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
    };
  },
};
</script>
  
<style>
</style>