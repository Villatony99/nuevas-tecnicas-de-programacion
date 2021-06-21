/* 
Concat
*/
var numeros=[1,2,3,4,5];
var nuevosNumeros=numeros.concat([6,7,8,9,0])
// console.log(numeros)
// console.log(nuevosNumeros)

/*
Join
*/
var letras=["a","n","t","h","o","n","y"]
//console.log(letras.join(";"))
//console.log(numeros.join("-"))

/* 
Slice
*/
//console.log(letras.slice(2));

/*
index of
*/
//console.log(letras.indexOf("y"))

/*
last index of
*/
//console.log(letras.lastIndexOf("n"))

/*
reverse
*/
//console.log(letras.reverse())

/*
sort
*/
var numeros2=[9,4,5,2,3,5,4,2,1,2,5,6,7,8]
//console.log(numeros2.sort())

/*
shift
*/
console.log(numeros2.shift())

/*
Pop
*/
//console.log(numeros2.pop())

/*
Push
*/
numeros2.push(2,3)
//console.log(numeros2)

var pares=[2,4,6,8]
//console.log(pares.map((elemento)=>elemento+1))

/*
        Tarea 2:Consultar funciones de arreglos
*/
//1.splice 
console.log(letras.splice(2,2,"a"))

//2.unshift

console.log(pares.unshift(10))

//3.Tostring
console.log(numeros2.toString())

//4.lenght
//var tamaño=pares.length()
//console.log(tamaño)

//5.find
var PrimerValorMayorA = pares.find((pares) => {
    return pares > 2;
});
console.log(PrimerValorMayorA)

//6.filter
var usuarios = [
    { nombre: "pepe", netflix: true },
    { nombre: "ana", netflix: false },
    { nombre: "chucho", netflix: false },
    { nombre: "karina", netflix: true }
];
var usuariosQueTienenNetflix = usuarios.filter(usuarios => {
    return usuarios.netflix;
  });
   
  console.log(usuariosQueTienenNetflix);
