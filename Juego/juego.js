const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const ULTIMO_NIVEL = 1;

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this);
    this.inicializar();
    this.generarSecuencia();
    setTimeout(() => {
      this.siguienteNivel();
    }, 500);
  }

  inicializar() {
    this.eligirColor = this.eligirColor.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.toggleBtnEmpezar();
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    };
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
  }

  siguienteNivel() {
    this.subNivel = 0;
    this.iluminarSecuencia();
    this.agregarEventosClick();
    console.log(`siguiente nivel llamada: ${this.nivel}`);
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

  transformaColorNumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
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

  eliminarEventosClick() {
    this.colores.celeste.removeEventListener("click", this.eligirColor);
    this.colores.verde.removeEventListener("click", this.eligirColor);
    this.colores.violeta.removeEventListener("click", this.eligirColor);
    this.colores.naranja.removeEventListener("click", this.eligirColor);
  }

  eligirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transformaColorNumero(nombreColor);
    this.iluminarColor(nombreColor);

    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++;
      if (this.subNivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.ganoJuego();
        } else {
          setTimeout(() => {
            this.siguienteNivel();
          }, 2000);
        }
      }
    } else {
      this.perdioJuego();
    }
  }

  ganoJuego() {
    swal("Platzi", "Felicitaciones Ganaste", "success").then(() => {
      this.inicializar();
    });
  }

  perdioJuego() {
    swal("Platzi", "Perdiste", "error").then(() => {
      this.eliminarEventosClick();
      this.inicializar();
    });
  }

  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
    } else {
      btnEmpezar.classList.add("hide");
    }
  }
}

function empezarJuego() {
  const juego = new Juego();
}
