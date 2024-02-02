const meterMyanmar = [
  "မီတာယူနစ် တွက်ချက်ခြင်း",
  "အိမ်သုံး",
  "စီးပွားရေး",
  "တွက်ချက်ပါ",
  "ကန့်သတ်နှုန်း",
  "တစ်ယူနစ် ကျပ်",
  "မြန်မာကျပ် ဖြင့် ကုန်ကျစရိတ်",
  "စုစုပေါင်း",
  "ယူနစ်",
  "ကျပ်",
];
const meterEnglish = [
  "Meter Unit Calculation",
  "Home",
  "Business",
  "Calculate",
  "Limit Range",
  "Unit per Kyat",
  "Cost in mmk",
  "Total",
  "units",
  "mmk",
];

const meterLang = document.querySelectorAll(".meter-lang");
const meterPlaceholderLang = document.querySelector("#unit");

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < meterLang.length; i++) {
    meterLang[i].innerHTML = meterMyanmar[i];
    meterPlaceholderLang.placeholder = "သင်၏မီတာယူနစ်ကိုထည့်ပါ";
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < meterLang.length; i++) {
    meterLang[i].innerHTML = meterEnglish[i];
    meterPlaceholderLang.placeholder = "Enter your meter";
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < meterLang.length; i++) {
    meterPlaceholderLang.placeholder = "သင်၏မီတာယူနစ်ကိုထည့်ပါ";
    meterLang[i].innerHTML = meterMyanmar[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < meterLang.length; i++) {
    meterLang[i].innerHTML = meterEnglish[i];
    meterPlaceholderLang.placeholder = "Enter your meter";
  }
});
