import { TAMX, PROB_ENEMY_UFO } from "./config.js"
import { space } from "./space.js"

class EnemyUFO{
    constructor() {
        this.element = document.createElement("img");
        this.element.className = "enemy-ufo";
        this.element.src = "assets/png/enemyUFO.png";
        this.element.style.top = "-20px";
        this.element.style.left = `${parseInt(Math.random() * TAMX)}px`;
        
        
        space.element.appendChild(this.element);
      }
      move() {
        this.element.style.top = `${parseInt(this.element.style.top) + 1}px`;
    
      }
}

const enemyUFOs = [] 

export const createRandomEnemyUFO = () => {
  if (Math.random() < PROB_ENEMY_UFO) enemyUFOs.push(new EnemyUFO()) 
}

export const moveEnemyUFOs = () => {
  enemyUFOs.forEach(e => e.move()) 
} 