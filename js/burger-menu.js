const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const menu = document.querySelector(".modal__nav-menu-list");

open.addEventListener("click", () => modal.classList.add("show-modal"));
close.addEventListener("click", () => modal.classList.remove("show-modal"));
menu.addEventListener("click", () => modal.classList.remove("show-modal"));

window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
