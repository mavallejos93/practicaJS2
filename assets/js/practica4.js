//variables
let btnIngreso = document.getElementById("btnIngreso");
let funNombre = document.getElementById("funNombre");
let funEdad = document.getElementById("funEdad");
let funDni = document.getElementById("funDni");
let funTelefono = document.getElementById("funTelefono");

//funciones
const guardarNombre = () =>{ 
    //Nombre
    let nombre = prompt("Ingrese su Nombre");
    if (nombre === "") {
        alert("Favor escribir Datos");
    } else {
    let edad = prompt("Ingrese su Edad");
    if (edad === "") {
        alert("Favor escribir Datos");
    } else {
    let dni = prompt("Ingrese su documento de identidad");
    if (dni === "") {
    alert("Favor escribir Datos");     
    } else {
    let telefono = prompt("Ingrese su numero de telefono");
    if (telefono === "") {
        alert("Favor escribir Datos");
    } else {
        funEdad.innerHTML="Edad: " + edad;
        funNombre.innerHTML="Nombre: " + nombre;
        funDni.innerHTML="DNI: " + dni;
        funTelefono.innerHTML="Telefono: " + telefono;
}
}
}
}
}


//Onclicks
btnIngreso.onclick = function () {
    guardarNombre();
}