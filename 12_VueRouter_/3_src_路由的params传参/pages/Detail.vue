<template>
  <ul>
    <!-- params参数在 this.$route.params 中-->
    <li>消息编号: {{this.$route.params.id}}</li>
    <li>消息标题: {{this.$route.params.title}}</li>
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