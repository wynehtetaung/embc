let unit = document.getElementById("unit");
let meterType = document.getElementById("meter-type");
let calculate = document.getElementById("calculate");
let table = document.querySelector("table");

calculate.addEventListener("click", () => {
  if (unit.value > 0) {
    table.style.display = "flex";
    if (meterType.value == 1) {
      HomeUnit();
      unit.value = "";
    } else {
      BusinessUnit();
    }
  } else {
    unit.focus();
  }
});

let totalUnit = document.getElementById("total-unit");
let totalCost = document.getElementById("total-cost");

const rowD2 = document.getElementById("row2");
const rowD3 = document.getElementById("row3");
const rowD4 = document.getElementById("row4");
const rowD5 = document.getElementById("row5");
const rowD6 = document.getElementById("row6");
const rowD7 = document.getElementById("row7");

function displayHide() {
  rowD2.classList.add("d");
  rowD3.classList.add("d");
  rowD4.classList.add("d");
  rowD5.classList.add("d");
  rowD6.classList.add("d");
  rowD7.classList.add("d");
}

function HomeUnit() {
  let limit1 = document.getElementById("limit1");
  let unit1 = document.getElementById("unit1");
  let cost1 = document.getElementById("cost1");

  let total1 = 0,
    total2 = 0,
    total3 = 0,
    total4 = 0,
    total5 = 0,
    total6 = 0,
    total7 = 0,
    current = 0;

  if (unit.value > 30) {
    current = unit.value - 30;
    limit1.innerHTML = "1-30";
    unit1.innerHTML = 35;
    total1 = 30 * 35;
    cost1.innerHTML = 1050;

    displayHide();
    rowD2.classList.remove("d");
  } else {
    limit1.innerHTML = "1-30";
    unit1.innerHTML = 35;
    total1 = unit.value * 35;
    cost1.innerHTML = total1;
    current = 0;
    totalCost.innerHTML = total1;
    totalUnit.innerHTML = unit.value;

    displayHide();
  }

  let limit2 = document.getElementById("limit2");
  let unit2 = document.getElementById("unit2");
  let cost2 = document.getElementById("cost2");

  if (current > 20) {
    current -= 20;
    limit2.innerHTML = "31-50";
    unit2.innerHTML = 50;
    total2 = total1 + 1000;
    cost2.innerHTML = 1000;

    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
  } else {
    limit2.innerHTML = "31-50";
    unit2.innerHTML = 50;
    cost2.innerHTML = current * 50;
    total2 = total1 + current * 50;
    current = 0;
    totalCost.innerHTML = total2;
    totalUnit.innerHTML = unit.value;
  }

  let limit3 = document.getElementById("limit3");
  let unit3 = document.getElementById("unit3");
  let cost3 = document.getElementById("cost3");

  if (current > 25) {
    current -= 25;
    limit3.innerHTML = "51-75";
    unit3.innerHTML = 70;
    total3 = total2 + 1750;
    cost3.innerHTML = 1750;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
  } else {
    limit3.innerHTML = "51-75";
    unit3.innerHTML = 70;
    cost3.innerHTML = current * 70;
    total3 = total2 + current * 70;
    current = 0;
    totalCost.innerHTML = total3;
    totalUnit.innerHTML = unit.value;
  }

  let limit4 = document.getElementById("limit4");
  let unit4 = document.getElementById("unit4");
  let cost4 = document.getElementById("cost4");

  if (current > 25) {
    current -= 25;
    limit4.innerHTML = "76-100";
    unit4.innerHTML = 90;
    total4 = total3 + 2250;
    cost4.innerHTML = 2250;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
  } else {
    limit4.innerHTML = "76-100";
    unit4.innerHTML = 90;
    cost4.innerHTML = current * 90;
    total4 = total3 + current * 90;
    current = 0;
    totalCost.innerHTML = total4;
    totalUnit.innerHTML = unit.value;
  }

  let limit5 = document.getElementById("limit5");
  let unit5 = document.getElementById("unit5");
  let cost5 = document.getElementById("cost5");

  if (current > 50) {
    current -= 50;
    limit5.innerHTML = "101-150";
    unit5.innerHTML = 110;
    total5 = total4 + 5500;
    cost5.innerHTML = 5500;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
    rowD6.classList.remove("d");
  } else {
    limit5.innerHTML = "101-150";
    unit5.innerHTML = 110;
    cost5.innerHTML = current * 110;
    total5 = total4 + current * 110;
    current = 0;
    totalCost.innerHTML = total5;
    totalUnit.innerHTML = unit.value;
  }

  let limit6 = document.getElementById("limit6");
  let unit6 = document.getElementById("unit6");
  let cost6 = document.getElementById("cost6");

  if (current > 50) {
    current -= 50;
    limit6.innerHTML = "151-200";
    unit6.innerHTML = 120;
    total6 = total5 + 6000;
    cost6.innerHTML = 6000;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
    rowD6.classList.remove("d");
    rowD7.classList.remove("d");
  } else {
    limit6.innerHTML = "151-200";
    unit6.innerHTML = 120;
    cost6.innerHTML = current * 120;
    total6 = total5 + current * 120;
    current = 0;
    totalCost.innerHTML = total6;
    totalUnit.innerHTML = unit.value;
  }

  let limit7 = document.getElementById("limit7");
  let unit7 = document.getElementById("unit7");
  let cost7 = document.getElementById("cost7");

  if (current > 0) {
    limit7.innerHTML = "200 and above";
    unit7.innerHTML = 125;
    total7 = total6 + current * 125;
    cost7.innerHTML = current * 125;
    current = 0;
    totalCost.innerHTML = total7;
    totalUnit.innerHTML = unit.value;
  }
}

