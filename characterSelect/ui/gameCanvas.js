export default class gameCanvas {
  #canvas;
  #ctx;

  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);

    this.#canvas.width = 1520;
    this.#canvas.height = 850;

    this.#ctx = this.#canvas.getContext("2d");
  }
}
