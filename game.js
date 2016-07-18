//Global variables
var wordBank = ['apples', 'dinosaur', 'whales', 'penguins', 'ikea', 'samsung', 'apricots', 'netflix', 'pokemon', 'fiji', 'snoopy'];
// var RandomWord = [];
var randomWord = [];
var displayWord = [];

//Check to see that the wordBank is working
// console.log(wordBank);


//Generates the random word
function RandomWordGenerator(){
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  console.log(randomWord);
  //console.log(RandomWord[1]);
  //console.log(RandomWord.length);

  displayWord.length = 0;

  for (var i = 0; i < randomWord.length; i++) {
    displayWord[i] = "_";
  }

return RandomWord;
}

//RandomWordGenerator();

exports = RandomWordGenerator;