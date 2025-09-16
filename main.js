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

// add active class to icons
let aboutBtn = document.querySelectorAll(
  ".about .container .about-items .item button"
);
let aboutIcons = document.querySelectorAll(
  ".about .container .about-items .item button i"
);
let aboutP = document.querySelectorAll(
  ".about .container .about-items .item p"
);
let aboutSpans = document.querySelectorAll(
  ".about .container .about-items .item button span"
);
console.log(aboutSpans);

function addClassActive() {
  aboutBtn.forEach((btn, index) => {
    btn.onclick = () => {
      if (aboutP[index].classList.contains("active")) {
        aboutP[index].classList.remove("active");
        aboutIcons[index].classList.remove("active");
        aboutSpans[index].classList.remove("clicked");
      } else {
        aboutIcons.forEach((ico) => {
          ico.classList.remove("active");
          aboutIcons[index].classList.add("active");
        });
        aboutP.forEach((p) => {
          p.classList.remove("active");
          aboutP[index].classList.add("active");
        });
        aboutSpans.forEach((spa) => {
          spa.classList.remove("clicked");
          aboutSpans[index].classList.add("clicked");
        });
      }
    };
  });
}
addClassActive();
