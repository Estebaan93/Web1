const regApellNombre=/^[a-zA-ZÀ-ÿ\s]{1,9}$/;    //Hasta 9
const regTel= /^\d{7,14}$/;
const regDirec=/^[\w,.]+( [.,\w]+)*$/;

function validar(){
    
    let nombre=document.getElementById('nombre');
    let temperatura=document.getElementById('temperatura');
    let telefono=document.getElementById('telefono');

    //Errores
    let errorN=document.getElementById('errorN');
    let errorTemp=document.getElementById('errorTemp');
    let errorTel=document.getElementById('errorTelefono');
    let errores=false;

    //Limpiamos errors
    errorN.textContent="";
    errorTemp.textContent="";
    errorTel.textContent="";

    //Validar Nombre
    if(nombre.value=="" || !regApellNombre.test(nombre.value)){
        errorN.textContent="El nombre es invalido";
        nombre.style.border="1px solid #FF0000";
        errorN.classList.add('error');
        errores=true;
    }else if(nombre.value.length>9){
        errorN.textContent="El nombre es demasiado largo";
        nombre.style.border="1px solid #FF0000";
        errores=true;
    }

    if(errores){
        return false
    }else{
        //Mensajes

    }
    
}