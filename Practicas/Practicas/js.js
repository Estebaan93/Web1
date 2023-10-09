/*VALIDAMOS FORMULARIO*/
const nombreReg=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const correoReg=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
let campo_input=null;   //focus

let nombre=document.getElementById("nombre");
let email=document.getElementById("email");
let msj=document.getElementById("mensaje");

let errorNombre=document.getElementById("errorNombre");
let errorEmail=document.getElementById("errorEmail");
let errorMsj=document.getElementById("errorMensaje");

errorNombre.classList.add('errorInact');
errorNombre.classList.add('errorAct');

errorMsj.classList.add('errorInact');
errorMsj.classList.add('errorAct');

errorEmail.classList.add('errorInact');
errorEmail.classList.add('errorAct');


function validar(){
    errorNombre.textContent="";
    errorEmail.textContent="";
    errorMsj.textContent="";

    //Validar nombre
    if(nombre.value=="" || !nombreReg.test(nombre.value)){
        errorNombre.textContent="El nombre es invalido";
        /*nombre.style.border="1px solid #FF0000";*/
        nombre.focus();
        errorNombre.classList.remove('errorInact');
        errorNombre.classList.add('errorAct');
        return false;
     }

     //Validar mensaje
     if(msj.value.trim()===""){
        errorMsj.textContent="El mensaje debe ser obligatorio";
        /*msj.style.border="1px solid #FF0000";*/
        errorMsj.classList.remove('errorInact');
        errorMsj.classList.add('errorAct');
        campo_input=msj;
        return false;
     } else if (msj.value.length>200){
        errorMsj.textContent="El mensaje no puede superar los 200 caracteres";
        msj.style.border="1px solid #FF0000";
        return false;
     }

     //Validad email opcional si se ingresa
     let emailValue=email.value.trim();
     if(emailValue !=="" && !correoReg.test(email.value)){
        errorEmail.textContent="El email no es valido";
       /* errorEmail.classList.remove('errorIncativ');
        errorEmail.classList.add('errorAct');*/
        email.style.border="1px solid #FF0000";
        
        return false;
     }
     //Mensajes
     let registro=document.getElementById("RegistroOk");
     let msjNuevo=document.createElement("p");
     let nombreValue=nombre.value.trim();
     let msjValue=msj.value.trim();
     let msjFinal=nombreValue + " dice, " + msjValue;
     if(email.value.trim()!==""){
        msjFinal+=" .Contacto: "+email.value.trim();
     }
     msjNuevo.textContent=msjFinal;
     registro.appendChild(msjNuevo);

     //Limpiar campos
     nombre.value="";
     msj.value="";
     email.value="";
     nombre.style.border="1px solid #ccc";
     msj.style.border="1px solid #ccc";
     email.style.border="1px solid #ccc";

     //Hacemos focus al primer input
     //nombre.focus();
     return false;


}
nombre.focus();

window.onload=function(){
    let nombre=document.getElementById("nombre");
    nombre.focus();
};


