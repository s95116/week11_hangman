//Global variables
var inquirer = require('inquirer');
var RandomWord = require('./game.js');
var guessRemain = 9;
var lettersGuessed = [];
//var RandomWord = [];




// console.log(RandomWordGenerator.RandomWordGenerator.randomWord);
//RandomWord = RandomWordGenerator();//Displays the random word for testing


var myRandomWord = new RandomWord();

console.log("myRandomWord " + JSON.stringify(myRandomWord));

//Inquirer function called prompt
function prompt(){
  inquirer.prompt([
  {
    type: 'input',
    name: 'guess',
    message: 'Please enter a letter'
  }

  ]).then(function(userGuess){

    // console.log("userGuess.guess " + userGuess.guess);
    // for (var i = 0; i <= 9 guessRemain.length; i++) {
    //   console.log(guessRemain);
    // }

  //adds letters used into an array 'lettersGuess', displays which letters have been picked
  
  if (lettersGuessed.indexOf(userGuess.guess) == -1){
    // lettersGuessed.push(userGuess);
    // console.log()
    lettersGuessed.push(userGuess.guess);
    console.log(lettersGuessed);
  }

console.log("test1");
// console.log(RandomWord.length);
  //checks the letter guesses against the random word
  // for (var index1 = 0; index1 < RandomWord.length; index1++) {
  //   console.log("test4");
  //   var i = RandomWord.indexOf(userGuess.guess);
  //       console.log("test3")  ;
  //     if(i != -1) {
  //       displayWord[i] = userGuess.guess;   //found letter from userGuess
  //       //updateScreen();
  //       RandomWord[i] = "_";
  //     }

  // }
  console.log("test2");
prompt();//Runs function prompt again
    
  })
}//end of function prompt


//Calls function prompt
prompt();


//Test to see if module.export works.. It does!
//RandomWordGenerator();