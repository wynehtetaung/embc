let checkBox = document.getElementById("checking");
let defaultBox = document.getElementById("default");
let customBox = document.getElementById("custom");
const defaultWatt = document.querySelector(".default-watt");
const customWatt = document.querySelector(".custom-watt");
const allBtn = document.querySelectorAll(".btn-gp");
const itemName = document.querySelector(".item-name");
const getBtn = document.querySelector(".get-btn");
const quantity = document.querySelector(".quantity");
const hour = document.querySelector(".hour");
const defaultValue = document.querySelector(".default-value");
const customValue = document.querySelector(".custom-value");
const addCard = document.querySelector(".add");
const getData = JSON.parse(localStorage.getItem("predictData"));
let cardData = [];

if (getData) {
  cardData = [...getData];
}

allBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getBtn.innerHTML = e.target.innerHTML;
  });
});

function clicked() {
  if (checkBox.checked == false) {
    customBox.style.display = "none";
    customWatt.style.display = "none";
    defaultBox.style.display = "block";
    defaultWatt.style.display = "block";
  } else {
    customBox.style.display = "block";
    customWatt.style.display = "block";
    defaultBox.style.display = "none";
    defaultWatt.style.display = "none";
  }
}

addCard.addEventListener("click", () => {
  let obj = {
    id: cardData.length + 1,
    itemName: itemName.textContent,
    itemType: getBtn.innerHTML,
    quantity: quantity.value,
    hour: hour.value,
    defaultValue: customValue.value ? 0 : defaultValue.value,
    customValue: customValue.value ? customValue.value : 0,
  };
  cardData.push(obj);
  localStorage.setItem("predictData", JSON.stringify(cardData));
  location.href = "/assets/src/predict.html";
});
