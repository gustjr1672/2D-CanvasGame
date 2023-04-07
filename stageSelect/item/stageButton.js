export default class StageButton {
  #position;
  #width;
  #height;
  #img;
  #stageButton;
  #stageLock;
  #stageButtonHover;
  constructor({ x, y }, width, height) {
    this.#stageButton = document.getElementById("stageButton");
    this.#stageLock = document.getElementById("stageLock");
    this.#stageButtonHover = document.getElementById("stageButtonHover");

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

  buttonHover(event) {
    if (
      event.offsetX >= this.#position.x &&
      event.offsetX <= this.#position.x + this.#width &&
      event.offsetY >= this.#position.y &&
      event.offsetY <= this.#position.y + this.#height
    )
      this.#img = this.#stageButtonHover;
    else this.#img = this.#stageButton;
  }
  buttonClick(event) {
    if (
      event.offsetX >= this.#position.x &&
      event.offsetX <= this.#position.x + this.#width &&
      event.offsetY >= this.#position.y &&
      event.offsetY <= this.#position.y + this.#height
    )
      console.log("click");
  }
  lockStage() {
    this.#img = this.#stageLock;
  }
}
