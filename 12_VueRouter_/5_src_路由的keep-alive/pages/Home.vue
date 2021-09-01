<template>
  <div class="col-xs-6">
    <div class="panel">
      <div class="panel-body">
        <h2>我是Home的内容</h2>
        <ul class="nav nav-tabs">
          <li>
            <router-link
              class="list-group-item"
              route-active="active"
              to="/home/news"
            >
            News
            </router-link>
          </li>
          <li>
            <router-link
              class="list-group-item"
              route-active="active"
              to="/home/message"
              >
              Message
            </router-link>
          </li>
        </ul>
        <!-- 这样就可以让News和Message组件的页面路由跳转时,不被销毁.可以一直存活 -->
        <!-- :include="['News', 'Message']" 是让多个组件存活 -->
        <!-- include="Message" 是让一个组件存活 (Message是组件的name的属性值) -->
        <keep-alive  :include="['News', 'Message']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Home",
};
</script>