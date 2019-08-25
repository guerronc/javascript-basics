class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido);
    }
  }
  soyAlto() {
    return this.altura > 1.6;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura);
  }
  saludar(fn) {
    var { nombre, apellido } = this;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrolador`);
    if (fn) {
      fn(nombre, apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`);
}

var cesar = new Persona("Cesar", "Guerron", 1.6);
var nina = new Persona("Nina", "Zambrano", 1.6);
var pablo = new Desarrollador("Pablo", "Guerron", 1.6);

cesar.saludar();
nina.saludar(responderSaludo);
pablo.saludar(responderSaludo);

// var pablo = new Desarrollador('pablo', 'Guerron', 1.70);
