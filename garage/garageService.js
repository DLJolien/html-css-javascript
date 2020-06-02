import { saveLocal, loadLocal } from "./dataService.js";
import {Car} from "./carServices.js";

let ul = document.querySelector("ul"),
    btnAdd = document.getElementById("btn-add"),
    getBrand = document.getElementsByName('getBrand')[0],
    modelInput = document.getElementById("model"),
    yearInput = document.getElementById("buildyear"),
    form = document.getElementById("form");

var wagenpark = [];
var brandInput = "testtest";
getBrand.addEventListener("input", function () {
    brandInput = this;
})

btnAdd.addEventListener("click", addCarClick);

function CreateCarListItem(myCar) {
    let text = myCar.brand + " " + myCar.model + " " + myCar.buildyear;

    let li = document.createElement("li");
    let btnRemove = document.createElement("button");
    btnRemove.appendChild(document.createTextNode("Remove"));
    btnRemove.setAttribute("class", "btn btn-danger");
    btnRemove.addEventListener("click", removeCar);

    let btnEdit = document.createElement("button");
    btnEdit.appendChild(document.createTextNode("Edit"));
    btnEdit.setAttribute("class", "btn btn-warning");
    li.appendChild(btnEdit);
    btnEdit.addEventListener("click", editCar);

    function removeCar() {
        ul.removeChild(li);
        wagenpark.splice(wagenpark.indexOf(myCar), 1);
        saveLocal(wagenpark);
    }

    function editCar() {
        btnAdd.style.display = "none";

        let btnSaveChanges = document.createElement("button");
        btnSaveChanges.appendChild(document.createTextNode("Save"));
        btnSaveChanges.setAttribute("class", "btn btn-info");
        form.appendChild(btnSaveChanges);
        btnSaveChanges.addEventListener("click", saveChanges);
        let btnCancel = document.createElement("button");
        btnCancel.appendChild(document.createTextNode("Cancel"));
        btnCancel.setAttribute("class", "btn btn-info");
        form.appendChild(btnCancel);
        btnCancel.addEventListener("click", cancelClick);

        li.style.color = "red";

        brandInput.value = myCar.brand;
        modelInput.value = myCar.model;
        yearInput.value = myCar.buildyear

        function cancelClick() {
            return;
        }

        function saveChanges() {
            if (brandInput.value !== myCar.brand) {
                myCar.brand = brandInput.value;
            }
            if (modelInput.value !== myCar.model) {
                myCar.model = modelInput.value;
            }
            if (yearInput.value !== myCar.buildyear) {
                myCar.buildyear = yearInput.value;
            }
            saveLocal(wagenpark);
            showCarData();
        }
    }
    li.appendChild(document.createTextNode(text));
    li.appendChild(btnRemove);
    ul.appendChild(li);
    saveLocal(wagenpark)
}

function showCarData() {
    ul.innerHTML = " ";
    for (let index = 0; index < wagenpark.length; index++) {
        CreateCarListItem(wagenpark[index]);
    };
}

function addCarClick() {
    if (brandInput.value !== "" &&
        modelInput.value !== "" &&
        yearInput.value !== "") {
        let newCar = new Car(brandInput.value, modelInput.value, yearInput.value);
        wagenpark.push(newCar);
        showCarData();
    }
    else {
        console.log("Not everything filled in.");
    }
}

window.onload = loadLocal(wagenpark);
window.onload = showCarData();