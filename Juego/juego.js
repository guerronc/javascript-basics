const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel()
  }

  inicializar() {
    btnEmpezar.classList.add("hide");
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    };
  }

  generarSecuencia() {
    this.secuencia = new Array(10)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
  }

  siguienteNivel(){
      this.iluminarSecuencia()
  }

  iluminarSecuencia(){
      for (let i = 0; i < this.nivel; i++) {
                 
      }
  }
}

function empezarJuego() {
  var juego = new Juego();
  console.log(juego);
  
}
