<script>
export default {
  name: "Welcome",
  props: ["msg"],
};
</script>

<template>
  <div class="welcome">
    <h1>欢迎来到主界面 - {{ msg }}</h1>
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

<style scoped>
.welcome {
}
</style>
