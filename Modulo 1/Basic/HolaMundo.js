console.log("Hola Mundo");

/* 
    Tarea 1: Consultar Metodos de console
*/ 

//1.count Registra la cantidad de veces que se ha llamado count() con la etiqueta especificada.
function  nombre(nombres)  {
	console.count("Hola "  +  nombres);
}
nombre("Anthony");
nombre("Sebastian");
nombre("Anthony");
nombre("Sebastian");
nombre("Alejandro");
nombre("Anthony");

//2.assert Posee dos parametros el primero indica la condición 
//y el segundo el mensaje de error que se imprimirá en consola si la condición se evalúa como falsa.
console.assert(15 < 7, "15 no es menor que 7");
console.assert(15 == 7, "15 no es igual que 7");

//3.table crea una tabla con la información de un objeto o array cuando estos contienen datos similares
var Datos = { 
    hombre:{
    nombre : "Anthony", 
    apellido : "Villarroel", 
    edad:20},
    mujer:{
        nombre : "Ariana", 
        apellido : "Caceres", 
        edad:22}  
    }
console.table(Datos);

//4.warn Muestra un mensaje de advertencia
console.warn("Solo falta 1 día para finalizar el Proyecto");

//5.dir Emite un mensaje informativo 
console.info(Datos);

//6.trace muestra la documentación de console con detalles.
console.trace();