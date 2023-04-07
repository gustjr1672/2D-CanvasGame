export default class StartBtn {
  #position;
  #width;
  #height;
  #normalImg;
  #hoverImg;
  #img;

  constructor({ x, y }) {
    this.#normalImg = document.getElementById("start");
    this.#hoverImg = document.getElementById("startHover");

    this.#position = {
      x,
      y,
    };

    this.#width = 220;
    this.#height = 90;
    this.#img = this.#normalImg;
  }

  buttonHover(e) {
    if (
      e.offsetX >= this.#position.x &&
      e.offsetX <= this.#position.x + this.#width &&
      e.offsetY >= this.#position.y &&
      e.offsetY <= this.#position.y + this.#height
    ) {
      this.#img = this.#hoverImg;
    } else this.#img = this.#normalImg;
  }

  buttonClick(e) {
    if (
      e.offsetX >= this.#position.x &&
      e.offsetX <= this.#position.x + this.#width &&
      e.offsetY >= this.#position.y &&
      e.offsetY <= this.#position.y + this.#height
    ) {
      window.location.href = "../playerSeclect/app.html";
    }
  }

  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }
}
