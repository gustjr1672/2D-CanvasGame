import Character from "./character.js";

export default class MaskDude extends Character {
  #img;

  constructor({ x, y }, positionTomove) {
    super(
      { x, y },
      positionTomove,
      document.getElementById("maskDudeRightStand"),
      document.getElementById("maskDudeLeftStand"),
      document.getElementById("maskDudeRightRun"),
      document.getElementById("maskDudeLeftRun")
    );
  }
}
