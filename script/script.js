const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu__overlay");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuOverlay.classList.toggle("open");
});

const navLinks = document.querySelectorAll(".overlay__links");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuOverlay.classList.toggle("open");
  });
});
