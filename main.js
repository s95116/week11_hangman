var inquirer = require('inquirer');
var RandomWordGenerator = require('./game.js');
var guessRemain = 9;

inquirer.prompt([
  {
    type: 'input',
    name: 'guess',
    message: 'Please enter a letter'
  }

  ]).then(function(userGuess){

    console.log(userGuess.guess);
  })


RandomWordGenerator();