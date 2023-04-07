import Text from "./text.js";

export default class The extends Text {
  constructor({ x, y }) {
    super({ x, y }, 230, 150, 650, 20, document.getElementById("THE"));
  }
}
