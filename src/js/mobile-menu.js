const mobileMenuButton = document.querySelector(".mobile-menu__button");
const mobileMenuModal = document.querySelector(".mobile-menu_modal");

const toggleModal = () => {
  mobileMenuButton.classList.toggle("active");
  mobileMenuModal.classList.toggle("active");
};

mobileMenuButton.addEventListener("click", toggleModal);
