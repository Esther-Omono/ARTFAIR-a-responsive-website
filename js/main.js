const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");

// Header Toggle Menu
hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
    hamburger.classList.toggle("hamburger--open");
})

nav.addEventListener("click", () => {
    nav.classList.remove("nav--open");
    hamburger.classList.remove("hamburger--open");
})

// Sticky Nav
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})