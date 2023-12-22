const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");

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
    hamburger.classList.toggle("hamburger-sticky", window.scrollY > 0);
    logo.classList.toggle("logo-sticky", window.scrollY > 0);
})