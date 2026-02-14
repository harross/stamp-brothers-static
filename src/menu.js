document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("-translate-y-full");
    menu.classList.toggle("pointer-events-none");
  });
});