function BusinessUnit() {
  let limit1 = document.getElementById("limit1");
  let unit1 = document.getElementById("unit1");
  let cost1 = document.getElementById("cost1");

  let total1 = 0,
    total2 = 0,
    total3 = 0,
    total4 = 0,
    total5 = 0,
    total6 = 0,
    total7 = 0,
    current = 0;

  if (unit.value > 500) {
    current = unit.value - 500;
    limit1.innerHTML = "1-500";
    unit1.innerHTML = 125;
    total1 = 500 * 125;
    cost1.innerHTML = 17500;

    displayHide();
    rowD2.classList.remove("d");
  } else {
    limit1.innerHTML = "1-500";
    unit1.innerHTML = 125;
    total1 = unit.value * 125;
    cost1.innerHTML = total1;
    current = 0;
    totalCost.innerHTML = total1;
    totalUnit.innerHTML = unit.value;

    displayHide();
  }

  let limit2 = document.getElementById("limit2");
  let unit2 = document.getElementById("unit2");
  let cost2 = document.getElementById("cost2");

  if (current > 4500) {
    current -= 4500;
    limit2.innerHTML = "501-5000";
    unit2.innerHTML = 135;
    total2 = total1 + 17500;
    cost2.innerHTML = 17500;

    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
  } else {
    limit2.innerHTML = "501-5000";
    unit2.innerHTML = 135;
    cost2.innerHTML = current * 135;
    total2 = total1 + current * 135;
    current = 0;
    totalCost.innerHTML = total2;
    totalUnit.innerHTML = unit.value;
  }

  let limit3 = document.getElementById("limit3");
  let unit3 = document.getElementById("unit3");
  let cost3 = document.getElementById("cost3");

  if (current > 5000) {
    current -= 5000;
    limit3.innerHTML = "5001-10000 ";
    unit3.innerHTML = 145;
    total3 = total2 + 725000;
    cost3.innerHTML = 725000;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
  } else {
    limit3.innerHTML = "5001-10000";
    unit3.innerHTML = 145;
    cost3.innerHTML = current * 145;
    total3 = total2 + current * 145;
    current = 0;
    totalCost.innerHTML = total3;
    totalUnit.innerHTML = unit.value;
  }

  let limit4 = document.getElementById("limit4");
  let unit4 = document.getElementById("unit4");
  let cost4 = document.getElementById("cost4");

  if (current > 10000) {
    current -= 10000;
    limit4.innerHTML = "10001-20000";
    unit4.innerHTML = 155;
    total4 = total3 + 1550000;
    cost4.innerHTML = 1550000;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
  } else {
    limit4.innerHTML = "10001-20000";
    unit4.innerHTML = 155;
    cost4.innerHTML = current * 155;
    total4 = total3 + current * 155;
    current = 0;
    totalCost.innerHTML = total4;
    totalUnit.innerHTML = unit.value;
  }

  let limit5 = document.getElementById("limit5");
  let unit5 = document.getElementById("unit5");
  let cost5 = document.getElementById("cost5");

  if (current > 30000) {
    current -= 30000;
    limit5.innerHTML = "20001-50000";
    unit5.innerHTML = 165;
    total5 = total4 + 4950000;
    cost5.innerHTML = 4950000;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
    rowD6.classList.remove("d");
  } else {
    limit5.innerHTML = "20001-50000";
    unit5.innerHTML = 165;
    cost5.innerHTML = current * 165;
    total5 = total4 + current * 165;
    current = 0;
    totalCost.innerHTML = total5;
    totalUnit.innerHTML = unit.value;
  }

  let limit6 = document.getElementById("limit6");
  let unit6 = document.getElementById("unit6");
  let cost6 = document.getElementById("cost6");

  if (current > 50000) {
    current -= 50000;
    limit6.innerHTML = "50001-100000";
    unit6.innerHTML = 175;
    total6 = total5 + 8750000;
    cost6.innerHTML = 8750000;
    displayHide();
    rowD2.classList.remove("d");
    rowD3.classList.remove("d");
    rowD4.classList.remove("d");
    rowD5.classList.remove("d");
    rowD6.classList.remove("d");
    rowD7.classList.remove("d");
  } else {
    limit6.innerHTML = "50001-100000";
    unit6.innerHTML = 175;
    cost6.innerHTML = current * 175;
    total6 = total5 + current * 175;
    current = 0;
    totalCost.innerHTML = total6;
    totalUnit.innerHTML = unit.value;
  }

  let limit7 = document.getElementById("limit7");
  let unit7 = document.getElementById("unit7");
  let cost7 = document.getElementById("cost7");

  if (current > 0) {
    limit7.innerHTML = "100000 and above";
    unit7.innerHTML = 180;
    total7 = total6 + current * 180;
    cost7.innerHTML = current * 180;
    current = 0;
    totalCost.innerHTML = total7;
    totalUnit.innerHTML = unit.value;
  }
}
