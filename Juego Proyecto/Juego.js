// Juego.js
import { Nave } from "./Nave.js";

class Juego extends Nave {
  constructor() {
    super();
    this.preguntas = document.getElementById("question");
    this.respuesta = 0;
    this.puntos = parseInt(document.getElementById("score").textContent);
    this.numerosMezclados = [];
    this.iniciarJuego();
  }

  generadorPreguntas() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let pregunta = num1 + " + " + num2 + " = ?";
    this.preguntas.textContent = pregunta;
    this.respuesta = num1 + num2;
  }

  generadorNumerosCohetes() {
    // Generamos tres números aleatorios diferentes de respuesta
    let numerosAleatorios = [];
    while (numerosAleatorios.length < 3) {
      let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
      if (
        numeroAleatorio !== this.respuesta &&
        !numerosAleatorios.includes(numeroAleatorio)
      ) {
        numerosAleatorios.push(numeroAleatorio);
      }
    }
    // Mezclamos los números aleatorios junto con respuesta
    this.numerosMezclados = [this.respuesta, ...numerosAleatorios];
    this.numerosMezclados.sort(() => Math.random() - 0.5); // Mezcla aleatoria

    // Genera los numeros dentro de la nave
    this.coheteNumero(this.numerosMezclados);
    console.log(this.numerosMezclados);
  }

  coheteEventos() {
    // Agregar escuchadores para clics
    this.nave1.addEventListener("click", () => this.seleccionarNave(1));
    this.nave2.addEventListener("click", () => this.seleccionarNave(2));
    this.nave3.addEventListener("click", () => this.seleccionarNave(3));
    this.nave4.addEventListener("click", () => this.seleccionarNave(4));

    // Agregar escuchadores para teclas del 1 al 4
    document.addEventListener("keydown", (event) => {
      const numeroTecla = parseInt(event.key);
      if (numeroTecla >= 1 && numeroTecla <= 4) {
        this.seleccionarNave(numeroTecla);
      }
    });
  }

  puntaje() {
    this.puntos += 1;
    document.getElementById("score").textContent = this.puntos;
    localStorage.setItem("score", JSON.stringify(this.puntos));
  }

  seleccionarNave(numeroNave) {
    console.log(
      `Nave ${numeroNave} seleccionada. Respuesta: ${this.respuesta}`
    );
    if (this.numerosMezclados[numeroNave - 1] !== this.respuesta) {
      console.log("respuesta incorrecta");
      this.equivoca();
    } else {
      console.log("respuesta correcta");
      this.puntaje();
      // Llamar a las funciones de generación de pregunta y números de cohetes
      setTimeout(() => {
        this.generadorPreguntas();
        this.generadorNumerosCohetes();
      }, 1000); // Esperar 1 segundo (puedes ajustar este valor)
    }
  }

  iniciarJuego() {
    this.generadorPreguntas();
    this.generadorNumerosCohetes();
    this.coheteEventos();
    localStorage.clear();
  }
}

// Instanciar el juego
const juego = new Juego();