let elementsToStyle = document.querySelectorAll(".theme");
const htmlBlock = document.getElementById("pre-HTML");
const cssBlock = document.getElementById("pre-CSS");

// function savePreferences() {
//   // Enregistrer les choix dans le localStorage
//   localStorage.setItem("themeDark");
// }

document.getElementById("dark").addEventListener("click", function () {
  Dark();
});

function Dark() {
  elementsToStyle.forEach(function (element) {
    element.classList.add("dark");
  });
  // savePreferences();
}
document.getElementById("light").addEventListener("click", function () {
  Light();
});

function Light() {
  elementsToStyle.forEach(function (element) {
    element.classList.remove("dark");
  });
  // savePreferences();
}
document.getElementById("HTML").addEventListener("click", function () {
  HTML();
});

function HTML() {
  htmlBlock.classList.remove("d-none");
  cssBlock.classList.add("d-none");

  // savePreferences();
}
document.getElementById("CSS").addEventListener("click", function () {
  CSS();
});

function CSS() {
  htmlBlock.classList.add("d-none");
  cssBlock.classList.remove("d-none");

  // savePreferences();
}
