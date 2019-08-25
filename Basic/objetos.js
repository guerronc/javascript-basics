var cesar = {
  nombre: "cesar",
  apellido: "guerron",
  edad: 35
};

var nina = {
  nombre: "nina",
  apellido: "zambrano",
  edad: 30
};

//obtener el atributo nombre del objeto que nos llegue
function imprimirNombre({ nombre }) {
  console.log(nombre.toUpperCase());
}

imprimirNombre(cesar);

imprimirNombre(nina);

imprimirNombre({ nombre: "pepito" });

// imprimirNombre({apellido: 'revelo'});
