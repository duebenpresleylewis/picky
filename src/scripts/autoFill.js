import colorList from "../data/colors.json";

const searchInput = document.getElementById("user-input");
let suggestionsContainer = document.getElementById("suggestions");
const maxSuggestions = 5;

export function initialiseAutoFill() {
  // everytime the content in the search ""input changes"" we monitor it
  searchInput.addEventListener("input", () => {
    // everytime user changes the input, we must refresh it (kinda) to avoid appending other colors
    suggestionsContainer.replaceChildren();
    const userInput = searchInput.value.trim()?.toLowerCase();

    if (userInput === "") {
      return;
    }

    const filteredColorList = colorList.filter((color) => {
      // it is returning object, not color.name
      return color.name.toLowerCase().includes(userInput);
    });

    filteredColorList.forEach((color, index) => {
      if (index >= maxSuggestions) {
        return;
      }
      let suggestion = document.createElement("div");
      suggestion.textContent = color.name;
      suggestionsContainer.appendChild(suggestion);
    });

    console.log(suggestionsContainer);

    console.log(userInput);
    console.log(filteredColorList);
  });

//   suggestion click
  suggestionsContainer.addEventListener('click', (event) => {
    if(event.target === suggestion) {
        
    }
  });
}
