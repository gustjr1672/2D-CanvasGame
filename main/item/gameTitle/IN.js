import Text from "./text.js";

export default class In extends Text {
  constructor({ x, y }) {
    super({ x, y }, 180, 150, 260, 32, document.getElementById("IN"));
  }
}
