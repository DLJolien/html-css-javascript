var letters = new Array;
letters[0] = 'a';
letters[1] = 'b';
letters[2] = 'c';
letters[3] = 'd';
letters[4] = 'e';
console.log(letters.length);

var numbers = [0, 8, 6, 7, 3, 4, 9];
numbers.push(10);
function Count() {
    let count = 0;
    for (var i = 0; i < numbers.length; ++i) {
        count++;
    }
    return count;
}
console.log(Count());



var first;
var second = "waarde";

var result = first || second;
var result2 = second || first;

var result3 = first && second;
var result4 = second && first;

var result5 = first - second;
var result6 = second - first;

var result7 = first + second;
var result8 = second + first;

console.log("result: first || second:", result);
console.log("result2: second || first:", result2);
console.log("result3: first && second:", result3);
console.log("result4: second && first:", result4);
console.log("result5:  first - second:", result5);
console.log("result6: second - first:", result6);
console.log("result7:  first + second:", result7);
console.log("result8: second + first:", result8);

var undefined;
var nulWaarde = 0;
var minNul = -0;
var emptyString = "";
var emptyString2 = '';
var nullWaarde = null;
var falseWaarde = false;
var calc = 120 - "een-en-twintig";
var document = document.all;


function testFalse(a) {
    let result;
    if (a == false) {
        result = 'false';
    } else {
        result = 'true';
    }
    return result;
}

console.log("undefined var: ", undefined, testFalse(undefined));
console.log("nul waarde: ", nulWaarde, testFalse(nulWaarde));
console.log("min nul waarde: ", minNul, testFalse(minNul));
console.log("empty string double quotes: ", emptyString, testFalse(emptyString));
console.log("empty string single quotes: ", emptyString2, testFalse(emptyString2));
console.log("null waarde: ", nullWaarde, testFalse(nullWaarde));
console.log("false waarde: ", falseWaarde, testFalse(falseWaarde));
console.log("calc: ", calc, testFalse(calc));
console.log("document.all: ", document, testFalse(document));

console.log("POGING 2");

if (undefined != true) {
    console.log("undefined var: ", undefined);
}
if (nullWaarde != true) {
    console.log("nullwaarde var: ", nullWaarde);
}

function print(a) {
    document.write(a);
}
print('Hello world');

function sayHello() {
    let name = window.prompt("What is your name? ");
    window.alert("Hello " + name);
}

function calculateDiffInYears() {
    let birthyear = window.prompt("What is your birthyear? ");
    let year = window.prompt("Give a year: ");
    window.alert("The difference in years is: " + Math.abs(birthyear - year));
}

function askStraal() {
    var straal = window.prompt("Geef een straal in in cm: ");
    window.alert("De oppervlakte van de cirkel is" + calculateSurface(straal) + "cm²" + "en de omtrek is" + calculateCircumference(straal) + "cm");
}

function calculateCircumference(straal) {
    return 2 * Math.PI * straal;
}
function calculateSurface(straal) {
    return 2 * Math.PI * Math.sqrt(straal);
}

function zetInFahrenheit() {
    var graden = window.prompt("Geef een temperatuur in celcius:");
    window.alert(graden + "celcius is" + (graden * 9 / 5 + 32) + "in fahrenheit.")
}
function alfaOrder() {
    var woord = window.prompt("Geef een woord in: ");
    var arr = woord.split('');
    var sorted = arr.sort();
    sorted.join(' ');
    window.alert("Het woord" + woord + "in alfabethische volgorde: " + sorted);
}

function langsteWoord() {
    var zin = window.prompt("Geef een zin in:");
    var woorden = zin.split(' ');
    var longestWordCount = 0;
    var longestWord = '';
    for (var i = 0; i < woorden.length; i++) {
        if (woorden[i].length > longestWordCount) {
            longestWordCount = woorden[i].length;
            longestWord = woorden[i];
        }
    }
    window.alert("Het langste woord in de zin is " + longestWord);
}

function geenHerhaling() {
    let input = window.prompt("Geef een woord in: ");
    var gesplit = input.split(' ');

    for (var i = 0; i < input.length-1; i++) {
        for (var j = i+1; j < input.length; j++) {
            if(gesplit[i] != gesplit[j]){
                return gesplit[i]
            }
            else{
                return;
            }

        }
    }
}

let cijfers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let evenCijfers = new Array;
evenCijfers.filter()

for (var j = 0; j < cijfers.length; j++) {
    if(cijfers[j]%2 == 0){
        evenCijfers.push(cijfers[j]);
        console.log(cijfers[j] + " even")
    }
    else{
        console.log(cijfers[j] +" oneven");
    }


}


function checkInArray(value, array){
    for (var j = 0; j < array.length; j++) {
    
        if(array[j] == value){
            return true;
        }
    
    }
    return false;
}
console.log(checkInArray(5, evenCijfers));
console.log(checkInArray(6, evenCijfers));

function getallenSom(){
    var getallen = window.prompt("Hoeveel getallen moeten worden ingegeven?");
    var getallenArr = new Array;
    var sum = 0;
    for(i=0; i<getallen; i++){
        getallenArr[i] = window.prompt("Geef getal " + (i+1) + " in.");
        sum = (sum + parseInt(getallenArr[i]));
    }
    window.alert("De totale som is: " + sum);
}


function optellen(){
    let som = 0;
    for(i=0; i<arguments.length; i++){      
        som = (som + parseInt(arguments[i]));
    }
    return som;
}
console.log(optellen(1,2,7));
console.log(optellen(147));
console.log(optellen(1,2));

function verwijderGetallen(){
    let getal1 = window.prompt("min getal 1:");
    let getal2 = window.prompt("max getal 2:");

    for(i=0; i<cijfers.length; i++){      
       if(cijfers[i] > getal1 && cijfers[i] <getal2){
           cijfers.splice(i,1);
           console.log(cijfers[i] + " is verwijderd");
           i--;
       }
    }
}


function machten(){
    let getal1 = window.prompt("getal 1:");
    let getal2 = window.prompt("macht getal 2:");
    alert(macht(getal1, getal2));
}

function macht(getal,getalMacht){
    if(getalMacht>1){
        return getal*macht(getal, getalMacht-1);
    }
    else{
        return getal;
    }
    
}
machten();


