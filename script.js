"use strict";

const signupButton = document.querySelector(".signup");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const handleModalOpen = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const handleModalClose = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

signupButton.addEventListener("click", function (e) {
  e.preventDefault();
  handleModalOpen();
});

closeModalButton.addEventListener("click", handleModalClose);
overlay.addEventListener("click", handleModalClose);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    handleModalClose();
  }
});
