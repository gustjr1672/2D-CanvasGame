export default class TrophySprite {
  #img;
  #width;
  #height;
  #position;
  #frame;
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
    ctx.drawImage(
      this.#img,
      64 * parseInt(this.#frame / 6),
      0,
      64,
      64,
      this.#position.x,
      this.#position.y,
      this.#width,
      this.#height
    );
    this.#frame++;

    if (this.#frame > 42) {
      this.#frame = 0;
    }
  }
}
