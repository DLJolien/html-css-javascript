let ul = document.querySelector("ul"),
    item = document.getElementsByTagName("li"),
    btnAdd = document.getElementById("btn-add"),
    brandInput = document.getElementById("brand"),
    modelInput = document.getElementById("model"),
    yearInput = document.getElementById("buildyear"), 
    form = document.getElementById("form");

var wagenpark = [];

btnAdd.addEventListener("click", addCar);



class Car {
    constructor(brand, model, buildyear) {
        this.brand = brand;
        this.model = model;
        this.buildyear = buildyear;
    }
}

function saveLocal() {
    localStorage["garage"] = JSON.stringify(wagenpark);
}

function CreateCarListItem(myCar){
    let text = myCar.brand + " " + myCar.model + " " + myCar.buildyear;

    let li = document.createElement("li");
    let btnRemove = document.createElement("button");
    btnRemove.appendChild(document.createTextNode("Remove"));
    btnRemove.addEventListener("click", removeCar);

    function removeCar(){
        ul.removeChild(li);
        wagenpark.splice(wagenpark.indexOf(myCar),1);
        saveLocal();
    }

    function editCar(){
        btnAdd.style.visibility = 'hidden';

        let btnCancel = document.createElement("button");
        btnCancel.appendChild(document.createTextNode("Cancel"));
        form.appendChild(btnCancel);
        btnCancel.addEventListener("click", cancelClick);

        let btnSaveChanges = document.createElement("button");
        btnSaveChanges.appendChild(document.createTextNode("Save Changes"));
        form.appendChild(btnSaveChanges);
        btnSaveChanges.addEventListener("click", saveChanges);

        li.style.color = "red";
        
        brandInput.value = myCar.brand;
        modelInput.value = myCar.model;
        yearInput.value = myCar.buildyear

        function cancelClick(){
            return;
        }

        function saveChanges(){
            if(brandInput.value !== myCar.brand){
                myCar.brand = brandInput.value;
            }
            if(modelInput.value !== myCar.model){
                myCar.model = modelInput.value;
            }
            if(yearInput.value !== myCar.buildyear){
                myCar.buildyear = yearInput.value;
            }
            saveLocal();
            showCarData();
        }

    }

    let btnEdit= document.createElement("button");
    btnEdit.appendChild(document.createTextNode("Edit"));
    li.appendChild(btnEdit);
    btnEdit.addEventListener("click", editCar);

    li.appendChild(document.createTextNode(text));
    li.appendChild(btnRemove);
    ul.appendChild(li);
    saveLocal()
}

function showCarData() {
    ul.innerHTML=" ";
    for (let index = 0; index < wagenpark.length; index++) {
        CreateCarListItem(wagenpark[index]);
    };
}
function addCar(){
    if(brandInput.value !== "" ||
    modelInput.value !== "" ||
    yearInput.value !== ""){
        let newCar = new Car(brandInput.value, modelInput.value, yearInput.value);
        wagenpark.push(newCar);
        showCarData();
    }
    else{
        console.log("Not everything filled in.");
    }
    
}

function loadLocal(){
    JSON.parse(localStorage.getItem("garage")).forEach(x => wagenpark.push(new Car(x.brand, x.model, x.buildyear)));
    showCarData();
}
window.onload = loadLocal();
