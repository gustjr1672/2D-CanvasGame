import Text from "./text.js";

export default class To extends Text {
  constructor({ x, y }) {
    super({ x, y }, 180, 150, 410, 22, document.getElementById("TO"));
  }
}
