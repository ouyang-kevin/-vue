import Vue from 'vue'
// 引入VueRouter插件
import VueRouter from "vue-router";
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"

// 使用插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [{
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [{
            name: 'xiangqing',
            path: 'detail/:id/:title',
            component: Detail,
            props($route) {
              return {
                id: $route.params.id,
                title: $route.params.title
              }
            }
          }]
        }
      ]
    },
  ]
})
export default router