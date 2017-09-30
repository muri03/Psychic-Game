//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting all to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;



//Lets the computer select a random letter from the available choices
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 9 guesses
// guesses = guesses || 9
var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
  // This if condition prevent user from entering other key than letters
  if(event.which >= 65 && event.which <=90)
  {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // This if condition checks whether you already entered letter or not.
    if(guessedLetters.indexOf(userGuess) < 0)
    {
      guessesLeft--;
      guessedLetters.push(userGuess);
      updateGuessesLeft();
      updateGuessesSoFar();

      if (guessesLeft > 0){
        if (userGuess == letterToGuess){
          wins++;
          document.querySelector('#wins').innerHTML = "Wins: " + wins;
          reset();
        }
      }else if(guessesLeft == 0){
      // Then we will loss and we'll update the html to display the loss 
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      // Then we'll call the reset. 
      reset();
      }
    }
    else{
    alert("You already guessed that letter.")
    }

  }
  else{
    alert("Only A-Z Allowd");
  }
}