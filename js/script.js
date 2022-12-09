var words = [
    "santa",
    "snowman",
    "elves",
    "december",
    "christmas",
    "jinglebells",
    "snow"
];

var word = words[Math.floor(Math.random() * words.length)];


    // answer array
let answerArray = [];
    for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
} 
 
let lives = 6;
    
let remainingLetters = word.length;
    // game loop
    while (remainingLetters > 0) {
    

    // guess from the player
let userInput = prompt("Guess the word by entering a letter! \n" + (answerArray.join(" ") + ("\n") + lives + " lives left"));
    if (userInput === null) {
    // Exit game loop
    break;
    } else if (userInput.length !== 1) {
        alert("Please enter a single letter.");
    } else  if {
    // Update game with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userInput) {
            answerArray[j] = userInput;
            remainingLetters--; 
            } else {
                
                }
            }
        } 
    }

    // end of game loop
    }

alert("You won! The answer was " + word);

