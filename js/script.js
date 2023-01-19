function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
var ComputerMove, PlayerMove, set__PlayerMove;
ComputerMove = 'kamień';
PlayerMove = 'papier';
printMessage('Zagrałem ' + ComputerMove + '! Jeśli Twój ruch to papier, to wygrywasz!' + PlayerMove);
