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
  // 组件内的守卫
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    // 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫。
    console.log('前,过一秒后跳转',to, from, next)
    setTimeout(() => {
      next()
    }, 1000);
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用(即这个组件有子组件,并且携带参数传给子组件)
    // 举例来说，对于一个带有动态参数的路径 /message/:id，在 /message/1 和 /message/2 之间跳转的时候，
    // 由于会渲染同样的 Message 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log('中',to, from, next)
    next()
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('后',to, from, next)
    next()
  }
};
</script>
  
<style>
</style>