<script>
import WoodDisplay from './WoodDisplay.vue';
import WoodButtons from './WoodButtons.vue';
import ClapRow from './ClapsRow.vue';
import $ from 'jquery'

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
            players: "",

        }
    },
    methods:{
        throwDice(){
            this.sendAjaxReq("w")
            console.log("threw dice")
        },
        sendAjaxReq(operation){
            console.log("starting ajax")
            $.ajax({
                method: "GET",
                url: "localhost:9000/api/raw/"+operation,
                dataType: "json",
                success: function (data) {
                    this.players = "Player 1: " + data.game.players.score1
                        + " | Player 2: " + data.game.players.score2
                        + "| Player " + data.game.players.turn + "`s turn";
                    this.diceSum = data.game.sum;
                    this.dice = data.game.wurf;
                    console.log(data);
                }
            })
            
        },
    }

}
</script>

<template>
    <div class="gameBoard" id="board">
        <WoodDisplay txt="Player1: 0 | Player2: 0"/>
        <div class="gameDisplay" >
            <ClapRow/>
            <WoodDisplay txt="Gewürfelt: not thrown yet | Summe: 0"/>
            <div> {{diceSum}}</div>
        </div>
        <div class="gameButtons">
            <a class="button_dice col-12 col-sm-2" :id="dice" v-on:click="throwDice()">throw the dice </a>
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
 .button_dice{
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
 }


</style>