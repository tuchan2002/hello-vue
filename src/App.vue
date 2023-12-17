<template>
  <navbar-menu />
  <router-view />
</template>

<script>
import NavbarMenu from './components/NavbarMenu.vue'
export default {
  name: 'App',
  components: {
    NavbarMenu: NavbarMenu
  }
}
</script>

<style>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
