function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest, x;

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + '' + '' + ' został kliknięty');
}
var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, x;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'Kamień';
  } else if (argMoveId == 2) {
    return 'Papier';
  } else if (argMoveId == 3) {
    return 'Nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "Kamień".');
    return 'Kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'Papier' && argComputerMove == 'Kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'Kamień' && argComputerMove == 'Nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'Nożyce' && argComputerMove == 'Papier') {
    printMessage('Wygrywasz');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
console.log('wybór ruchu gracza to: ' + playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
playerMove = argButtonName;
displayResult(playerMove, computerMove);
buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('Kamień'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('Papier'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('Nożyce'); });
