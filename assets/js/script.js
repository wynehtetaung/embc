const myanmar = document.querySelector(".myan");
const english = document.querySelector(".eng");
const viewCount = document.querySelector(".visit-count");
function changeMyanmarBtn() {
  myanmar.classList.remove("show");
  myanmar.classList.add("hide");
  english.classList.remove("hide");
  english.classList.add("show");
}
function changeEnglishBtn() {
  english.classList.remove("show");
  english.classList.add("hide");
  myanmar.classList.remove("hide");
  myanmar.classList.add("show");
}

myanmar.addEventListener("click", () => {
  localStorage.setItem("lang", "myanmar");
  changeMyanmarBtn();
});
english.addEventListener("click", () => {
  localStorage.setItem("lang", "english");
  changeEnglishBtn();
});

var icon = document.getElementById("icon");
let theme = String(localStorage.getItem("theme")).toLowerCase();
localStorage.setItem("theme", theme);
if (theme == "dark") {
  document.body.classList.toggle("dark-theme");
  icon.onclick;
} else {
  document.body.classList.remove("dark-theme");

  icon.onclick;
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    icon.src = "/assets/images/png/dark_mode.png";
    obj.src = "/assets/images/png/OBJECTS2.png";
  } else {
    localStorage.setItem("theme", "light");
    icon.src = "/assets/images/png/light_mode.png";
    obj.src = "/assets/images/png/OBJECTS.png";
  }
};

function viewCounter(type) {
  fetch(`https://embc-view-count.glitch.me/api?type=${type}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      viewCount.textContent = data.pageView;
    });
}
if (sessionStorage.getItem("visits") === null) {
  viewCounter("new-count");
  sessionStorage.setItem("visits", "view-count");
} else {
  viewCounter("view-count");
}
