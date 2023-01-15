<template>
  <h1> Hello World!</h1>
  <h2> <Player/> </h2>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Player from './components/PlayerShowcase.vue'

export default {
  name: 'App',
  components: {
    Player,
  }
}
</script>

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
