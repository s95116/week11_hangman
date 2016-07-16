var wordBank = ['apples', 'dinosaur', 'whales', 'penguins', 'ikea', 'samsung', 'apricots', 'netflix', 'pokemon', 'fiji', 'snoopy'];
var randomWord = "";

// console.log(wordBank);

function randomWordGenerator(){
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  console.log(randomWord);

}

randomWordGenerator();

// module.exports = RandomWord;