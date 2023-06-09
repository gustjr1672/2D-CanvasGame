import Background from "../item/background.js";
import MaskDude from "../item/characters/maskDude.js";
import PinkMan from "../item/characters/pinkMan.js";
import VirtualGuy from "../item/characters/virtualGuy.js";
import In from "../item/gameTitle/IN.js";
import To from "../item/gameTitle/TO.js";
import The from "../item/gameTitle/THE.js";
import Trophy from "../item/gameTitle/TROPHY.js";
import StartBtn from "../item/button/startBtn.js";

export default class GameCanvas {
  #canvas;
  #ctx;
  #background;
  #characters;
  #gameTitle;
  #startBtn;

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

    this.#gameTitle = [
      new In({ x: 2000, y: 100 }),
      new To({ x: 2300, y: 100 }),
      new The({ x: 2500, y: 100 }),
      new Trophy({ x: 2900, y: 100 }),
    ];

    this.#startBtn = new StartBtn({ x: 650, y: 650 });

    this.#canvas.addEventListener("mousemove", this.mouseMove.bind(this));
    this.#canvas.addEventListener("click", this.mouseclick.bind(this));
  }

  mouseMove(e) {
    this.#startBtn.buttonHover(e);
  }
  mouseclick(e) {
    this.#startBtn.buttonClick(e);
  }

  update() {
    for (let character of this.#characters) {
      character.moveTo();
    }
    for (let title of this.#gameTitle) {
      title.moveTo();
    }
  }

  paint() {
    this.#background.draw(this.#ctx);
    for (let character of this.#characters) {
      character.draw(this.#ctx);
    }
    for (let title of this.#gameTitle) {
      title.draw(this.#ctx);
    }
    this.#startBtn.draw(this.#ctx);
  }

  run() {
    requestAnimationFrame(this.run.bind(this));
    this.update();
    this.paint();
  }
}
