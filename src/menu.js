document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("-translate-y-full"); // Pull menu down into view
    menu.classList.toggle("pointer-events-none"); // Stop cursor events when menu active
    menu.classList.toggle("remove-scrolling"); // Remove scroll when menu active
  });
});

function removeScrolling() {
  document.body.classList.add("remove-scrolling");
}
