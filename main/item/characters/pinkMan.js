import Character from "./character.js";

export default class PinkMan extends Character {
  #img;

  constructor({ x, y }, positionTomove) {
    super(
      { x, y },
      positionTomove,
      document.getElementById("pinkManRightStand"),
      document.getElementById("pinkManLeftStand"),
      document.getElementById("pinkManRightRun"),
      document.getElementById("pinkManLeftRun")
    );
  }
}
