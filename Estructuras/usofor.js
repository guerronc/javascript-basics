var cesar = {
  nombre: "Cesar",
  apellido: "Guerron",
  edad: 35,
  peso: 60
};

const INCREMENTO_PESO = 0.2;
const DIAS_AÑO = 365;

console.log(`Al inicio del año ${cesar.nombre} pesa ${cesar.peso}`);

const aumentarPeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

for (let i = 1; i <= DIAS_AÑO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentarPeso(cesar);
  } else if (random < 0.5) {
    adelgazar(cesar);
  } else {
    console.log("No hizo nada");
  }
}

console.log(`Al final del año ${cesar.nombre} pesa ${cesar.peso.toFixed(2)}`);
