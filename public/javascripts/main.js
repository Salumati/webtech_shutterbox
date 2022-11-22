const diceOutputID = "dice-output";


function loadGame(numberOfMoves, sum){
  if(numberOfMoves===0){
    startGame();
  }else if(sum === 0){
    document.getElementById(diceOutputID).innerHTML = "No more moves, pleas throw the dice again."
  }

}

function startGame(){
    sayHello();
}
function sayHello(){
  document.getElementById(diceOutputID).innerHTML = ("Welcome! To start, please throw the dice.") ;
  // highlight the dice button in the first move!
}

function closeClap(index, sum){
    if(index > sum){
      window.alert("Warning; illegal move!\n the value of the closing tab cannot be larger than the dice sum!");
    }
}


function throwDice(sum){
  if(sum > 0)
  {
    window.alert("please close claps first. you still have moves left");
  }
}

// on start: don't show dice yet
// hide illegal functions
// show error, if move is illegal



