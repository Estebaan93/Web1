/*VALIDAMOS FORMULARIO*/
const nombreReg=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const correoReg=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

let nombre=document.getElementById("nombre");
let email=document.getElementById("email");
let msj=document.getElementById("mensaje");

let errorNombre=document.getElementById("errorNombre");
let errorEmail=document.getElementById("errorEmail");
let errorMsj=document.getElementById("errorMensaje");


let focus=document.querySelector("form input");

function validar(){

    //Validar nombre
    if(nombre.value.trim()===nombreReg){
        


    }



}


