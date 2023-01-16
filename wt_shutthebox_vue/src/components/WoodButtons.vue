<script>
    export default{
        name: "WoodButton",
        props: {
            txt: String
        },
        methods:{
            doTheThing(){
                console.log("did the thing: $link")
            }
        }
    }
</script>

<template>
    <a class="woodButton" v-on:click="doTheThing()"> {{txt}} </a>
</template>

<style>
.woodButton{
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
.woodButton:hover {
    opacity: 0.7;
    cursor: pointer;
}
</style>