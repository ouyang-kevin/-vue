<template>
  <div class="school">
    <h2>学校名称:{{ name }}</h2>
    <h2>学生地址:{{ address }}</h2>
    <button @click="getName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data() {
    return {
      name: '深圳大学',
      address: '深圳'
    };
  },
  methods: {
    getName() {
      this.getSchoolName(this.name)
    }
  },
};
</script>

<style scoped>
.school{
  background-color: skyblue;
  margin: 30px 0;
}
</style>