import colorList from "../data/colors.json";
const userInput = document.getElementById("user-input");
const previewBtn = document.getElementById("preview-btn");
const colorInput = document.getElementById("color-input");

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
      if (userColor[0] === "#") {
        colorToDisplay = userColor;
      } else {
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
      }

      document.body.style.backgroundColor = colorToDisplay;

      
      // const mainContainer = document.getElementById("main-container");
      // mainContainer.style.backgroundColor = colorToDisplay;
      // console.log(colorToDisplay)
    }
  });

  colorInput.addEventListener("change", () => {
    const userColorChoice = colorInput.value.trim();

    if (!userColorChoice) {
      alert("Select a valid color");
      return;
    }

    userInput.value = userColorChoice;

    console.log(userColorChoice);
  });
}
// todo
// this when we work on auto complete
// userInput.addEventListener('input', () => {

// });
