//DOM - Document Objet Model
//variables
let btnAlerta = document.getElementById("btnAlerta");

const ventanaAlerta = () =>{ 
    alert("prueba");
}


//Onclicks

btnAlerta.onclick = function () {
    ventanaAlerta();
}