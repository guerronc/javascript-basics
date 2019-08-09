var cesar = {
  nombre: "cesar",
  apellido: "guerron",
  edad: 35,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
};

var nina = {
  nombre: "Nina",
  apellido: "Zambrano",
  edad: 17
};

const MAYOR_EDAD = 18;

//condicionales
function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es: `);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  } else {
    console.log("No es ingeniero");
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.dj) {
    console.log("Dj");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.drone) {
    console.log("Drone");
  }
}

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona) {
    if(!esMayorEdad(persona)){
        console.log('acceso denegado');
    }
}


var esMayorEdad = ({edad}) => edad > MAYOR_EDAD;

var esMenorDeEdad = persona => !esMayorEdad(persona);

imprimirProfesiones(cesar);
