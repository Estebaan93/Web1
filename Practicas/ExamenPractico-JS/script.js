const correoReg=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,20})+$/;
const nombreReg=/^[a-zA-ZÀ-ÿ\s]{1,30}$/;



function validar(){
    let nombre=document.getElementById('nombre');
    let email=document.getElementById('email');
    let edad=document.getElementById('edad');
    let mensaje=document.getElementById('mensaje');


    //ERRORES
    let errorNombre=document.getElementById('errorNombre');
    let errorEmail=document.getElementById('errorEmail');
    let errorEdad=document.getElementById('errorEdad');
    let errorMensaje=document.getElementById('errorMensaje');
    let errores=true;


    //LIMPIAMOS ERRORES
    errorNombre.textContent="";
    errorEmail.textContent="";
    errorEdad.textContent="";
    errorMensaje.textContent="";

    //VALIDAR
    //NOMBRE
    if(nombre.value=="" || !nombreReg.test(nombre.value)){
        errorNombre.textContent="Error nombre";
        nombre.style.border="1px solid #FF0000";
        errorNombre.classList.add('error');
        errores=true;
    }else{
        nombre.style.border="1px solid #ccc";
    }

    //EMAIL
    if((email.value.length > 20 && !email.value.includes("@"))){
        errorEmail.textContent="Error email";
        email.style.border="1px solid #FF0000";
        errorEmail.classList.add('error');
        errores=false;
    }else{
        email.style.border="1px solid #ccc";
    }

    //EDAD
    if(edad.value<18 || edad.value>=100){
        errorEdad.textContent="Error edad";
        edad.style.border="1px solid #FF0000";
        errorEdad.classList.add('error');
        errores=false;
    }else{
        edad.style.border="1px solid #ccc";
    }

    //MENSAJE
    if(mensaje.value=="" || mensaje.value.length>200){
        errorMensaje.textContent="Error mensaje";
        mensaje.style.border="1px solid #FF0000";
        errorMensaje.classList.add('error');
        errores=false;
    }else{
        mensaje.style.border="1px solid #ccc";
    }

    if(!errores){
        return false;
    }else{
        //CREANDO ELEMENTOS
        let registro=document.getElementById('registro');
        let registroFinal=document.createElement('p');
        let enviado=document.createElement('p');
        let registroNuevo=nombre.value.trim()+" , edad: "+edad.value.trim()+", mensaje: "+mensaje.value.trim()+" ."+email.value.trim();
        registroFinal.textContent=registroNuevo;
        registro.appendChild(registroFinal);
        

        //LIMPIAMOS STYLE
        nombre.style.border="1px solid #ccc";
        email.style.border="1px solid #ccc";
        edad.style.border="1px solid #ccc";
        mensaje.style.border="1px solid #ccc";
        
    
    }
    //LIMPIAMOS CAMPOS
    formulario.reset();
    formulario.style.display="none";
    enviado.style.display="block";

    //FOCUS
    nombre.focus();
    return false;


}