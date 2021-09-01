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
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Home",
};
</script>