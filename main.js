// Variables
const barsBtn = document.querySelector(".bars");
const closeBtn = document.querySelector(".close");
const navOne = document.querySelector(".nav-one");

barsBtn.onclick = function () {
  navOne.style.display = "flex";
};

closeBtn.onclick = function () {
  navOne.style.display = "none";
};

// change header content when window scroll down
// Variables
const header = document.querySelector(".header");
const logoDark = document.querySelector(".logo-dark");
const logoLight = document.querySelector(".logo-light");
const ulNavOne = document.querySelectorAll(".navbar-list-one .navbar-link");
const ulNavTwo = document.querySelectorAll(".navbar-list-two .navbar-link");
const headerBtn = document.querySelector(".header-btn");

// change header content when window scroll down
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "var(--white)";
    logoLight.style.display = "none";
    logoDark.style.display = "block";
    ulNavOne.forEach(function (el) {
      el.style.color = "var(--white)";
    });
    ulNavTwo.forEach(function (el) {
      el.style.color = "var(--raisin-black)";
    });
    headerBtn.style.backgroundColor = "var(--violet-blue-crayola)";
    headerBtn.style.color = "var(--white)";
    barsBtn.style.color = "var(--charcoal)";
  } else if (window.scrollY < 100) {
    header.style.backgroundColor = "";
    logoLight.style.display = "";
    logoDark.style.display = "";
    ulNavOne.forEach(function (el) {
      el.style.color = "";
    });
    ulNavTwo.forEach(function (el) {
      el.style.color = "";
    });
    headerBtn.style.backgroundColor = "";
    headerBtn.style.color = "";
    barsBtn.style.color = "";
  }
});

// slider
let slides = document.querySelectorAll(".hero .container .hero-slider  .slide");
let slideIndex = 0;
console.log(slides);

function initSlider() {
  slides[slideIndex].classList.add("active");
}
initSlider();

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex === slides.length) {
    slideIndex = 0;
  }
  showSlide();
}
function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}
