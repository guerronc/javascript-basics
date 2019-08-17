const cesar = {
  nombre: "Cesar",
  apellido: "Guerron",
  edad: 28
};

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
});
