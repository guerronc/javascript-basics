var cesar = {
  nombre: "Cesar",
  apellido: "Guerron",
  edad: 35,
  peso: 60
};

const INCREMENTO_PESO = 0.3;
const DIAS_AÑO = 365;

console.log(`Al inicio del año ${cesar.nombre} pesa ${cesar.peso}`);

const aumentarPeso = persona => (persona.peso += INCREMENTO_PESO);

const adelgazar = persona => (persona.peso -= INCREMENTO_PESO);

const comeMucho = () => Math.random() < 0.3;
const realizaReporte = () => Math.random() < 0.4;

var dias = 0;
const META = cesar.peso - 3;

while (cesar.peso > META) {
  if (comeMucho()) {
    aumentarPeso(cesar);
  }
  if (realizaReporte()) {
    adelgazar(cesar);
  }
  dias += 1;
}

console.log(`Pararon ${dias} hasta que ${cesar.nombre} adelgazo ${META}`);
