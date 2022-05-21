<script>
export default {
  name: 'Welcome',
  props: ['msg'],
}
</script>

<template>
  <h1>欢迎来到主界面 - {{ msg }}</h1>
  <router-link to="/login">去登陆</router-link>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
