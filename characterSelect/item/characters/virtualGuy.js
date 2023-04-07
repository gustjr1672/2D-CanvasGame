import Character from "./character.js";

export default class VirtualGuy extends Character {
  constructor({ x, y }) {
    super(
      { x, y },
      "virtualGuy",
      document.getElementById("colorVirtualGuy"),
      document.getElementById("blackVirtualGuy")
    );
  }
}
