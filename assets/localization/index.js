const indexMyanmar = [
  "သင်၏",
  "မီတာအသုံးပြုမှုကို",
  "ကျွန်ုပ်တို့",
  "နှင့်အတူ တွက်ချက်ပါ",
  "မီတာယူနစ်၏ကုန်ကျစရိတ်ကို တွက်ချက်နိုင်သည် သို့မဟုတ် ယူနစ်နှင့် ကုန်ကျစရိတ်ကိုလည်း ခန့်မှန်းနိုင်သည်။",
  "တွက်ချက်ပါ",
  "စုစုပေါင်း လာရောက်ကြည့်ရှုသူများ",
];
const indexEnglish = [
  "Calculate",
  "Your",
  "meter usage",
  "with us",
  "You can calculate the cost of meter unit or you can also predict the unit and the cost.",
  "Calculate",
  "Total Visitors",
];

const indexLang = document.querySelectorAll(".index-lang");

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < indexLang.length; i++) {
    indexLang[i].innerHTML = indexMyanmar[i];
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < indexLang.length; i++) {
    indexLang[i].innerHTML = indexEnglish[i];
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < indexLang.length; i++) {
    indexLang[i].innerHTML = indexMyanmar[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < indexLang.length; i++) {
    indexLang[i].innerHTML = indexEnglish[i];
  }
});
