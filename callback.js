function rollADice(succesCallback, failCallback){
let randomNum = Math.floor(Math.random() * 6);
succesCallback(randomNum);
failCallback(num);

}

function rollADice(callback, callback){
    let randomNum = Math.floor(Math.random() * 6);
    callback(randomNum);
    callback(randomNum);
    
    }

function succesCallback(num){
 console.log(num);
}

function failCallback(num){
    if(num === 5){
        console.log("error: het getal is 5");
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function getPizzas(){
    //get pizza
}

delay(2000).then(getPizzas());