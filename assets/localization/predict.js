const predictMyanmar = [
  "အိမ်သုံးမီတာခန့်မှန်း",
  "မီးသီး",
  "ပန်ကာ",
  "ကွန်ပြူတာ",
  "မိုဘိုင်းဖုန်း",
  "မီးဖိုချောင်",
  "အဲကွန်း",
  "အဝတ်လျှော်စက်",
  "ရေခဲသေတ္တာ",
  "တီဗွီ",
  "လျှပ်စစ်မီးပူ",
  "အထွေထွေအသုံးပြုမှု",
  "ရေအေးစက်",
  "တွက်ချက်ပါ",
  "ပြန်လည်သတ်မှတ်ပါ",
];
const predictEnglish = [];

const predictLang = document.querySelectorAll(".pre-lang");
const predictPlaceholder = document.querySelector(".predict-placeholder");

predictLang.forEach((lang) => predictEnglish.push(lang.innerHTML));

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < predictLang.length; i++) {
    predictLang[i].innerHTML = predictMyanmar[i];
    predictPlaceholder.placeholder = "ကြာချိန် ရက်";
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < predictLang.length; i++) {
    predictLang[i].innerHTML = predictEnglish[i];
    predictPlaceholder.placeholder = "Duration by days";
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < predictLang.length; i++) {
    predictLang[i].innerHTML = predictMyanmar[i];
    predictPlaceholder.placeholder = "ကြာချိန် ရက်";
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < predictLang.length; i++) {
    predictLang[i].innerHTML = predictEnglish[i];
    predictPlaceholder.placeholder = "Duration by days";
  }
});
