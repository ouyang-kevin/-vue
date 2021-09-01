export default {
  install(Vue) { // 这里的参数暴露出来的是Vue的构造函数(vue的缔造者)
    // 配置全局过滤器
    Vue.filter('myfilter', function (val) {
      return val.slice(0, 4)
    })
    // 定义全局指令 (与过滤器定义相似)
    Vue.directive('fbind', {
      // 3个钩子函数
      // 指令与元素成功绑定时(一上来)
      bind(element, binding) {
        element.value = binding.value
      },
      // 指令所在元素被插入页面时
      inserted(element) {
        element.focus()
      },
      // 指令所在的模版发生重新编译时
      update(element, binding) {
        element.value = binding.value
      },
    })
    // 定义混入
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 412
        }
      },
    })
    // 在Vue的原型上添加一个方法(vm和vc就都能用了)
    Vue.prototype.hello = () => {alert('你好啊')}
  }
}