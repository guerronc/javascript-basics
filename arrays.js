var cesar = {
  nombre: "cesar",
  apellido: "guerron",
  altura: 1.61,
  cantidadLibros: 30
};

var nina = {
  nombre: "nina",
  apellido: "zambrano",
  altura: 1.59,
  cantidadLibros: 60
};

var pablo = {
  nombre: "pablo",
  apellido: "guerron",
  altura: 1.6,
  cantidadLibros: 121
};

var andrea = {
  nombre: "andrea",
  apellido: "jimenez",
  altura: 1.5,
  cantidadLibros: 12
};

var melissa = {
  nombre: "Melissa",
  apellido: "guerron",
  altura: 1.65,
  cantidadLibros: 45
};

var mercedes = {
  nombre: "Mercedes",
  apellido: "revelo",
  altura: 1.55,
  cantidadLibros: 98
};

var personas = [cesar, nina, pablo, andrea, melissa, mercedes];

const esAlta = ({ altura }) => altura > 1.6;

const esBaja = ({ altura }) => altura < 1.6;

const pasarCentimetros = persona => ({
  ...persona,
  altura: persona.altura * 100
});

const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros;

for (let i = 0; i < personas.length; i++) {
  const element = personas[i];
  console.log(`${element.nombre} tiene ${element.altura}`);
}

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
var personasCentimetros = personas.map(pasarCentimetros);

console.log(personasAltas);
console.log(personasBajas);
console.log(personasCentimetros);

var acumLibros = personas.reduce(reducer, 0);

console.log(acumLibros);

