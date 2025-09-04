// Variables
const barsBtn = document.querySelector(".bars");
const closeBtn = document.querySelector(".close");
const headerNavbar = document.querySelector(".navbar");

barsBtn.onclick = function () {
  headerNavbar.style.display = "block";
};

closeBtn.onclick = function () {
  headerNavbar.style.display = "none";
};
