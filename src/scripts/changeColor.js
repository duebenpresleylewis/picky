import colorList from "../data/colors.json";
const userInput = document.getElementById("user-input");
const previewBtn = document.getElementById("preview-btn");
const mainContainer = document.getElementById("main-container");

export function initialiseChangeColor() {
  // event listeners
  previewBtn.addEventListener("click", () => {
    const userColor = userInput.value.trim();

    if (userColor.length === 0) {
      // todo: change to modal later
      alert("provide a color before submitting");
      return;
    } else {
      let colorToDisplay = "";

      colorList.forEach((color) => {
        if (color.name.toLowerCase() === userColor.toLowerCase()) {
          colorToDisplay = color.hex;
        }
      });

      if (colorToDisplay === "") {
        // todo: change to modal later
        alert("color not available");
        return;
      }
      else {
        mainContainer.style.backgroundColor = colorToDisplay;
        // console.log(colorToDisplay)
      }
    }
  });
}
// todo
// this when we work on auto complete
// userInput.addEventListener('input', () => {

// });
