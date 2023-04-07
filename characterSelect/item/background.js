export default class Background {
  #width;
  #height;
  #img;

  constructor() {
    this.#width = 1520;
    this.#height = 850;
    this.#img = document.getElementById("background");
  }

  draw(ctx) {
    ctx.drawImage(this.#img, 0, 0, this.#width, this.#height);
  }
}
