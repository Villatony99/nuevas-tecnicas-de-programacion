/* 
Asignacion =
Comparacion == 
Comparacion ===
Diferencia !=
Mayor que >
Menor que <
Mayor o igual que >=
Menor o igual que <=
 

console.log(2==2);
console.log(2==='2');
console.log(2=='2');
console.log(2!=2)
*/

/*
Operadores de Comparacion Compuestos
+= 
-=
+
-
*
/
%
**

var numero=3;
numero -=2;
console.log(numero)

Operadores para destructurar objetos
*/
var personales = { nombre : "Anthony", apellido : "Villarroel", edad:20,
viajes :{destino1:"Mexico", destino2:"Colombia"} };
var {nombre:nombre2, apellido,viajes:{destino1}} = personales;
console.log(personales);
console.log(nombre2);
console.log(apellido);
console.log(destino1);