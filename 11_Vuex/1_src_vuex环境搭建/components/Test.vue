<template>
  <div class="Test">

  </div>
</template>

<script>
export default {
  name: "Test",
  props:['title'],
  data() {
    return {

    };
  },
  mounted() {
    console.log(this) // 这样每一个vc上都有了$store
  }
};
</script>
