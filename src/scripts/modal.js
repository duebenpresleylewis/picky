// setting the color and message of the modal using js

export function showModal(bgColor = "white", textColor = "gray", message = "Error") {
  const modal = document.getElementById("myModal");
  const modalMessage = document.getElementById("modalMessage");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !modalMessage || !modalContent) return;

  // save previously focused element to restore later
  try {
    window._previousActiveElement = document.activeElement;
  } catch (e) {}

  modalMessage.textContent = message;
  modalMessage.style.color = textColor;

  modalContent.style.backgroundColor = bgColor;
  modalContent.style.boxShadow = "0px 0px 15px #a60808";

  modal.style.display = "block";

  if (closeBtn) closeBtn.focus();
}

export function initialiseModal() {
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !closeBtn) return;

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    if (window._previousActiveElement && typeof window._previousActiveElement.focus === "function") {
      window._previousActiveElement.focus();
    }
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
        // this works because of event bubbling, when event bubbling happens and one of the element is modal(which means display was block) then we just close it using display none
      modal.style.display = "none";
      if (window._previousActiveElement && typeof window._previousActiveElement.focus === "function") {
        window._previousActiveElement.focus();
      }
    }
  });
}
