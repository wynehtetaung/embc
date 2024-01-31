const myanmar = document.querySelector(".myan");
const english = document.querySelector(".eng");

myanmar.addEventListener("click", () => {
  localStorage.setItem("lang", "myanmar");
  myanmar.classList.remove("show");
  myanmar.classList.add("hide");
  english.classList.remove("hide");
  english.classList.add("show");
});
english.addEventListener("click", () => {
  localStorage.setItem("lang", "english");
  english.classList.remove("show");
  english.classList.add("hide");
  myanmar.classList.remove("hide");
  myanmar.classList.add("show");
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
