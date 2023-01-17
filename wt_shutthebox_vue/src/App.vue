<template>
  <h1> Hello World!</h1>
  <GameBoard></GameBoard>
  <WoodButton txt="first Button" link="asdf"></WoodButton>
  <WoodButton txt="second Button" link="not a link"></WoodButton>
 
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WoodButton from './components/WoodButtons.vue'
import GameBoard from './components/GameBoard.vue'

export default {
  name: 'App',
  components: {
    GameBoard,
    WoodButton
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
