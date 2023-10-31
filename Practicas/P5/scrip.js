// Función para manejar el envío del formulario

function validarFormulario(e) {
    e.preventDefault();
    // Obtén los valores de los campos del formulario
    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    let errorN=document.getElementById('errorN');
    let errorE=document.getElementById('errorE');
    
    //Limpia errores
    errorN.textContent="";
    errorE.textContent="";

    // Realiza la validación (puedes agregar tus propias reglas de validación aquí)
    if (nombre === "") {
        errorN.textContent="Por favor, complete todos los campos.";
        errorN.classList.add('error');
        nombre.style.border="1px solid #FF0000";
      return false;
    }
    if( email === ""){
        errorE.textContent="Por favor, complete todos los campos.";
        errorE.classList.add('error');
        email.style.border="1px solid #FF0000";
        
        return false;
    }
  
    // Crea un nuevo elemento en el DOM para mostrar los resultados
    var resultadoDiv = document.getElementById("resultado");
    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Nombre: " + nombre + ", Email: " + email;
    resultadoDiv.appendChild(nuevoParrafo);
    let frm=document.getElementById('miFormulario');
    
    //Limpiamos campos 
    frm.reset();
    nombre.focus();
  }
  window.onload = function() {
    var nombre = document.getElementById("nombre");
    nombre.focus();
  };
  // Agrega un controlador de eventos al formulario
let formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", validarFormulario);
  
  