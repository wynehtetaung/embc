const items = document.querySelectorAll(".item");
const markIcon = document.querySelectorAll(".mark-container");
const itemContainer = document.querySelector(".add-container");
const predictDays = document.querySelector(".predict-placeholder");
const predictCalculate = document.querySelector(".calculate-button");
const predictReset = document.querySelector(".reset-button");
const showPredict = document.querySelector(".show-predict");
const resultPredict = document.querySelector(".result");
const backResult = document.querySelector(".back-result");
const addUiData = document.querySelector(".get-ui-data");
const totalUnit = document.querySelector(".total-unit-data");
const totalBill = document.querySelector(".total-bill-data");

function itemBtn(itemName, id) {
  return `
  <div class="mark-container">
  <div class="mark mark-button">
    <div class="mark-text">${itemName}</div>
    <div class="mark-icon" title="delete" id = ${id}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M12.9703 1.65685L1.65662 12.9706M12.9703 12.9706L1.65662 1.65685"
          stroke="#484848"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
  </div>
  `;
}
const getPredictData = JSON.parse(localStorage.getItem("predictData"));

if (getPredictData) {
  if (getPredictData.length > 0) {
    getPredictData.map(
      (data) => (itemContainer.innerHTML += itemBtn(data.itemType, data.id))
    );

    predictReset.addEventListener("click", () => {
      localStorage.removeItem("predictData");
      location.reload();
    });

    // Calculation ------------------------------------------------------------////
    const defaultPlusCustom = getPredictData.map(
      (items) => Number(items.defaultValue) + Number(items.customValue)
    );
    const hourIntoQuantity = getPredictData.map(
      (items) => Number(items.hour) * Number(items.quantity)
    );
    const totalWatt = defaultPlusCustom.reduce((a, b) => a + b);
    const totalHourAndQty = hourIntoQuantity.reduce((a, b) => a + b);
    const value = (totalWatt / 1000) * totalHourAndQty;

    predictCalculate.addEventListener("click", (e) => {
      if (predictDays.value > 0) {
        const totalValue = parseInt(value * Number(predictDays.value));
        predictDays.value = "";

        let current = 0;
        let total = 0;
        let final = totalValue;
        if (final > 30) {
          current = final - 30;
          total = 30 * 35;
        } else {
          total = final * 35;
          current = 0;
        } //1 to 30
        if (current > 20) {
          current -= 20;
          total += 20 * 50;
        } else {
          total += current * 50;
          current = 0;
        } // 30 to 50
        if (current > 25) {
          current -= 25;
          total += 25 * 70;
        } else {
          total += current * 50;
          current = 0;
        } //50 to 75
        if (current > 25) {
          current -= 25;
          total += 25 * 90;
        } else {
          total += current * 90;
          current = 0;
        } // 75 to 100
        if (current > 50) {
          current -= 50;
          total += 50 * 110;
        } else {
          total += current * 110;
          current = 0;
        } //100 to 150
        if (current > 50) {
          current -= 50;
          total += 50 * 120;
        } else {
          total += current * 120;
          current = 0;
        } // 150 to 200
        if (current > 0) {
          total += current * 125;
          current = 0;
        }

        totalUnit.innerHTML = final;
        totalBill.innerHTML = total;

        // data add ui ------------------------------------//

        function itemList(no, item, type, qty, hour, watt) {
          addUiData.innerHTML += `
        <tr >
        <td>${no}</td>
        <td>${item}</td>
        <td>${type}</td>
        <td>${qty}</td>
        <td>${hour}</td>
        <td>${watt}</td>
        </tr> 
        `;
        }
        getPredictData.map((items) =>
          itemList(
            items.id,
            items.itemName,
            items.itemType,
            items.quantity,
            items.hour,
            Number(items.customValue) + Number(items.defaultValue)
          )
        );

        showPredict.classList.add("d-none");
        resultPredict.classList.remove("d-none");
      } else {
        alert("Enter Your Days");
        predictDays.focus();
        return false;
      }
    });
  }
}

function removeItem(id) {
  const getFilter = getPredictData.filter((item) => item.id !== id);
  localStorage.removeItem("predictData");
  localStorage.setItem("predictData", JSON.stringify(getFilter));
  location.reload();
}

const removeIcon = document.querySelectorAll(".mark-icon");
removeIcon.forEach((items) =>
  items.addEventListener("click", () => {
    removeItem(Number(items.id));
  })
);

items.forEach((item) =>
  item.addEventListener("click", (e) => {
    switch (e.target.classList[2]) {
      case "1":
        location.href = "/assets/src/detail/light-detail.html";
        break;

      case "2":
        location.href = "/assets/src/detail/fan-detail.html";
        break;
      case "3":
        location.href = "/assets/src/detail/computer-detail.html";
        break;
      case "4":
        location.href = "/assets/src/detail/mobile-detail.html";
        break;
      case "5":
        location.href = "/assets/src/detail/kitchen-detail.html";
        break;
      case "6":
        location.href = "/assets/src/detail/air-con-detail.html";

        break;
      case "7":
        location.href = "/assets/src/detail/w-mach-detail.html";

        break;
      case "8":
        location.href = "/assets/src/detail/refri-detail.html";

        break;
      case "9":
        location.href = "/assets/src/detail/tv-detail.html";

        break;
      case "10":
        location.href = "/assets/src/detail/E-iron-detail.html";

        break;

      case "11":
        location.href = "/assets/src/detail/general-detail.html";

        break;

      case "12":
        location.href = "/assets/src/detail/W-con-detail.html";

        break;
    }
  })
);

backResult.addEventListener("click", () => {
  showPredict.classList.remove("d-none");
  resultPredict.classList.add("d-none");
});
