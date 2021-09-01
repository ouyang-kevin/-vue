<template>
  <div class="sch">
    <h2 @click="showName">学校:{{ name }}</h2>
    <h2>地址:{{ address	}}</h2>
  </div>
</template>

<script>
// 引入分别暴露的mixin文件 
import {hunhe} from '../mixin'
export default {
  name: "School", 
  data() {
    return {
      name: '深圳大学',
      address: '深圳',
    };
  },
  mounted() {
    console.log('我是组件数据')
  },
  // 局部注册mixins,这样这个组件就有了mixin文件中的所有数据,mixin数据中与组件data中数据一致时, 以组件为准
  // 当组件与mixin中都定义了钩子函数（mounted）,则两者都存在,且mixin先运行
  mixins:[hunhe]
};
</script>

<style>
.sch{
  background-color: pink;
}
</style>