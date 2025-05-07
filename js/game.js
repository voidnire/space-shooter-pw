import { FPS } from "./config.js"
import { space } from "./space.js"
import { ship } from "./ship.js"

import { createLife, loseLife } from "./life.js" 
import { score } from "./score.js"  // Importando a classe Score


import { createRandomEnemyShip, moveEnemyShips } from "./enemyShip.js"
import { createRandomEnemyMeteor, moveEnemyMeteors } from "./enemyMeteor.js"
import { createRandomEnemyUFO, moveEnemyUFOs } from "./enemyUFO.js"

let gameStarted = false;
let gamePaused = false;  

function init() {
  createInitialLives(); 
  score.updateDisplay();

  window.addEventListener("keydown", (e) => {
    if (e.key === " " && !gameStarted) { // press space to start
      startGame();  // Inicia o jogo
    }
    // pause event
    if (e.key === "p") {
      togglePause(); 
    }

    // change ship direction events
    if (e.key === "ArrowLeft") ship.changeDirection(-1)
    if (e.key === "ArrowRight") ship.changeDirection(+1)
  });

  

}

//START
function startGame(){
  gameStarted = true;
  setInterval(run, 1000 / FPS)
}

//PAUSE
function togglePause() {
  gamePaused = !gamePaused; 
  if (gamePaused) {
    console.log("Jogo pausado");
  } else {
    console.log("Jogo retomado");
  }
}


function createInitialLives() {
  // Cria as 3 vidas iniciais
  for (let i = 0; i < 3; i++) {
    createLife(); 
  }
}



function run() {
  //if (gamePaused) return;

  if (!gameStarted || gamePaused) return;

  //if (lives.length === 0) {
  //  endGame();
  //  return;
  //}

  space.move()
  ship.move()

  createRandomEnemyShip()
  createRandomEnemyMeteor()
  //createRandomEnemyUFO()

  moveEnemyShips()
  moveEnemyMeteors()
  //moveEnemyUFOs()
  //checkCollisions();


}

function checkCollisions() {
// Verifica se a nave bateu em algum inimigo
  // Caso haja colisão, perde uma vida e remove o inimigo da tela
  // (Aqui seria necessário implementar a verificação de colisão entre a nave e os inimigos)
  // Exemplo:
  // if (collisionDetected) {
  //   loseLife(); // Perde uma vida
  //   resetShipPosition(); // Reseta a posição da nave
  // }
   // Supondo que você tenha um inimigo destruído, vamos dar pontos:

  const pointsForDestroyingEnemy = 10; // Exemplo, você pode variar isso dependendo do tipo de inimigo
  score.increase(pointsForDestroyingEnemy);  // Aumenta a pontuação

}

function endGame() {
  // game over message
  alert("Loser Loser Loser! Você perdeu todas as vidas.");
  // reset game 
  resetGame();
}

function resetGame() {
  // reset game state + lives + score
  lives.length = 0; 
  score.points = 0; 
  createInitialLives(); 
  score.updateDisplay(); 
}


init();