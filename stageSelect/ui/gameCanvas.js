import Background from "../item/background.js";
import SelectLevel from "../item/selectLevel.js";

export default class GameCanvas {
  #canvas;
  #ctx;
  #background;
  #selectLevel;
  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#ctx = this.#canvas.getContext("2d");
    this.#canvas.width = 1520;
    this.#canvas.height = 850;
    this.#background = new Background();
    this.#selectLevel = new SelectLevel();
  }

  paint() {
    this.#background.draw(this.#ctx);
    this.#selectLevel.draw(this.#ctx);
  }

  run() {
    this.paint();
  }
}
