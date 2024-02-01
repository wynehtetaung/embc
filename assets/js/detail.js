let checkBox = document.getElementById("checking");
let defaultBox = document.getElementById("default");
let customBox = document.getElementById("custom");
const allBtn = document.querySelectorAll(".btn-gp");
const getBtn = document.querySelector(".get-btn");

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getBtn.innerHTML = e.target.innerHTML;
  });
});

function clicked() {
  if (checkBox.checked == false) {
    customBox.style.display = "none";
    defaultBox.style.display = "block";
  } else {
    customBox.style.display = "block";
    defaultBox.style.display = "none";
  }
}
