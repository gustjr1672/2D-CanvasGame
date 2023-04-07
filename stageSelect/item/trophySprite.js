export default class TrophySprite {
  #img;
  #width;
  #height;
  #position;
  constructor({ x, y }, width, height) {
    this.#position = {
      x,
      y,
    };
    this.#width = width;
    this.#height = height;
    this.#frame = 0;
    this.#img = document.getElementById("trophySprite");
  }
  draw(ctx) {
    ctx.drawImage(this.#img, this.#position.x, this.#position.y, this.#width, this.#height);
  }
}
