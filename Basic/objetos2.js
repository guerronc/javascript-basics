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
function imprimirNombre(persona) {
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

function imprimirNombreEdad(persona) {
  var { nombre, edad } = persona;
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} anos de edad `);
}

function cumpleanos(persona) {
    //persona.edad += 1;
    return {
        ...persona,
        edad: persona.edad + 1,
        titulo: 'ingeniero'
    }
}

imprimirNombre(cesar);

imprimirNombre(nina);

imprimirNombre({ nombre: "pepito" });

imprimirNombreEdad(cesar);

imprimirNombreEdad(nina);

