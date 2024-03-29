const pSaludo = document.getElementById("pSaludo");
const ltaErrores = document.getElementById("ltaErrores");
const btnSaludar = document.getElementById("btnSaludar");
//btnSaludar.addEventListener("click", saludar);

function saludar(){
 let f_nombre = document.getElementById("f_nombre");
 let nombre = f_nombre.value.trim();
 let f_apellido = document.getElementById("f_apellido");
 let apellido = f_apellido.value.trim();
 let f_deporte = document.getElementById("f_deporte");
 let deporte = f_deporte.value;
 let f_tyc = document.getElementById("f_tyc");
 let tyc = f_tyc.checked;
 let errores = [];
 let campo_error = null;
 
 let frm = document.getElementById("frm");
 /*
 for (v of frm.children) {
  v.classList.remove("error");
 }*/
 
 for (v of frm.querySelectorAll("input,select,div")) {
  v.classList.remove("error");
 }
 
 if(nombre == "") {
  errores.push("Falta el nombre");
  campo_error = f_nombre;
  f_nombre.classList.add("error");
 }
 if(apellido == "") {
  errores.push("Falta el apellido");
  campo_error = f_apellido;
  f_apellido.classList.add("error");
 }
 if(deporte == "") {
  errores.push("Falta el deporte");
  campo_error = f_deporte;
  f_deporte.classList.add("error");
 }
 if(!tyc) {
  errores.push("Debe aceptar los términos y condiciones");
  campo_error = f_tyc;
  f_tyc.parentNode.classList.add("error");
 }
 ltaErrores.innerHTML = "";
 if(errores.length > 0) {
  for(let i=0;i<errores.length;i++) {
   let li = document.createElement("li");
   li.innerHTML = errores[i];   
   ltaErrores.appendChild(li);
  }
  if(campo_error != null) {
   campo_error.focus();
  }
  return false;
 }
 let mje = `Hola ${nombre} ${apellido}, ¡Bienvenido a ${deporte}!`;
 pSaludo.innerHTML = mje;
 return false;
}
