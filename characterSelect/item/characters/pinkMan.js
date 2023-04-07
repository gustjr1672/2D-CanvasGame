import Character from "./character.js";

export default class PinkMan extends Character {
  constructor({ x, y }) {
    super(
      { x, y },
      "virtualGuy",
      document.getElementById("colorPinkMan"),
      document.getElementById("blackPinkMan")
    );
  }
}
