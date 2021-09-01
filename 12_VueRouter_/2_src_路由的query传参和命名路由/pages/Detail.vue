<template>
  <ul>
    <!-- query参数在 this.$route.query 中-->
    <li>消息编号: {{this.$route.query.id}}</li>
    <li>消息标题: {{this.$route.query.title}}</li>
  </ul>
</template>
  
<script>
export default {
  name:'Detail',
  mounted() {
    // console.log(this)
  }
}
</script>
  
<style>
  
</style>