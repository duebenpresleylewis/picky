import colorList from "../data/colors.json";

const maxSuggestions = 5;

function debounce(fn, wait = 150) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

export function initialiseAutoFill() {
  const searchInput = document.getElementById("user-input");
  const suggestionsContainer = document.getElementById("suggestions");

  if (!searchInput || !suggestionsContainer) return;

  // helper: select a suggestion (shared for clicks and keyboard)
  const selectSuggestion = (el) => {
    if (!el) return;
    searchInput.value = el.dataset.color;
    suggestionsContainer.classList.remove("active");
    suggestionsContainer.replaceChildren();
    searchInput.focus();
    searchInput.dispatchEvent(new Event("input", { bubbles: true }));
  };

  const focusSuggestionAt = (list, idx) => {
    if (!list || !list.length) return;
    idx = (idx + list.length) % list.length;
    list.forEach((s) => s.classList.remove("focused"));
    const el = list[idx];
    el.classList.add("focused");
    el.focus();
  };

  const renderSuggestions = (userInput) => {
    suggestionsContainer.replaceChildren();
    suggestionsContainer.classList.remove("active");
    suggestionsContainer.setAttribute("aria-expanded", "false");

    if (!userInput) return;

    const filteredColorList = colorList.filter((color) =>
      color.name.toLowerCase().includes(userInput)
    );

    filteredColorList.slice(0, maxSuggestions).forEach((color) => {
      const indexToHighlight = color.name.toLowerCase().indexOf(userInput);
      if (indexToHighlight === -1) return;

      const startPortion = color.name.slice(0, indexToHighlight);
      const portionToHighlight = color.name.slice(
        indexToHighlight,
        indexToHighlight + userInput.length
      );
      const endPortion = color.name.slice(indexToHighlight + userInput.length);

      const suggestion = document.createElement("div");
      suggestion.innerHTML = startPortion + "<strong>" + portionToHighlight + "</strong>" + endPortion;
      suggestion.className = "suggestion";
      suggestion.setAttribute("role", "option");
      suggestion.tabIndex = 0;
      suggestion.addEventListener("click", () => selectSuggestion(suggestion));
      suggestion.addEventListener("keydown", (e) => {
        if (e.key === "Enter") selectSuggestion(suggestion);
      });

      suggestionsContainer.appendChild(suggestion);
    });

    if (suggestionsContainer.children.length > 0) {
      suggestionsContainer.classList.add("active");
      suggestionsContainer.setAttribute("aria-expanded", "true");
    }
  };

  searchInput.addEventListener(
    "input",
    debounce(() => {
      const userInput = searchInput.value.trim().toLowerCase();
      renderSuggestions(userInput);
    }, 120)
  );

  // keyboard navigation for suggestions
  searchInput.addEventListener("keydown", (e) => {
    const list = suggestionsContainer.querySelectorAll(".suggestion");
    if (!list.length) return;

    const focused = suggestionsContainer.querySelector(".focused");
    let idx = Array.prototype.indexOf.call(list, focused);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      idx = idx + 1;
      focusSuggestionAt(list, idx);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      idx = idx - 1;
      focusSuggestionAt(list, idx);
    } else if (e.key === "Enter") {
      if (document.activeElement && document.activeElement.classList.contains("suggestion")) {
        e.preventDefault();
        selectSuggestion(document.activeElement);
      }
    } else if (e.key === "Escape") {
      suggestionsContainer.replaceChildren();
      suggestionsContainer.classList.remove("active");
      suggestionsContainer.setAttribute("aria-expanded", "false");
      searchInput.focus();
    }
  });

  // click outside suggestions to close
  document.addEventListener("click", (ev) => {
    if (!suggestionsContainer.contains(ev.target) && ev.target !== searchInput) {
      suggestionsContainer.replaceChildren();
      suggestionsContainer.classList.remove("active");
      suggestionsContainer.setAttribute("aria-expanded", "false");
    }
  });
}
