import colorList from "../data/colors.json";
import { showModal } from "../scripts/modal.js";

const userInput = document.getElementById("user-input");
const previewBtn = document.getElementById("preview-btn");
const colorInput = document.getElementById("color-input");

export function initialiseChangeColor() {
  if (!previewBtn || !userInput || !colorInput) return;

  previewBtn.addEventListener("click", () => {
    const userColor = userInput.value.trim();

    if (userColor.length === 0) {
      showModal("white", "#7d7d7d", "Oops! You need to choose a color before previewing.");
      return;
    }

    let colorToDisplay = "";
    const hexRegex = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

    if (userColor[0] === "#") {
      if (!hexRegex.test(userColor)) {
        showModal("white", "#7d7d7d", "Invalid hex color format.");
        return;
      }
      colorToDisplay = userColor;
    } else {
      const matched = colorList.find((c) => c.name.toLowerCase() === userColor.toLowerCase());
      if (matched) {
        colorToDisplay = matched.hex;
      } else {
        showModal("white", "#7d7d7d", "Selected color not found in our palette. Pick another to preview.");
        return;
      }
    }

    document.body.style.backgroundColor = colorToDisplay;
  });

  colorInput.addEventListener("change", () => {
    const userColorChoice = colorInput.value?.trim();

    if (!userColorChoice) {
      alert("Select a valid color");
      return;
    }

    userInput.value = userColorChoice;
  });
}
// todo
// this when we work on auto complete
// userInput.addEventListener('input', () => {

// });
