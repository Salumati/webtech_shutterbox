<script>
export default{
    name: 'PlayerShowcase',
    data(){
        return{
            players: 'player1: 0, player2: 0',
            number: 4,
}
        }
    }
    
</script>

<template>
    <div class="player_row" :id="showPlayers"> {{ players }}</div>
    <div> Number = {{ number }}</div>
</template>

<style>

.player_row{
    display: inline-block;
    text-align: center;
    width: 100px;
    border-style: ridge;
    border-width: thick;
    border-color: #e9d3b2;
    background-color: #e9d3b2;
    padding: 10px;
    background-image:url("/src/assets/retina_wood.png");
    background-color: white;
    background-repeat: repeat;
    height: auto;
    width: 100%;
    margin: 2%;
    text-align: center;
    vertical-align: middle;
}


</style>