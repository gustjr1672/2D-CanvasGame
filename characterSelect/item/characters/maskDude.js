import Character from "./character.js";

export default class MaskDude extends Character {
  constructor({ x, y }) {
    super(
      { x, y },
      "maskDude",
      document.getElementById("colorMaskDude"),
      document.getElementById("blackMaskDude")
    );
  }
}
