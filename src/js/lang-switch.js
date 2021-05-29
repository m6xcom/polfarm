"use strict";
const uaLangSwitcher = document.querySelector(".lang_ua");
const ruLangSwitcher = document.querySelector(".lang_ru");

const switchLangToUa = (e) => {
  e.preventDefault();
  ruLangSwitcher.classList.remove("active");
  uaLangSwitcher.classList.add("active");
};

const switchLangToRu = (e) => {
  e.preventDefault();
  ruLangSwitcher.classList.add("active");
  uaLangSwitcher.classList.remove("active");
};

uaLangSwitcher.addEventListener("click", switchLangToUa);
ruLangSwitcher.addEventListener("click", switchLangToRu);
