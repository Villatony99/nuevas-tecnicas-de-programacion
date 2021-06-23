//Como se hacia antes.
function Rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
}
Rectangulo.prototype.calcularArea = function () {
  return this.base * this.altura;
};
var rectangulo = new Rectangulo(6, 3);
console.log(rectangulo.calcularArea());

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
console.log(rectangulo2.calcularArea());
