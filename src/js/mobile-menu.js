"use strict";

const mobileMenuButton = document.querySelector(".mobile-menu__button");

mobileMenuButton.addEventListener("click", () => {
  mobileMenuButton.classList.add("active");
});

mobileMenuButton.addEventListener("blur", () => {
  mobileMenuButton.classList.remove("active");
});
