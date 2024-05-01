const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const logo = document.querySelector(".logo");

const sliderContainer = document.getElementById('sliderContainer');
let currentGroup = 0;
const totalGroups = document.querySelectorAll('.slider__group').length;

const currentYear = new Date().getFullYear();

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

// Creating a Mixer
var mixer = mixitup(".mixitcontainer");

// Slider
function goToGroup(index) {
    const translateValue = `translateX(-${index * (100 / totalGroups)}%)`;
    sliderContainer.style.transform = translateValue;
    currentGroup = index;
}

// Automatically change slide every 3 seconds
function autoSlide() {
    currentGroup = (currentGroup + 1) % totalGroups;
    goToGroup(currentGroup);
}
setInterval(autoSlide, 3000);

// Footer - Copyright section
document.getElementById('currentYear').textContent = currentYear;

// Go to Top
window.addEventListener('scroll', function() {
    var scrolled = window.scrollY || document.documentElement.scrollTop;
    var goTopButton = document.getElementById('goTop');

    if (scrolled > 300) {
      goTopButton.style.display = 'block';
    } else {
      goTopButton.style.display = 'none';
    }
});

document.getElementById('goTop').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});
