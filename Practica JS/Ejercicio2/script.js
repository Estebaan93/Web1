/*2) Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura
especificada por el usuario.*/

//Declaramos las variables
let base, altura, i, j;
//Le pedimos los datos al usuario por pantalla emergente
base=prompt("Ingrese la base:");
altura=prompt("Ingrese la altura:");

if (base>0 && altura>0) {
//Ciclo for para imprimir
    for (i=1; i<=altura; i++) {
     for(j=1; j<=base; j++){
         if (i>1 && i<altura && j>1 && j<base) {
             document.write(" * ");
         } else{
           document.write("* ");
          }
      }   
      document.write("<br>");
    }
}
