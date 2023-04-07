export default class StageButton {
  #position;
  #width;
  #height;
  #img;
  #stageButton;

  constructor({ x, y }, width, height) {
    this.#stageButton = document.getElementById("stageButton");

    this.#position = {
      x,
      y,
    };
    this.#width = width;
    this.#height = height;
    this.#img = this.#stageButton;
  }

  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }
}
