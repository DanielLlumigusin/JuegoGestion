export class Nave {
  constructor() {
    this.nave1 = document.getElementById("1");
    this.nave2 = document.getElementById("2");
    this.nave3 = document.getElementById("3");
    this.nave4 = document.getElementById("4");
    this.vidas = 3;
    this.numerosImagenes = [
      "./img/Numero_0.png",
      "./img/Numero_1.png",
      "./img/Numero_2.png",
      "./img/Numero_3.png",
      "./img/Numero_4.png",
      "./img/Numero_5.png",
      "./img/Numero_6.png",
      "./img/Numero_7.png",
      "./img/Numero_8.png",
      "./img/Numero_9.png",
    ];
    this.numeros = [];
  }

  NumerosCohetes(arrayNum) {
    this.nave1.src = this.numerosImagenes[arrayNum[0]];
    this.nave2.src = this.numerosImagenes[arrayNum[1]];
    this.nave3.src = this.numerosImagenes[arrayNum[2]];
    this.nave4.src = this.numerosImagenes[arrayNum[3]];
  }

  ReduceVidas() {
    if (this.vidas !== 0) {
      this.vidas--;

      if (this.vidas === 2) {
        document.getElementById("lifes").src = "./img/MediaVida.png";
      } else if (this.vidas === 1) {
        if (this.vidas === 2) {
          document.getElementById("lifes").src = "./img/MediaVida.png";
        } else if (this.vidas === 1) {
          document.getElementById("lifes").src = "./img/VidaVacia.png";
        }
      } else {
        console.log("Juego Terminado");
        window.location.href = "/Juego%20Proyecto/game-over.html";
      }
    }
  }
}
