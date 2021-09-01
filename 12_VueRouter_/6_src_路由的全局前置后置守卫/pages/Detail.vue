<template>
  <ul>
    <!-- 通过props拿到传过来的参数 -->
    <li>消息编号: {{id}}</li>
    <li>消息标题: {{title}}</li>
  </ul>
</template>
  
<script>
export default {
  name:'Detail',
  props:['id', 'title'],
  mounted() {
    // console.log(this)
  }
}
</script>
  
<style>
  
</style>