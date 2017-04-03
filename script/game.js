
var turnToStart = "X";
var gameOn;
var gameEnd;

function newGame() {
    clearBoard();
    startGame();
    gameOn = false;
    gameEnd = false;
}

function startGame() {
    remis = 0;
    turn = turnToStart;
    setMessage(turn + " turn");
}

function setMessage(msg) {
    document.getElementById("msg").innerText = msg;
}

function draw(square) {
    gameOn = true;

    if(gameEnd == true){
      return;
    }
    if (square.innerText != "") {
        return;
    }

    changeColor(square);
    square.innerHTML = turn;

    switchTurn();
    winCheck();
}

function changeColor(square) {
    if (turn == "X") {
        square.style.color = "red";
        square.value = 1;
    } else {
        square.style.color = "green";
        square.value = -1;
    }
}

function switchPlayer(){
  if(gameOn == true){
    if (turnToStart == "X") {
        alert(" next game O will start");
        turnToStart = "O";
    } else {
        alert(" next game X will start");
        turnToStart = "X";
    }
  } else {
    switchTurn();
  }
}

function switchTurn() {
    if (turn == "X") {
        turn = "O";
    } else {
        turn = "X";
    }
    setMessage(turn + " turn");
}

window.onload = startGame;
