import { FPS } from "./config.js"
import { space } from "./space.js"
import { ship } from "./ship.js"
import { createLife, loseLife } from "./life.js" 


import { createRandomEnemyShip, moveEnemyShips } from "./enemyShip.js"

function init() {
  createInitialLives(); 
  setInterval(run, 1000 / FPS)
}

function createInitialLives() {
  // Cria as 3 vidas iniciais
  for (let i = 0; i < 3; i++) {
    createLife(); 
  }
}

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") ship.changeDirection(-1)
  if (e.key === "ArrowRight") ship.changeDirection(+1)

  ///if (e.key === "p") { togglePause(); }
  })

//let gamePaused = false;

//function togglePause() {
//  gamePaused = !gamePaused; // Alterna entre pausa e execução
//}

function run() {
  //if (gamePaused) return;



  //if (lives.length === 0) {
  //  endGame();
  //  return;
  //}


  space.move()
  ship.move()
  createRandomEnemyShip()
  moveEnemyShips()
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
}

function endGame() {
  // Exibe uma mensagem de game over e o botão para reiniciar
  alert("Loser Loser Loser! Você perdeu todas as vidas.");
  // Aqui você pode reiniciar o jogo, resetar as variáveis, etc.
  resetGame();
}

function resetGame() {
  // Reseta o estado do jogo, as vidas e outros elementos
  lives.length = 0; // Limpa a lista de vidas
  createInitialLives(); // Cria as vidas novamente
  // Aqui você pode resetar outros elementos como a pontuação, inimigos, etc.
}


init();