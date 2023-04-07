export default class Text {
  #position;
  #width;
  #height;
  #img;
  constructor({ x, y }) {
    this.#position = {
      x,
      y,
    };
    this.#width = 700;
    this.#height = 200;
    this.#img = document.getElementById("CHARATERSELECT");
  }

  draw(ctx) {
    let x = this.#position.x;
    let y = this.#position.y;
    let w = this.#width;
    let h = this.#height;
    ctx.drawImage(this.#img, x, y, w, h);
  }
}
