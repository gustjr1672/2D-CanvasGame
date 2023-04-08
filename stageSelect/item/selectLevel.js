export default class SelectLevel {
  #img;
  #width;
  #height;
  #position;
  constructor() {
    this.#position = {
      x: 360,
      y: 200,
    };
    this.#width = 800;
    this.#height = 100;

    this.#img = document.getElementById("selectLevel");
  }

  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }
}
