export default class Character {
  #position;
  #width;
  #height;
  #name;
  #img;
  #currentImg;
  #frame;

  constructor({ x, y }, name, colorRightStand, blackRightStand) {
    this.#position = {
      x,
      y,
    };

    this.#width = 100;
    this.#height = 100;

    this.#name = name;

    this.#frame = 0;

    this.#img = {
      color: colorRightStand,
      black: blackRightStand,
    };

    this.#currentImg = this.#img.black;
  }
  Hover(e) {
    if (
      e.offsetX >= this.#position.x &&
      e.offsetX <= this.#position.x + this.#width &&
      e.offsetY >= this.#position.y &&
      e.offsetY <= this.#position.y + this.#height
    ) {
      this.#currentImg = this.#img.color;
    } else this.#currentImg = this.#img.black;
  }

  click(e) {
    if (
      e.offsetX >= this.#position.x &&
      e.offsetX <= this.#position.x + this.#width &&
      e.offsetY >= this.#position.y &&
      e.offsetY <= this.#position.y + this.#height
    ) {
      this.#currentImg = this.#img.color;
      const characterName = this.#name;
      localStorage.setItem("characterName", characterName);
      window.location.href = "/stageSelect/app.html";
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.#currentImg,
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

    if (this.#frame > 32) {
      this.#frame = 0;
    }
  }
}
