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


export default new VueRouter({
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
          // 路由独享守卫(即只有News组件才有这个守卫)
          beforeEnter: (to, from, next) => {
            console.log('我是News组件的专享守卫',to,from,next)
            next()
          }
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
// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活(deactivated)的组件里调用 beforeRouteLeave 守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫 (2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。