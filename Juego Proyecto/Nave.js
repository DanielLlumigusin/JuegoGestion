export class Nave {
  constructor() {
    this.nave1 = document.getElementById(1);
    this.nave2 = document.getElementById(2);
    this.nave3 = document.getElementById(3);
    this.nave4 = document.getElementById(4);
    this.numeroNaves = 4;
    this.vidas = parseInt(document.getElementById("lifes").textContent);
  }

  equivoca() {
    if (this.vidas !== 0) {
      this.vidas--;
      document.getElementById("lifes").textContent = this.vidas;
    } else {
      console.log("Juego Terminado");
      window.location.href = "/Juego%20Proyecto/game-over.html";
    }
  }

  coheteNumero(arrayNum) {
    this.nave1.textContent = arrayNum[0];
    this.nave2.textContent = arrayNum[1];
    this.nave3.textContent = arrayNum[2];
    this.nave4.textContent = arrayNum[3];
  }
}
