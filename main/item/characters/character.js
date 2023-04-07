export default class Character {
  #position;
  #velocityX;
  #positionTomove;
  #width;
  #height;
  #frame;
  #sprites;
  #currentSprite;

  constructor({ x, y }, positionTomove, rightStand, leftStand, rightRun, leftRun) {
    this.#position = {
      x,
      y,
    };

    this.#sprites = {
      stand: {
        right: rightStand,
        left: leftStand,
      },
      run: {
        right: rightRun,
        left: leftRun,
      },
    };

    this.#width = 70;
    this.#height = 70;

    this.#velocityX = 2;

    this.#frame = 0;
    this.#positionTomove = positionTomove;
    this.#currentSprite = this.#sprites.run.left;
  }

  draw(ctx) {
    ctx.drawImage(
      this.#currentSprite,
      32 * parseInt(this.#frame / 3),
      0,
      32,
      32,
      this.#position.x,
      this.#position.y,
      this.#width,
      this.#height
    );
    this.#frame++;
    if (this.#frame > this.checkFrame()) {
      this.#frame = 0;
    }
  }

  checkFrame() {
    switch (this.#currentSprite) {
      case this.#sprites.run.right:
        return 33;
        break;
      case this.#sprites.stand.right:
        return 30;
        break;
      case this.#sprites.run.left:
        return 33;
        break;
      case this.#sprites.stand.left:
        return 30;
        break;
    }
  }
}
