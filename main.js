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
