export default class GameCanvas {
  #canvas;
  #ctx;
  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);

    this.#ctx = this.#canvas.getContext("2d");
    this.#canvas.width = 1520;
    this.#canvas.height = 850;
  }
}
