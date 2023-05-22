document.write("Escrito desde javascript sin etiquetas");
document.write("<h1>Escrito desde etiqueta h1</h1>");
document.write("Estos dos parrafos estan escritos desde script externos");
document.write(" ");
alert("Esto es una alerta emergente string");
alert("Sumamos 2 + 2");
alert(2+2);

document.write("<h4>Vamos a declarar las variables con let y lo imprimimos por pantalla</h4>");
document.write("<h5>Averiguar los saltos de linea en js</h5>");
let edadUsuario, nombre;
document.write("<h4>Le pedimos al usuario la edad y concatenamos la salida:</h4>");
nombre=prompt("Ingrese su nombre");
edadUsuario=prompt("Ingresa tu edad:");
document.write("Ud se llama "+nombre+", y tienes "+edadUsuario+" años de edad");
document.write("<h5>Otra forma de contatenar mira con ´ ´ pero con la tilde al reves</h5>");
// document.write(´Usted se llama ${nombre} y tiene ${edadUsuario} años de edad´ );
