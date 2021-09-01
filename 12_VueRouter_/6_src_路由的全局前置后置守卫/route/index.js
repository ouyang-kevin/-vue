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
// 全局前置导航守卫(进入该组件之前)
// (to是去哪个组件,from是从哪个组件来.next()是个函数.执行该函数,则直接下一步)
router.beforeEach((to, from , next) => {
  console.log('我是全局前置守卫',to, from , next)
  next()
})
// 全局后置导航守卫(进入该组件之后)
router.afterEach((to, from , next) => {
  console.log('我是后置全局守卫',to, from , next)
})
export default router