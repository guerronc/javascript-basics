const cesar = {
  nombre: "Cesar",
  apellido: "Guerron",
  edad: 28
};

const nina = {
  nombre: "Nina",
  apellido: "Zambrano",
  edad: 28
};

function saludar(saludo = "Hola") {
  console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

const saludarCesar = saludar.bind(cesar, "Que mas...");

saludarCesar();
saludar.call(cesar, "Que dices...");

saludar.apply(cesar, ["Que mas huevon..."]);
