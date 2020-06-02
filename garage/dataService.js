import {Car} from "./carServices.js";

export function saveLocal(wagenpark) {
    localStorage["garage"] = JSON.stringify(wagenpark);
}

export function loadLocal(wagenpark) {
    JSON.parse(localStorage.getItem("garage")).forEach(x => wagenpark.push(new Car(x.brand, x.model, x.buildyear)));
}