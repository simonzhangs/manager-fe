<script>
export default {
  name: 'app',
  mounted(){
    this.$storage.setItem('age','30');
    console.log('user=>',this.$storage.getItem('age'));
    this.$storage.clearItem('age');
    this.$storage.clearAll();
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
