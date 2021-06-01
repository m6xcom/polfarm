const cards = document.querySelectorAll(".products__list__item");

const cardTurn = (e) => {
  if (e.target.id === "button_turn-back") {
    e.currentTarget.classList.toggle("backside");
    e.currentTarget.classList.toggle("frontside");
  }
};

[...cards].forEach((card) => card.addEventListener("click", cardTurn));
