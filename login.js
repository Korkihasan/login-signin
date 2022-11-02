function signup() {
  document.getElementById("signdisplay").style.display = "flex";
  document.getElementById("logindisplay").style.display = "flex";

  const element = document.querySelector(".signdisplay");
  element.classList.add("animate__animated", "animate__flipInY");
}

function login() {
  document.getElementById("signdisplay").style.display = "flex";
  document.getElementById("logindisplay").style.display = "flex";

  const element1 = document.querySelector(".logindisplay");
  element1.classList.add("animate__animated", "animate__flipInY");
}
