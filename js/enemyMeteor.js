import { TAMX, PROB_ENEMY_METEOR } from "./config.js"
import { space } from "./space.js"

const sizes = [
  "assets/png/meteorBig.png",
  "assets/png/meteorSmall.png",
]

class EnemyMeteor{
  constructor() {
    this.size = Math.floor(Math.random() * 2);
    this.element = document.createElement("img")
    this.element.className = "enemy-meteor"
    this.element.src = sizes[this.size]
    this.element.style.top = "-20px"
    this.element.style.left = `${parseInt(Math.random() * TAMX)}px`
    space.element.appendChild(this.element)
  }
  move() {
    this.element.style.top = `${parseInt(this.element.style.top) + 1}px`
    
  }
}

const enemyMeteors = [] 

export const createRandomEnemyMeteor = () => {
  if (Math.random() < PROB_ENEMY_METEOR) enemyMeteors.push(new EnemyMeteor())
} 

export const moveEnemyMeteors = () => {
  enemyMeteors.forEach(e => e.move()) 
  console.log("MOVE E.M")
} 