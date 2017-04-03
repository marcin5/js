var turnToStart = 'X';
var gameOn;
var gameEnd;

var game = (function () {
  return {
    startGame: function (square) {
      remis = 0;
      turn = turnToStart;
      myMessage.setMessage(turn + ' turn');
    },
    newGame: function () {
      board.clearBoard();
      game.startGame();
      gameOn = false;
      gameEnd = false;
    }
  };
})();

var myDraw = (function () {
  return {
    draw: function (square) {
      gameOn = true;

      if (gameEnd === true) {
        return;
      }
      if (square.innerText !== '') {
        return;
      }

      color.changeColor(square);
      square.innerHTML = turn;
      turn2.switchTurn();
      win.winCheck();
    }
  };
})();

var color = (function () {
  return {
    changeColor: function (square) {
      if (turn === 'X') {
        square.style.color = 'red';
        square.value = 1;
      } else {
        square.style.color = 'green';
        square.value = -1;
      }
    }
  };
})();

var player = (function () {
  return {
    switchPlayer: function () {
      if (gameOn === true) {
        if (turnToStart === 'X') {
          window.alert(' next game O will start');
          turnToStart = 'O';
        } else {
          window.alert(' next game X will start');
          turnToStart = 'X';
        }
      } else {
        if (turn === 'X') {
          turn = 'O';
        } else {
          turn = 'X';
        }
        myMessage.setMessage(turn + ' turn');
      }
    }
  };
})();

var turn2 = (function () {
  return {
    switchTurn: function () {
      if (turn === 'X') {
        turn = 'O';
      } else {
        turn = 'X';
      }
      myMessage.setMessage(turn + ' turn');
    }
  };
})();

window.onload = game.startGame;
