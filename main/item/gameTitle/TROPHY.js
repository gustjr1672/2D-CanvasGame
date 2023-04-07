import Text from "./text.js";

export default class Trophy extends Text {
  constructor({ x, y }) {
    super({ x, y }, 430, 150, 920, 18, document.getElementById("TROPHY"));
  }
}
