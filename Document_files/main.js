// start game by pressing a random key 

//Creates Scoreboard
var VWins = 0;
var VLosses = 0;

// Creates an array of words
let pokemon = ["mew", "pikachu", "charizard", "eevee", "jigglypuff", "squirtle", "gyarados", "snorlax", "blastoise", "vulpix", "dratini", "growlithe", "clefairy", "bulbasaur", "vaporeon", "flareon"]

// Selects a random word from the array
var randomword = Math.floor(Math.random() * pokemon.length); 

// Console logs that word, because YAY 
console.log(pokemon[randomword])

// 

// Show user how many letters are in the word

// Display User Imput 
document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    document.getElementById("guessed").innerHTML = `guessed: ${letterGuessed}`;
}

// 