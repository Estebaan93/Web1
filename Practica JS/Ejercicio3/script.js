/*3) Analice y repare el código para que se impriman todos los valores excepto los números.
var lista = new Array ('a','b','c','1','x','9',’d’,’4);
var item ;
for (item in lista)
{
if (lista[item] == "1" or “9”)
break;
console.log(lista[item]);
}
 */

var lista = new Array ('a','b','c','1','x','9','d','4');
var item ;
for (item in lista){
if (lista[item]=="1" || lista[item]=="9" || lista[item]=="4")
    continue;
    console.log(lista[item])
    document.write(lista[item]+" ");
}