// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const gallery = document.querySelectorAll(".gallery__img");

gallery.forEach((img) => {
  img.addEventListener("click", () => {
    if (img.classList.contains("zoomed")) {
      img.classList.remove("zoomed");
      return;
    }
    img.classList.add("zoomed");
  });
  img.addEventListener("mouseleave", () => {
    if (img.classList.contains("zoomed")) {
      img.classList.remove("zoomed");
    }
  });
});