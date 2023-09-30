/*VALIDAMOS FORMULARIO*/
let nombreReg=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let correoReg=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

let focus=document.querySelector("form input");
document.getElementById("Formuladio").addEventListener("submit", validar);


function validar(){
    let nombre=document.querySelector("nombre");
    let correo=document.querySelector("Email");

    nombre.classList.remove("error");
    correo.classList.remove("error");

    document.querySelector('#ErrorNombre').classList.add('Error');
    




}
