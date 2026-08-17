// setting the color and message of the modal using js
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

export function showModal(bgColor = "white", textColor = "gray", message = "Error") {
    const modalMessage = document.getElementById('modalMessage');
    const modalContent = document.querySelector('.modal-content');

    if(!modalMessage) {
        return ;
    }

    modalMessage.textContent = message;
    modalMessage.style.color = textColor;

    modalContent.style.backgroundColor = bgColor;
    modalContent.style.boxShadow = "0px 0px 15px #a60808";
    
    modal.style.display = "block";
}

export function initialiseModal() {
  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
        // this works because of event bubbling, when event bubbling happens and one of the element is modal(which means display was block) then we just close it using display none
      modal.style.display = "none";
    }
  });
}
