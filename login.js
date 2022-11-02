const element = document.querySelector(".signdisplay");
const element1 = document.querySelector(".logindisplay");
var remove = document.getElementById("signdisplay");
var remove1 = document.getElementById("logindisplay");

function signup() {
  document.getElementById("signdisplay").style.display = "flex";
  document.getElementById("logindisplay").style.display = "none";

  element.classList.add("animate__animated");
  element.classList.add("animate__flipInY");
  remove1.classList.remove("animate__animated");
  remove1.classList.remove("animate__flipInY");
}

function login() {
  document.getElementById("signdisplay").style.display = "none";
  document.getElementById("logindisplay").style.display = "flex";

  element1.classList.add("animate__animated");
  element1.classList.add("animate__flipInY");
  element1.classList.add("animate__slow");

  remove.classList.remove("animate__animated");
  remove.classList.remove("animate__flipInY");
  remove.classList.remove("animate__slow");
}
