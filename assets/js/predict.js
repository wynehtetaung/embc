const items = document.querySelectorAll(".item");
items.forEach((item) =>
  item.addEventListener("click", (e) => {
    switch (e.target.classList[2]) {
      case "1":
        location.href = "/assets/src/light-detail.html";
        break;

      case "2":
        console.log("this is 2");
        break;
      case "3":
        console.log("this is 3");
        break;
      case "4":
        console.log("this is 4");
        break;
      case "5":
        console.log("this is 5");
        break;
      case "6":
        console.log("this is 6");
        break;
      case "7":
        console.log("this is 7");
        break;
      case "8":
        console.log("this is 8");
        break;
      case "9":
        console.log("this is 9");
        break;
      case "10":
        console.log("this is 10");
        break;

      case "11":
        console.log("this is 11");
        break;

      case "12":
        console.log("this is 12");
        break;
    }
  })
);
