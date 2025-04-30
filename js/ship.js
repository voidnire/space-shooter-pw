import { TAMX } from "./config.js"
import { space } from "./space.js"

const directions = [
  "assets/png/playerLeft.png",
  "assets/png/player.png",
  "assets/png/playerRight.png",
]

class Ship {
  constructor() {
    this.element = document.createElement("img")
    this.element.id = "ship"
    this.direction = 1
    this.element.src = directions[this.direction]
    this.element.style.bottom = "20px"


    const width = window.innerWidth;
    this.element.style.left= `${width / 2 - 50}px`

    //this.element.style.left = `${TAMX / 2 - 50}px`
    space.element.appendChild(this.element)

    this.element.onload = () => {
      this.width = this.element.naturalWidth; // Largura original da imagem
    }

  }


  changeDirection(giro) { // -1 +1
    if (this.direction + giro >= 0 && this.direction + giro <= 2)
      this.direction = this.direction + giro
    this.element.src = directions[this.direction]
  }

  move() {
    const currentLeft = parseInt(this.element.style.left);

    const width = window.innerWidth;

    if (this.direction === 0 && currentLeft > 0){
      this.element.style.left = `${currentLeft - 2}px`; // 2px de movimento
    }
    if (this.direction === 2 && currentLeft + this.width < width) {
      this.element.style.left = `${currentLeft + 2}px`; // 2px de movimento
    }
    //if (this.direction === 0) this.element.style.left = `${parseInt(this.element.style.left) - 2}px`
    //if (this.direction === 2) this.element.style.left = `${parseInt(this.element.style.left) + 2}px`
  }
}

export const ship = new Ship()