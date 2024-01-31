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
