<template>
  <div id="app">
		<my-serverclient></my-serverclient>
  </div>
</template>

<script>
import Login from './components/Login'
import ServerClient from './components/ServerClient'
export default {
  name: 'App',
  components:{
    'server-login':Login,
    'my-serverclient':ServerClient
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
