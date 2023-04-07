import Character from "./character.js";

export default class VirtualGuy extends Character {
  #img;

  constructor({ x, y }, positionTomove) {
    super(
      { x, y },
      positionTomove,
      document.getElementById("virtualGuyRightStand"),
      document.getElementById("virtualGuyLeftStand"),
      document.getElementById("virtualGuyRightRun"),
      document.getElementById("virtualGuyLeftRun")
    );
  }
}
