
let numAzar=Math.floor(Math.random()*1000001);
let n, i=1;
console.log(numAzar);
document.write("El numero al azar es: "+numAzar);
do {
    n=prompt("Adivine el numero al azar entre 1 y un millon:");
    if(numAzar<n){
    alert("El numero es menor");        
    } else if(numAzar>n){
        alert("El numero es mayor");
    } else{
        //Otra forma de concatenar comillas inversas
        //Averiguar con el teclado
        alert(`Acerto al numero!!! con ${i} intentos.`);
    }
    i++;

} while (!(numAzar==n));


