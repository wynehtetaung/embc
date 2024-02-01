const infoMyanmar = [
  "အိမ်မီတာယူနစ်",
  "ကန့်သတ်နှုန်း",
  "တစ်ယူနစ် ကျပ်",
  "စီးပွားရေးမီတာယူနစ်",
  "ကန့်သတ်နှုန်း",
  "တစ်ယူနစ် ကျပ်",
  "အိမ်သုံးမီတာသုံးပစ္စည်းများ",
  "စဉ်",
  "ပစ္စည်း",
  "အမျိုးအစားများ",
  "ဝပ်",
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
];
const infoEnglish = [];

const infoLang = document.querySelectorAll(".info-lang");
infoLang.forEach((lang) => infoEnglish.push(lang.innerHTML));

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < infoLang.length; i++) {
    infoLang[i].innerHTML = infoMyanmar[i];
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < infoLang.length; i++) {
    infoLang[i].innerHTML = infoEnglish[i];
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < infoLang.length; i++) {
    infoLang[i].innerHTML = infoMyanmar[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < infoLang.length; i++) {
    infoLang[i].innerHTML = infoEnglish[i];
  }
});
