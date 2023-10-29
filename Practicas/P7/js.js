const regPeliculas=/^[a-zA-ZÀ-ÿ\s]{1,30}$/;  //Hasta 30 caracteres


function validar(){

    let pelicula=document.getElementById('pelicula');
    let puntuacion=document.getElementById('puntuacion');
    let comentario=document.getElementById('comentario');

    //ERRORES
    let errorP=document.getElementById('errorP');
    let errorPunt=document.getElementById('errorPunt');
    let errorCom=document.getElementById('errorComen');
    let errores=false;

    //LIMPIAMOS ERRORES
    errorP.textContent="";
    errorPunt.textContent="";
    errorCom.textContent="";


    //VALIDAR PELICULA
    if(pelicula.value=="" || !regPeliculas.test(pelicula.value)){
        errorP.textContent="La pelicula es invalida";
        pelicula.style.border="1px solid #FF0000";
        errorP.classList.add('error');
        errores=true;
    } else{
        pelicula.style.border="1px solid #ccc";
    }
    //VALIDAR PUNTUACION
    if(puntuacion.value<1 || puntuacion.value>5){
        errorPunt.textContent="La puntuacion es invalida";
        puntuacion.style.border="1px solid #FF0000";
        errorPunt.classList.add('error');
        errores=true;
    }else{
        puntuacion.style.border="1px solid #ccc";
    }

    //VALIDAR COMENTARIO SI ES QUE SE INGRESA
    
    if(comentario.value.length>0 && (comentario.value.length<10 || comentario.value.length>200)){
        errorCom.textContent="Error comentario";
        comentario.style.border="1px solid #FF0000";
        errorCom.classList.add('error');
        errores=true;
    }else{
        comentario.style.border="1px solid #ccc";
    }
    
    if(errores){
        return false;
    }else{
        //MENSAJES
        let reseñas=document.getElementById('reseñas');
        let reseñaFinal=document.createElement("p");
        let reseñaNueva=pelicula.value.trim()+ ", Puntuacion: "+puntuacion.value.trim() +", Comentario:  "+comentario.value.trim()
        reseñaFinal.textContent=reseñaNueva;
        reseñas.appendChild(reseñaFinal);

        //LIMPIAMOS STYLE
        pelicula.style.border="1px solid #ccc";
        puntuacion.style.border="1px solid #ccc";
        comentario.style.border="1px solid #ccc";
    }


    //LIMPIAMOS CAMPOS
    pelicula.value="";
    puntuacion.value="";
    comentario.value="";

    //HACEMOS FOCUS
    pelicula.focus();
    return false;
    
}