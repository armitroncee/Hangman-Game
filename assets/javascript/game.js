var guess; 
var letters = []; 
var wrongLetters = []; 
var counter = 7;
var losses = 0;
var wins = 0;


document.getElementById("guesses-remaining").innerHTML = counter;
document.getElementById("losses").innerHTML = ("Losses " + losses);
document.getElementById("score").innerHTML = ("wins " + wins);

var wordList = ["mario", "donkeykong", "leagueoflegends", "skyrim", "playstation", "xbox", "nintendo", "pacman", "tetris"];


var word


function start() {
	word = wordList[Math.floor(Math.random() * wordList.length)];
  	for (i = 0; i < word.length; i++) {
    letters[i] = "__";
  }
  document.getElementById("user-text").innerHTML = letters.join(" ");
  console.log(word);
}


start();
var remainingLetters = word.length
function checkLetter() {
  document.onkeyup = function(event) {
    guess = event.key.toLowerCase();
    var found = false;
    for (i = 0; i < word.length; i++) {
      if (guess === word[i]) {
      	remainingLetters--;
        letters[i] = guess;
        letters.join(" ");
        document.getElementById("user-text").innerHTML = letters.join(" ");
        document.getElementById("event").innerHTML = "";
		found = true;
		console.log(remainingLetters)
		console.log(letters[i])

			if (letters.join('') == word) {
			wins++;
			document.getElementById("event").innerHTML = ("You Win!");
			document.getElementById("score").innerHTML = ("wins " + wins);
			counter = 7;
			document.getElementById("guesses-remaining").innerHTML = counter;
            letters = [];
            wrongLetters = [];
            document.getElementById("guessed").innerHTML = wrongLetters;
       		start();
       		remainingLetters = word.length;
          }
        
      }
	}

    if (found) return;
    if (wrongLetters.indexOf(guess) < 0) {
      wrongLetters.push(guess);
      document.getElementById("event").innerHTML = "";
      document.getElementById("guessed").innerHTML = wrongLetters.join(" ");
      counter--;
      document.getElementById("guesses-remaining").innerHTML = counter;
      // console.log(counter);
      if (counter === 0) {
      	losses++
      	document.getElementById("event").innerHTML = ("You Lost!");
        document.getElementById("losses").innerHTML = ("Losses " + losses);
        // console.log(losses);
		counter = 7;
        document.getElementById("guesses-remaining").innerHTML = counter;
        letters = [];
        wrongLetters = [];
        document.getElementById("guessed").innerHTML = wrongLetters;
        start();
        remainingLetters = word.length;
      }
    }
  }
}


checkLetter();


//remainingLetters === 0