

function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);
        
    }
}

const saludoArgentino = crearSaludo('che');
const saludoMexicano = crearSaludo('guey');
const saludoColombiano = crearSaludo('parse');

saludoArgentino('Cesar');

saludoColombiano('Cesar');

saludoMexicano('Cesar');



