const btnLogIn = document.getElementById("btn-login");

btnLogIn.addEventListener("click", logSubmit);

function logSubmit(){
    const naam = document.getElementById("naam").value;

        window.alert("Welkom " + naam);
    
}