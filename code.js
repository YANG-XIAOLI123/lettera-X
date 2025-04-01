export const configurazione = {
  testo: "A",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/Bauhaus 93 Regular.ttf",

  sensibilitàMicrofonoBase: 1,
  densitàPuntiBase: 1,

  nascondiInterfaccia: true,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  push();
  translate(x, y);
  rotate(frameCount);
  stroke("blue");
  fill("pink");
  disegnaPoligono(0, 0, 20, 5); // 边形
  image(img, 0, 0, 50, 50);

  pop();
}
let img;
export function caricamentoRisorse() {
  img = loadImage("./assets/画板 13.png");
}

//

function disegnaPoligono(x, y, raggio, lati) {
  const angolo = 360 / lati;
  beginShape();
  for (let i = 0; i < lati; i++) {
    const px = x + cos(i * angolo) * raggio;
    const py = y + sin(i * angolo) * raggio;
    vertex(px, py);
  }
  endShape(CLOSE);
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("deeppink");

  // [INFO] Rimuovi il commento per disegnare il testo
  fill("white");
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
