const items = document.querySelectorAll(".item");
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
        location.href = "/assets/src/detail/W-mach-detail.html";

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
