<template>
  <div>
    <ul>
      <li v-for="m in detailList" :key="m.id">
        <!-- 跳转路由并携带params参数, to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

        <!-- 跳转路由并携带params参数, to的对象写法 -->
        <router-link
          :to="{
            // path: '/home/message/detail', // 可以用命名路由来代替跳转的路由路径
            name: 'xiangqing', //用params传参的to的对象写法,这里的路径必须用name(命名参数来确定).不可使用path
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
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