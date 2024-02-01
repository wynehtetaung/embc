const aboutMyanmar = [
  "လျှပ်စစ်မီတာဘီလ်ဂဏန်းတွက်စက်",
  "လျှပ်စစ်မီတာဘေလ်တွက်ချက်မှုဆော့ဖ်ဝဲသည် PTU (ပုသိမ်နည်းပညာတက္ကသိုလ်) IT ဒုတိယနှစ်ကျောင်းသားများ၏ပရောဂျက်ဖြစ်သည်။ ကျွန်ုပ်တို့၏ပန်းတိုင်မှာ အချိန်တိုအတွင်း အမှန်တကယ် လုပ်ငန်းခွင်၏ တကယ့်အလုပ်များကို လုပ်ဆောင်ရန်ဖြစ်သည်။ ကျွန်ုပ်တို့၏ဆော့ဖ်ဝဲသည် မီတာခန့်မှန်းခြင်းလုပ်ငန်းများကို လုပ်ဆောင်နိုင်ပြီး ကြီးမားသောတိကျသောတွက်ချက်မှုပြဿနာများကို ကိုင်တွယ်ဖြေရှင်းနိုင်ပါသည်။",
  "ကျေးဇူးအထူးတင်ရှိပါသည်",
  "နှင့်",
];
const aboutEnglish = [];

const aboutLang = document.querySelectorAll(".about-lang");
aboutLang.forEach((lang) => aboutEnglish.push(lang.innerHTML));

localStorage.setItem("lang", getLang);

if (getLang == "myanmar") {
  for (let i = 0; i < aboutLang.length; i++) {
    aboutLang[i].innerHTML = aboutMyanmar[i];
    changeMyanmarBtn();
  }
} else {
  for (let i = 0; i < aboutLang.length; i++) {
    aboutLang[i].innerHTML = aboutEnglish[i];
    changeEnglishBtn();
  }
}

myanmar.addEventListener("click", () => {
  for (let i = 0; i < aboutLang.length; i++) {
    aboutLang[i].innerHTML = aboutMyanmar[i];
  }
});
english.addEventListener("click", () => {
  for (let i = 0; i < aboutLang.length; i++) {
    aboutLang[i].innerHTML = aboutEnglish[i];
  }
});
