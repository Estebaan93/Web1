/*4) Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
random de la clase Math*/

let n;
for(let i=0; i<50; i++){
    n=Math.floor(Math.random()*6+1);
    console.log("Indice "+i+": "+n);
    document.write("Indice "+i+": "+n+"<br>");
}