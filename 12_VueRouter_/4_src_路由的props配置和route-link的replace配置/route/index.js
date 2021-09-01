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
      // children之后的path不需要加/. 直接写news/xxx
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
            // 第一种写法,props值为对象,该对象中所有的key-value的组合最终都会通过props传给Detail组件   (都是死数据)
            // props: {id: 666, title: '你好啊'}
            // 第二种写法,props值为布尔值,则把路由收到的所有params参数,通过props传给Detail组件   (只能收到params数据)
            // props:true
            // 第三种写法,props值为函数,则把路由收到的所有参数,通过props函数的返回值传给Detail组件   (只能收到params数据)
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