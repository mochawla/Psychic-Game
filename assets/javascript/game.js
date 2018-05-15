//set a variable for all of the letters and add them as values in an array//

var LetterChoices =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winningLetters = [];

console.log(LetterChoices);


//set variables for win, loss, & guesses left//

var wins = 0;
var losses = 0;
var guessesleft = 9;

//create functions for adding a win, adding a loss, and subtracting a guess//

function addwin (winningLetter) {
console.log(wins=wins+1);
}

function subtractguess () {
console.log(guessesleft=guessesleft-1);
}


function addloss () {
console.log(losses=losses+1);
}

//create a new variable for computers pick and select a letter at random from the array//

var ComputerPick = LetterChoices[Math.floor(Math.random()*26)];

console.log(ComputerPick);

//User now needs to guess the computers pick by pressing a letter on his keyboard.// 

var UsersGuess;

document.onkeyup = function(event) {
UsersGuess = event.key;
console.log(UsersGuess);

//check and see if the users guess is the same as the computers pick if it is add 1 to wins (show on screen)//

//show added win on the screen//

if(UsersGuess ===ComputerPick) {

document.getElementById("wins").innerHTML = (wins+1);

addwin(ComputerPick);

$('#guessed-letters').append(text(UsersGuess));

}

//if the user guess is different from the computers pick subtract a guess//
//show one less guess on the screen//

else{

document.getElementById("guessesleft").innerHTML = (guessesleft-1);

subtractguess();

document.getElementById("guessessofar").innerHTML = (UsersGuess);

}


//when the number of guesses reaches 0, add 1 to losses (show on screen)//

if(guessesleft === 0) {

document.getElementById("losses").innerHTML = (losses+1);

addloss();

}


}





























