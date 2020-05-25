const btnToevoegen = document.getElementById("btn-toevoegen");
btnToevoegen.addEventListener("click", toevoegen);

function toevoegen() {
    var lijst = document.getElementById('boodschappen');
    var nieuwItem = new BoodschapItem(document.getElementById('item').value);
    nieuwItem.add();
  
    var voorbeeld = document.getElementById('boodschappen-item');
    console.log(voorbeeld);
    console.log(voorbeeld.children);
    console.log(voorbeeld.textContent);
    var input = voorbeeld.cloneNode(true);
    voorbeeld.childNodes[0].nodeValue = nieuwItem.naam;
    console.log(voorbeeld);
    input.textContent = nieuwItem.name;
    console.log(input);
    
    if (nieuwItem !== null) {
        input.appendChild(document.createTextNode(nieuwItem.name));
        lijst.appendChild(input);
        document.getElementById('item').value = '';
    } 
    else console.log("failed");

}


function BoodschapItem(name = "voorbeeldItem") {
    this.name = name;
}

BoodschapItem.prototype.remove = function () {
    console.log(this.name + " is verwijderd van boodschappenlijstje.");
}

BoodschapItem.prototype.add = function () {
    console.log(this.name + " is toegevoegd aan boodschappenlijstje.");
}






