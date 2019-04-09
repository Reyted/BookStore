<template>
  <div id="app">
    <server-client></server-client>
  </div>
</template>

<script>
import ServerClient from './components/ServerClient'
export default {
  name: 'App',
  components:{
    'server-client':ServerClient,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
