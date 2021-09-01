// 分别暴露
export const hunhe = {
  data() {
    return {
      phone: 1008611
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    }  
  },
} 
export const hunhe2 = {
  data() {
    return {
      new: '新华网'
    }
  },
  methods: {
    showName() {
      console.log(this.name)
    }  
  },
  mounted() {
    console.log('我是mixin数据')
  },
} 