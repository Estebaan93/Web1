/*1) Realiza un programa de nombre Ejercicio1.html, que funcione de la siguiente forma:
a) El programa nos pregunta nuestro nombre.
b) El programa nos pregunta nuestra edad.
c) El programa da como resultado nuestro nombre y a continuación los días que
hemos vivido hasta el momento.*/

//Declaramos las variables

let nombre, edad;
nombre=prompt("Ingrese su nombre");
edad=prompt("Ingrese su edad");
birthYear= 2023 - edad; 
document.write(nombre+" usted nacio en "+birthYear);