<template>
  <div class="sch">
    <h2>学校:{{ name  | myfilter  }}</h2>
    <h2>地址:{{ address	}}</h2>
    <h2>电话号码:{{tele}}</h2>
  </div>
</template>

<script>
export default {
  name: "School", 
  data() {
    return {
      name: '深圳大学',
      address: '深圳',
      tele: 14556389215
    };
  }
};
</script>

<style>
.sch{
  background-color: pink;
}
</style>