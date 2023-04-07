import Background from "../item/background.js";
import SelectLevel from "../item/selectLevel.js";
import TrophySprite from "../item/trophySprite.js";
import StageButton from "../item/stageButton.js";

export default class GameCanvas {
  #canvas;
  #ctx;
  #background;
  #selectLevel;
  #trophys;
  #stageButtons;
  constructor() {
    this.#canvas = document.createElement("canvas");
    document.body.append(this.#canvas);
    this.#ctx = this.#canvas.getContext("2d");
    this.#canvas.width = 1520;
    this.#canvas.height = 850;
    this.#background = new Background();
    this.#selectLevel = new SelectLevel();
    this.#trophys = [
      new TrophySprite({ x: 80, y: 120 }, 200, 200),
      new TrophySprite({ x: 1230, y: 120 }, 200, 200),
    ];
    this.#stageButtons = [];
    for (let i = 0; i < 7; i++) {
      this.#stageButtons[i] = new StageButton({ x: 100 + 200 * i, y: 500 }, 130, 130);
    }
  }

  paint() {
    this.#background.draw(this.#ctx);
    this.#selectLevel.draw(this.#ctx);
    this.#trophys[0].draw(this.#ctx);
    this.#trophys[1].draw(this.#ctx);
    for (let i in this.#stageButtons) {
      if (i == 0) {
        this.#stageButtons[i].draw(this.#ctx);
      } else {
        this.#stageButtons[i].lockStage();
        this.#stageButtons[i].draw(this.#ctx);
      }
    }
  }

  run() {
    requestAnimationFrame(this.run.bind(this));
    this.paint();
  }
}
