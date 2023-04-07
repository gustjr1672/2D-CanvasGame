import Character from "./character.js";

export default class MaskDude extends Character {
  constructor({ x, y }) {
    super(
      { x, y },
      "virtualGuy",
      document.getElementById("colorMaskDude"),
      document.getElementById("blackMaskDude")
    );
  }
}
