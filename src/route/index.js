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
//   单页面应用(SPA)的核心之一是:
// 1.更新视图而不重新请求页面;
// 2.vue-router在实现单页面前端路由时，提供了三种方式：Hash模式、History模式、abstract模式，根据mode参数来决定采用哪一种方式。
// 路由模式
// vue-router 提供了三种运行模式：
// ● hash: 使用 URL hash 值来作路由。默认模式。
// ● history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
// ● abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。
  // mode: 'hash',
  // mode: 'abstract',
  mode: 'history',
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
// 1.对于一个url来说,什么是hash值?   ---- #及其后面的内容就是hash值。
// 2.hash值不会包含在HTTP请求中,即:hash值不会带给服务器。
// 3.hash模式：
//    1.地址中永远带着#号,不美观。
//    2.若以后将地址通过第三方手机app分享,若app校验严格,则地址会被标记为不合法。
//    3.兼容性较好。
// 4.history模式:
//    1.地址干净,美观。      
//    2.兼容性和hash模式相比略美。
//    3.应用部署上线时需要后端人员支持，解决刷新页面服务器404的问题。