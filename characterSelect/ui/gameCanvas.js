import Background from "../item/background.js";

export default class gameCanvas {
  #canvas;
  #ctx;
  #background;
  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);

    this.#canvas.width = 1520;
    this.#canvas.height = 850;

    this.#ctx = this.#canvas.getContext("2d");

    this.#background = new Background();
  }

  paint() {
    this.#background.draw(this.#ctx);
  }

  run() {
    this.paint();
  }
}
