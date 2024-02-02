const englishText = [
  "HOME",
  "PREDICT",
  "METER",
  "ITEM&UNITS",
  "ABOUT",
  "Myan",
  "Eng",
];
const myanmarText = [
  "ပင်မ",
  "ခန့်မှန်း",
  "မီတာ",
  "ပစ္စည်းနှင့်ယူနစ်များ",
  "အကြောင်း",
  "မြန်မာ",
  "အင်္ဂလိပ်",
];

const navLang = document.querySelectorAll(".nav-lang");

let getLang = String(localStorage.getItem("lang")).toLowerCase();
localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < navLang.length; i++) {
    navLang[i].innerHTML = myanmarText[i];
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < navLang.length; i++) {
    navLang[i].innerHTML = englishText[i];
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < navLang.length; i++) {
    navLang[i].innerHTML = myanmarText[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < navLang.length; i++) {
    navLang[i].innerHTML = englishText[i];
  }
});
