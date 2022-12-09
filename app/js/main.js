const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
// const dropdown = document.querySelector()
const navLink = nav.querySelectorAll("a");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}
