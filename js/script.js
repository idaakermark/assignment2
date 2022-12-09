var words = [
    "santa",
    "snowman",
    "elves",
    "december",
    "christmas",
    "jinglebells",
    "snow",
    "fireplace",
    "presents",
    "reindeer"
];

var word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
    for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
} 

let lives = 6;  
let remainingLetters = word.length;
    while (remainingLetters > 0 && lives > 0) {

let userInput = prompt("Guess the word by entering a letter! \n" + (answerArray.join(" ") + ("\n You have ") + lives + " lives left"));
    if (userInput === null) {
        break;
    } else if (userInput.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userInput) {
            answerArray[j] = userInput;
            remainingLetters--; 
            lives++;
            }        
        }
    } 
    lives--;
}
    
if (lives === 0) {
    alert("You loose! The correct answer was " + word);
} else if (remainingLetters <=0 ) {
    alert("You won! The answer was " + word);
}
