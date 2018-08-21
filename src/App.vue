<template>
  <div id="app">
    <router-view>
      <JollofForm></JollofForm>
    </router-view>
  </div>
</template>

<script>
import JollofForm from './components/JollofForm.vue';

export default {
  name: 'app',
  components: {
    JollofForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
