import { getWords } from "./dataService.js";
import { drawWord, displayWord, changeImg, drawLetter, displayGuess, displayGuessedLetter } from "./displayService.js";

let btnPlay = document.getElementById("btnPlay"),
    divLetterBtns = document.getElementById("letterButtons"),
    divOptions = document.getElementById("options"),
    divPlayArea = document.getElementById("playArea"),
    wordToGuess = "",
    wordToGuessElement = document.getElementById("wordToGuess"),
    totalGuessCount = 0,
    wrongGuessCount = 0,
    hasRightLetter = 0,
    guessedLetters = [],
    lettersToGuessCount=0;

btnPlay.addEventListener('click', startGame);
divLetterBtns.addEventListener('click', processInput);

async function startGame() {
    divOptions.style.display = "none";
    divPlayArea.style.display = "flex";
    await selectWord();
    drawWord("_", 0, wordToGuess.length);
    displayWord(wordToGuessElement);
    changeImg(totalGuessCount);
}

async function selectWord() {
    let words = await getWords();
    let index = Math.floor(Math.random() * words.length);
    console.log(index);
    wordToGuess = words[index];
    let wordToGuessArray = wordToGuess.split(' ').map(x => x);
    lettersToGuessCount = wordToGuess.length;
    console.log("Random word: ", wordToGuess);
}

function processInput(e) {
    let wordToGuessArray = wordToGuess.split('');
    console.log(wordToGuessArray);
    if (e.target.tagName == 'BUTTON') {
        let letterBtn = e.target.id;
        let letter = letterBtn.toLowerCase();
        if(guessedLetters.includes(letter)){
            swal("Oopsie","You have already guessed this letter.", "warning")
            return;
        }
        guessedLetters.push(letter);
        console.log(guessedLetters);
        totalGuessCount++;
        displayGuess(totalGuessCount);
        displayGuessedLetter(guessedLetters);
        for (let index = 0; index < wordToGuessArray.length; index++) {
            if (wordToGuessArray[index] === letter) {
                drawLetter(letter, index, 1);
                console.log("index: ", index);
                console.log("Success: ", letter);
                hasRightLetter = 1;
                lettersToGuessCount--;
            }
            else {
                console.log("Fail: ", letter);             
            }           
        }
        if(hasRightLetter ==! 1){
           wrongGuessCount++;
            changeImg(wrongGuessCount);
        }
        hasRightLetter = 0;
        displayWord(wordToGuessElement);
        checkGameStatus();
    }

}

function checkGameStatus(){
    if(wrongGuessCount === 10){
        swal("Sad!","You have lost the game. The correct word was " + wordToGuess + ".", "info")
    }
    else if(lettersToGuessCount === 0){
        swal("Yaaay", "You won the game.", "success");
    }
    
}

function load() {
    divPlayArea.style.display = "none";

}
window.onload = load();










