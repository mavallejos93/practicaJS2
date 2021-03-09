//variables
let btnNombre = document.getElementById("btnNombre");
let hNombre = document.getElementById("hNombre");


//funciones
const guardarNombre = () =>{ 
    let nombre = prompt("Ingrese su nombre");
    if (nombre === "") {
        alert("Favor escribir su nombre antes de aceptar");
    } else {
        hNombre.innerHTML="Hola: " + nombre;
    }
    
}


//Onclicks
btnNombre.onclick = function () {
    guardarNombre();
}