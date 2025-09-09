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

console.log(headerBtn);
