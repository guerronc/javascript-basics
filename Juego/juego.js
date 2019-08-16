const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel();
  }

  inicializar() {
    this.eligirColor = this.eligirColor.bind(this);
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

  siguienteNivel() {
    this.iluminarSecuencia();
    this.agregarEventosClick();
  }

  transformaNumeroColor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
      default:
        break;
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformaNumeroColor(this.secuencia[i]);
      setTimeout(() => {
        this.iluminarColor(color);
      }, 1000 * i);
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => {
      this.apagarColor(color);
    }, 1000);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }

  agregarEventosClick() {
    this.colores.celeste.addEventListener("click", this.eligirColor);
    this.colores.verde.addEventListener("click", this.eligirColor);
    this.colores.violeta.addEventListener("click", this.eligirColor);
    this.colores.naranja.addEventListener("click", this.eligirColor);
  }

  eligirColor(ev) {
    console.log(ev);
    console.log(this);
  }
}

function empezarJuego() {
  var juego = new Juego();
  console.log(juego);
}
