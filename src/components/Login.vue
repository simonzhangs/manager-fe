<script>
import Welcome from './Welcome.vue';

export default {
  name: 'Login',
  components:{ Welcome},
  methods: {
    goHome() {
      this.$router.push('./welcome');
    }
  }
}
</script>

<template>
  <h1>欢迎来到登陆页面</h1>
  <Welcome msg='sssimonzhangs'/>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
