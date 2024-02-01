let checkBox = document.getElementById("checking");
let defaultBox = document.getElementById("default");
let customBox = document.getElementById("custom");

function clicked() {
  if (checkBox.checked == false) {
    customBox.style.display = "none";
    defaultBox.style.display = "block";
  } else {
    customBox.style.display = "block";
    defaultBox.style.display = "none";
  }
}
