<script>
export default {
  name: "Login",
  mounted() {
    // this.$request({
    //   methods: "get",
    //   url: "/login",
    //   data: {
    //     name: "jack",
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });
    this.$request.get('/login',{name:'jack1'}).then(res => {console.log(res);})
  },
  methods: {
    goHome() {
      this.$router.push("./welcome");
    },
  },
};
</script>

<template>
  <h1>欢迎来到登陆页面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
