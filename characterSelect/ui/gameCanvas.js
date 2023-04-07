import Background from "../item/background.js";
import MaskDude from "../item/characters/maskDude.js";
import PinkMan from "../item/characters/pinkMan.js";
import VirtualGuy from "../item/characters/virtualGuy.js";

export default class gameCanvas {
  #canvas;
  #ctx;
  #background;
  #characters;

  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);

    this.#canvas.width = 1520;
    this.#canvas.height = 850;

    this.#ctx = this.#canvas.getContext("2d");

    this.#background = new Background();

    this.#characters = [
      new MaskDude({ x: 1140, y: 380 }),
      new PinkMan({ x: 740, y: 380 }),
      new VirtualGuy({ x: 340, y: 380 }),
    ];
  }

  paint() {
    this.#background.draw(this.#ctx);

    for (let character of this.#characters) {
      character.draw(this.#ctx);
    }
  }

  run() {
    requestAnimationFrame(this.run.bind(this));
    this.paint();
  }
}
