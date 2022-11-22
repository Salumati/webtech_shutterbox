const diceOutputID = "dice-output";
const undoID = "undo";
const redoID = "redo";
const diceID = "dice";
const toGameID = "toGame";
const changeStylesID = "styles";
const player1ID = "p1";
const player2ID = "p2";
const currentPlayerID = "curP";


function loadGame(numberOfMoves, sum){
  if(numberOfMoves===0){
    startGame();
  }else if(sum === 0){
    document.getElementById(diceOutputID).innerHTML = "No more moves, pleas throw the dice again."
    highlightButton(diceID)
  }
  hideButton(toGameID);
  hideButton(changeStylesID);
}

function startGame(){
    sayHello();
    hideButton(undoID);
    hideButton(redoID);
    highlightButton(diceID);
}
function sayHello(){
  document.getElementById(diceOutputID).innerHTML = ("Welcome! To start, please throw the dice.") ;
  // highlight the dice button in the first move!
}

function highlightButton(buttonID){
  document.getElementById(buttonID).style.color = "red";
}
function hideButton(buttonID){
  document.getElementById(buttonID).style.display = "none";
}
function highlightText(id){
  document.getElementById(id).style.color = "blue";
  document.getElementById(id).style.fontWeight = "bold";
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

function markActivePlayer(playerStr){
  let playerArray = playerStr.split("|");
  let p1Display = playerArray(0);
  let p2Display = playerArray(1);
  let turn = playerArray(2);

  let p1 = p1Display.split(":")(0);
  let p2 = p2Display.split(":")(0);
  let currentPlayer = turn.split("'")(0);

  document.getElementById(player1ID).innerHTML = p1Display;
  document.getElementById(player2ID).innerHTML = p2Display;
  document.getElementById(currentPlayerID).innerHTML = turn;

  if(currentPlayer === p1){
    highlightText(player1ID);
  } else{
    highlightText(player2ID);
  }
}




