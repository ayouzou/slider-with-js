// Khouya ajouti cmnts pls
let i = 0;
let j = 4;
const dots = document.querySelectorAll(".dot-container button");
function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicateur(i + 1);
}
function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  indicateur(i + 1);
}
function indicateur(num) {
  dots.forEach(function (dot) {
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".dot-container button:nth-child(" + num + ")"
  ).style.backgroundColor = "#8052ec";
}
