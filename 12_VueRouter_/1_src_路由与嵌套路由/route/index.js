import Vue from 'vue'
// 引入VueRouter插件
import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"

// 使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',
      // alias: '/bieming', 别名(即网页路径上的名字是/bieming,实际上是访问的是/about)
      component: About
    },
    {
      path: '/home',
      component: Home,
      // children之后的path不需要加/. 直接写news/xxx
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
        }
      ]
    },
  ]
})