var inquirer = require('inquirer');
var RandomWordGenerator = require('./game.js');
var guessRemain = 9;


//Inquirer function called prompt
function prompt(){
  inquirer.prompt([
  {
    type: 'input',
    name: 'guess',
    message: 'Please enter a letter'
  }

  ]).then(function(userGuess){

    console.log(userGuess.guess);

    prompt();//Runs function prompt again
  })
}//end of function prompt


//Calls function prompt
prompt();


//Test to see if module.export works.. It does!
//RandomWordGenerator();