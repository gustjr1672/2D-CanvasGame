export default class Background {
  #img;
  #width;
  #height;
  #frame;
  #position;
  constructor() {
    this.#position = {
      x: 0,
      y: 0,
    };
    this.#width = 1520;
    this.#height = 850;

    this.#img = document.getElementById("background");
  }

  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }
}
