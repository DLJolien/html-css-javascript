let wordArray = [],
    img = document.getElementById("hangman"),
    guessCount = document.getElementById("guesses"),
    guessedLetters = document.getElementById("guessedLetters")

export function drawWord(text, start, end) {
    for (let index = start; index < end; index++) {
        wordArray.push(text);
        console.log(wordArray);
    }
}

export function drawLetter(text, start, end) {
    wordArray.splice(start, end, text);
    console.log(wordArray);
}

export function displayWord(wordToGuessElement) {
    wordToGuessElement.innerHTML = replaceAll(wordArray.toString(), ",", " ");
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

export function changeImg(guessesCount) {
    switch (guessesCount) {
        case 0:
            img.style.display = "inline-block";
            img.src = "./img/0.jpg";
            break;
        case 1:
            img.style.display = "inline-block";
            img.src = "./img/1.jpg";
            break;
        case 2:
            img.style.display = "inline-block";
            img.src = "./img/2.jpg";
            break;
        case 3:
            img.style.display = "inline-block";
            img.src = "./img/3.jpg";
            break;
        case 4:
            img.style.display = "inline-block";
            img.src = "./img/4.jpg";
            break;
        case 5:
            img.style.display = "inline-block";
            img.src = "./img/5.jpg";
            break;
        case 6:
            img.style.display = "inline-block";
            img.src = "./img/6.jpg";
            break;
        case 7:
            img.style.display = "inline-block";
            img.src = "./img/7.jpg";
            break;
        case 8:
            img.style.display = "inline-block";
            img.src = "./img/8.jpg";
            break;
        case 9:
            img.style.display = "inline-block";
            img.src = "./img/9.jpg";
            break;
        case 10:
            img.style.display = "inline-block";
            img.src = "./img/10.jpg";

            break;
        default:
            break;
    }
}

export function displayGuess(num) {
    guessCount.innerHTML = "Guesses: " + num;
}

export function displayGuessedLetter(array){
    guessedLetters.innerHTML = "Guessed letters: " + replaceAll(array.toString(), ",", " ")
   
}