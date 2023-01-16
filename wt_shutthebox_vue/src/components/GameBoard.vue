<script>
import WoodDisplay from './WoodDisplay.vue';
import WoodButtons from './WoodButtons.vue';
import ClapRow from './ClapsRow.vue';
let id = 1;

export default{
    components:{
    WoodButtons,
    WoodDisplay,
    ClapRow,
},
    data(){
        return{
            dice: 0,
            diceSum: 2,
            claps: [
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false},
                {number: id++, isClosed: false}
            ]
        }
    },
    methods:{
        closeClap(clapNumber){
            this.claps[clapNumber - 1].isClosed = true;
            console.log("closed clap " + clapNumber)
        }
    }
    
}


</script>

<template>
    <div class="gameBoard" id="board">
        <WoodDisplay txt="Player1: 0 | Player2: 0"/>
        <div class="gameDisplay" >
            <ClapRow/>
            <WoodDisplay txt="Gewürfelt: not thrown yet | Summe: 0"/>
        </div>
        <div class="gameButtons">
            <WoodButtons txt="throwDice"/>
            <WoodButtons txt="undo"/>
            <WoodButtons txt="redo"/>
            <WoodButtons txt="next Player"/>
            <WoodButtons txt="new Game"/>
        </div>
    </div>
</template>

<style>
 .gameBoard {
    color: black;
    background-image:url("/src/assets/filz_green.png");
    background-repeat: repeat;
    padding: 2%;
    height: auto;
    border-style: ridge;
    border-width: thick;
    border-color: black;
    
 }

</style>