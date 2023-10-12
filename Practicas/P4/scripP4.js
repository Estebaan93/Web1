const regApellNombre=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regCorreo=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
const regTel= /^\d{7,14}$/;
const regDirec=/^[\w,.]+( [.,\w]+)*$/;

function validar(e){
    e.preventDefault();
    let apellido=document.getElementById('apellido');
    let nombre=document.getElementById('nombre');
    let correo=document.getElementById('correo');
    let telefono=document.getElementById('telefono');
    let direccion=document.getElementById('direccion');
    let provincia=document.getElementById('provincia');

    let errorApe=document.getElementById('veriApellido');
    let errorNom=document.getElementById('veriNom');
    let errorCor=document.getElementById('veriCor');
    let errorTel=document.getElementById('verTel');
    let errorDir=document.getElementById('verDirec');
    
    
    let errorA=false

//Limpiamos errores
    errorApe.textContent="";
    errorNom.textContent="";
    errorCor.textContent="";
    errorTel.textContent="";
    errorDir.textContent="";

    
    let apellidoValue=apellido.value.trim();
    let nombreValue=nombre.value.trim();
    let correoValue=correo.value.trim();
    let telefonoValue=telefono.value.trim();
    let direccionValue=direccion.value.trim();
    let provinciaValue=provincia.value.trim();
    

    //Validar Apellido
    if(apellido.value=="" || !regApellNombre.test(apellido.value)){
      errorApe.textContent="El apellido es invalido";
      apellido.style.border="1px solid #FF0000";
      errorApe.classList.add('errorAct');
      errorA= true;
   }
    
    //Validar nombre
    if(nombre.value=="" || !regApellNombre.test(nombre.value)){
        errorNom.textContent="El nombre es invalido";
        nombre.style.border="1px solid #FF0000";
        errorNom.classList.add('errorAct');
        errorA= true;
     }

     //Validar correo
     if(correo.value=="" || !regCorreo.test(correo.value)){
      errorCor.textContent="El correo es invalido";
      correo.style.border="1px solid #FF0000";
      errorCor.classList.add('errorAct');
      errorA= true;
     }

    //Validar telefono
     if(telefono.value=="" || !regTel.test(telefono.value)){
      errorTel.textContent="El telefono es invalido";
      telefono.style.border="1px solid #FF0000";
      errorTel.classList.add('errorAct');
      errorA= true;
     }

     //Validar direccion
     if(direccion.value=="" || !regDirec.test(direccion.value)){
      errorDir.textContent="Error de direccion";
      direccion.style.border="1px solid #FF0000";
      errorDir.classList.add('errorAct');
      errorA= true;
     }

     //Validar provincia
     if(provincia.value==""){
        provincia.style.border="1px solid #FF0000"
        errorA=true;
     }

     if(errorA){
        return false;
     } else{
        //Mensajes
     let registro=document.getElementById("Registro");
     let msjNuevo=document.createElement("p");
     let msjFinal="Se registro: " + apellidoValue +" "+ nombreValue +" "+ correoValue +" Districto: "+provincia.value;
     msjNuevo.textContent=msjFinal;
     registro.appendChild(msjNuevo);

     //Limpiamos stylos
     apellido.style.border="1px solid #ccc";
     nombre.style.border="1px solid #ccc";
     correo.style.border="1px solid #ccc";
     direccion.style.border="1px solid #ccc";
     telefono.style.border="1px solid #ccc";
     provincia.style.border="1px solid #ccc";
     }
     let frm=document.getElementById('Formulario');

     //Limpiar campos
     apellido.value="";
     nombre.value="";
     correo.value="";
     telefono.value="",
     direccion.value="";
     
     /* nombre.style.border="1px solid #ccc";
     msj.style.border="1px solid #ccc";
     email.style.border="1px solid #ccc"; */

     //Hacemos focus al primer input
     apellido.focus();
     frm.reset();
     return false;

}

nombre.focus();

window.onload=function(){
    let apellido=document.getElementById("apellido");
    apellido.focus();
};
// Agrega un controlador de eventos al formulario
let formulario = document.getElementById("Formulario");
formulario.addEventListener("submit", validar);


