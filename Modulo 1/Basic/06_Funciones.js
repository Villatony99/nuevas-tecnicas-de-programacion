/* Funciones Declarativas
*/
//retornar valores
function saludar(){
return "hola soy Anthony"; 
}
//funciones void
function saludar2(){
    console.log("hola soy Anthony");
    }
//funciones con parametros
function saludarConParametros(nombre, apellido){
return `Hola soy ${nombre} ${apellido}`
}
//Funciones con parametros por defecto
function SaludarConProfesion(nombre="Persona", profesion="Estudiante"){
return `Hola soy ${nombre} mi profesion es ${profesion}`
}
// var resultado  = saludar();
// console.log(resultado);
//console.log(saludar());
//saludar2();
// console.log(saludarConParametros("Anthony","Villarroel"));
// console.log(SaludarConProfesion("Anthony","Desarrollador de Software"));

/* Funciones Expresivas o Funciones Anonimas 
*/
var saludarConEdad= function(nombre,edad){
    return  `Hola soy ${nombre} y tengo ${edad} ` 
}
//console.log(saludarConEdad("Anthony",20));

/* Arroy Function o Funciones Flechas
 */
//return
var saludoConApellido=(nombre, apellido)=> `Hola soy ${nombre} ${apellido}`
//console.log(saludoConApellido("Anthony","Villarroel"));
//void
var saludoConApellido2=(nombre, apellido)=> {
  //  console.log(`Hola soy ${nombre} ${apellido}`);
}
var suma=(num1,num2)=>num1+num2;
//console.log(suma(5,5))
/* funciones con parametros de otras funciones 
 */
function saludaoConFunciones(nombre,cb){
    return cb(nombre);
}
var misaludo= saludaoConFunciones("Anthony",function(nombre){
    return `Hola soy ${nombre}`;
});
var misaludo2= saludaoConFunciones("Anthony",(nombre) =>`Hola soy ${nombre}`);

//onsole.log(misaludo);
//console.log(misaludo2);
// setTimeout(() => {
//     console.log("Hola mundo")
// }, 1000);
// setInterval(() => {
//     console.log("Hola mundo")
// },2000);