//Como se hacia antes.
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}
Rectangulo.prototype.calcularArea = function () {
  return this.base * this.altura;
};
var rectangulo = new Rectangulo(6, 3);
//console.log(rectangulo.calcularArea());

//Declaracion Clases
class Rectangulo2 {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  calcularArea() {
    return this.base * this.altura;
  }
}
var rectangulo2 = new Rectangulo2(5, 2);
//console.log(rectangulo2.calcularArea());

/*
          Tarea 3
*/
//Estudiante
class DatosEstudiante{
constructor(nombre,apellido,carrera,anios){
  this.nombre=nombre
  this.apellido=apellido
  this.carrera=carrera
  this.anios=anios
}
get datos(){
  return `Mi nombre es ${this.nombre} ${this.apellido} tengo ${this.anios} años y estudio ${this.carrera}`;
}
set nuevoDatoEstudiante(datos){
  const vector = datos.split(" ");
  this.nombre = vector[0];
  this.apellido = vector[1];
  this.carrera = vector[2] ;
  this.anios = vector[3];
}
}
//metodo get
var estudiante = new DatosEstudiante("Anthony", "Villarroel",21,"Analisis de Sistemas");
//console.log(estudiante.datos);

//metodo set
estudiante.nuevoDatoEstudiante = "Sebastian Cabay Sistemas 21";
//console.log(estudiante.datos);

//Punto
class Punto {
  constructor ( x , y ){
    this.x = x;
    this.y = y;
  }
  static dis ( uno , dos) {
    const disx = uno.x - dos.x;
    const disy = uno.y - dos.y;
    return Math.sqrt ( disx * disx + disy * disy );
  }
}
var puntox = new Punto(10, 5);
var puntoy = new Punto(16, 8);
//console.log ("La distancia entre el punto X y el punto Y es: "+Punto.dis(puntox, puntoy));

