import Background from "../item/background.js";
import MaskDude from "../item/characters/maskDude.js";
import PinkMan from "../item/characters/pinkMan.js";
import VirtualGuy from "../item/characters/virtualGuy.js";

export default class GameCanvas {
  #canvas;
  #ctx;
  #background;
  #characters;

  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);

    this.#ctx = this.#canvas.getContext("2d");
    this.#canvas.width = 1520;
    this.#canvas.height = 850;

    this.#background = new Background();

    this.#characters = [
      new MaskDude({ x: 100, y: 400 }, 500),
      new PinkMan({ x: 1250, y: 550 }, 850),
      new VirtualGuy({ x: 1350, y: 300 }, 950),
    ];
  }

  update() {
    for (let character of this.#characters) {
      character.moveTo();
    }
  }

  paint() {
    this.#background.draw(this.#ctx);
    for (let character of this.#characters) {
      character.draw(this.#ctx);
    }
  }

  run() {
    requestAnimationFrame(this.run.bind(this));
    this.update();
    this.paint();
  }
}
