export default class Text {
  #position;
  #width;
  #height;
  #positionToMove;
  #img;
  #velocityX;

  constructor({ x, y }, width, height, positionToMove, velocityX, img) {
    this.#position = {
      x,
      y,
    };

    this.#width = width;
    this.#height = height;
    this.#positionToMove = positionToMove;
    this.#velocityX = velocityX;

    this.#img = img;
  }

  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }

  moveTo() {
    if (this.#position.x >= this.#positionToMove) {
      this.#position.x -= this.#velocityX;
    }
  }
}
