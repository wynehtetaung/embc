const resultMyanmar = [
  "စဉ်",
  "ပစ္စည်း",
  "အမျိုးအစားများ",
  "အရေအတွက်",
  "နာရီ",
  "ဝပ်",
  "စုစုပေါင်း ယူနစ်",
  "စုစုပေါင်း ဘေလ်",
  "ယူနစ်",
  "ကျပ်",
];
const resultEnglish = [];

const resultLang = document.querySelectorAll(".result-lang");
resultLang.forEach((lang) => resultEnglish.push(lang.innerHTML));

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < resultLang.length; i++) {
    resultLang[i].innerHTML = resultMyanmar[i];
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < resultLang.length; i++) {
    resultLang[i].innerHTML = resultEnglish[i];
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < resultLang.length; i++) {
    resultLang[i].innerHTML = resultMyanmar[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < resultLang.length; i++) {
    resultLang[i].innerHTML = resultEnglish[i];
  }
});
