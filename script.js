
const questions = [
  {
    category: "ICHKI DUNYO",
    icon: "◈",
    title: "Agar hech kim seni hukm qilmasa...",
    text: "Qanday hayot kechirgan bo‘larding?",
    options: [
      { text: "Dunyoni kezib, yangi narsalarni kashf qilardim.", type: "creative" },
      { text: "Katta maqsadlarim sari tinimsiz harakat qilardim.", type: "leader" },
      { text: "Tinch, mazmunli va osoyishta hayot tanlardim.", type: "calm" },
      { text: "Hech kim bilmaydigan sirli hayot kechirardim.", type: "mysterious" }
    ]
  },
  {
    category: "QAROR QABUL QILISH",
    icon: "⌁",
    title: "Senga ikkita eshik taklif qilindi.",
    text: "Birinchi eshik ortida kafolatlangan baxt, ikkinchisida noma'lum imkoniyat bor. Qaysi birini ochasan?",
    options: [
      { text: "Kafolatlangan baxtni tanlayman.", type: "calm" },
      { text: "Noma'lum imkoniyatni tanlayman.", type: "creative" },
      { text: "Avval ikkala eshikni o‘rganaman.", type: "strategist" },
      { text: "O‘zim uchinchi eshik yarataman.", type: "leader" }
    ]
  },
  {
    category: "TASAVVUR",
    icon: "✧",
    title: "Agar fikrlaring rang bo‘lganida...",
    text: "Qaysi rang sening ichki dunyongni ifodalardi?",
    options: [
      { text: "Oltin — katta orzular va kuch.", type: "leader" },
      { text: "Binafsha — sirlar va tasavvur.", type: "mysterious" },
      { text: "Moviy — xotirjamlik va chuqur fikr.", type: "calm" },
      { text: "Yashil — yangilik va ijod.", type: "creative" }
    ]
  },
  {
    category: "KUTILMAGAN VAZIYAT",
    icon: "⌘",
    title: "Bir kuni uyg‘onding va...",
    text: "Dunyodagi barcha insonlar seni eshitmay qo‘ydi. Birinchi nima qilasan?",
    options: [
      { text: "O‘zimni tushuntirishning yangi yo‘lini izlayman.", type: "creative" },
      { text: "Vaziyatni kuzatib, sababini aniqlayman.", type: "strategist" },
      { text: "Bundan foydalanib, o‘zimni rivojlantiraman.", type: "leader" },
      { text: "Yolg‘izlikda o‘zimni yaxshiroq anglayman.", type: "mysterious" }
    ]
  },
  {
    category: "DO‘STLIK",
    icon: "◇",
    title: "Do‘sting sendan bir sirini yashirdi.",
    text: "Bunday vaziyatda qanday yo‘l tutasan?",
    options: [
      { text: "Ochiq gaplashib, sababini so‘rayman.", type: "leader" },
      { text: "Unga vaqt beraman va kuzataman.", type: "calm" },
      { text: "Nima bo‘lganini mustaqil aniqlashga harakat qilaman.", type: "strategist" },
      { text: "Uning shaxsiy hududini hurmat qilaman.", type: "mysterious" }
    ]
  },
  {
    category: "ORZULAR",
    icon: "☆",
    title: "Senga bitta superqobiliyat berilsa...",
    text: "Qaysi qobiliyatni tanlarding?",
    options: [
      { text: "Kelajakdagi imkoniyatlarni ko‘rish.", type: "strategist" },
      { text: "Istalgan narsani yaratish.", type: "creative" },
      { text: "Insonlarga ilhom berish.", type: "leader" },
      { text: "Dunyodagi barcha sirlarni tushunish.", type: "mysterious" }
    ]
  },
  {
    category: "BOSIM OSTIDA",
    icon: "⚡",
    title: "Hamma sendan javob kutmoqda.",
    text: "Qiyin qarorni qanday qabul qilasan?",
    options: [
      { text: "Tezda qaror qilib, mas'uliyatni olaman.", type: "leader" },
      { text: "Barcha ma'lumotlarni tahlil qilaman.", type: "strategist" },
      { text: "Ichki sezgimga quloq tutaman.", type: "creative" },
      { text: "Shoshilmay, xotirjam o‘ylayman.", type: "calm" }
    ]
  },
  {
    category: "YASHIRIN ISTAK",
    icon: "☽",
    title: "Agar bir kun butunlay yolg‘iz qolsang...",
    text: "Vaqtingni nimaga sarflaysan?",
    options: [
      { text: "Yangi loyiha yarataman.", type: "creative" },
      { text: "Kelajak rejalarimni tuzaman.", type: "strategist" },
      { text: "O‘zim bilan suhbatlashaman.", type: "mysterious" },
      { text: "Dam olib, hayotdan zavqlanaman.", type: "calm" }
    ]
  },
  {
    category: "HAYOTIY QADRIYAT",
    icon: "♢",
    title: "Senga eng qimmatli narsa qaysi?",
    text: "Faqat bittasini tanla.",
    options: [
      { text: "Erkinlik.", type: "creative" },
      { text: "Hurmat va ta'sir.", type: "leader" },
      { text: "Bilim va haqiqat.", type: "strategist" },
      { text: "Ichki xotirjamlik.", type: "calm" }
    ]
  },
  {
    category: "SIRLI TANLOV",
    icon: "◉",
    title: "Senga noma'lum xat keldi.",
    text: "Xatda: «Hayotingni o‘zgartiradigan sir shu yerda», deb yozilgan. Nima qilasan?",
    options: [
      { text: "Darhol ochib o‘qiyman.", type: "creative" },
      { text: "Avval kim yuborganini tekshiraman.", type: "strategist" },
      { text: "Tavakkal qilib, yangi yo‘lni boshlayman.", type: "leader" },
      { text: "Xatni saqlab, to‘g‘ri vaqtni kutaman.", type: "calm" }
    ]
  },
  {
    category: "O‘ZINGNI ANGLASH",
    icon: "⌖",
    title: "Odamlar seni qanday eslab qolishini istaysan?",
    text: "Qaysi ta'rif senga yaqin?",
    options: [
      { text: "G‘oyalari bilan dunyoni o‘zgartirgan inson.", type: "creative" },
      { text: "Maqsadlariga erishgan kuchli inson.", type: "leader" },
      { text: "Hamma narsani chuqur tushungan inson.", type: "strategist" },
      { text: "O‘ziga xos va sirli inson.", type: "mysterious" }
    ]
  },
  {
    category: "KELAJAK",
    icon: "∞",
    title: "Kelajakdagi o‘zing bilan uchrashding.",
    text: "Undan nimani so‘rarding?",
    options: [
      { text: "Qanday qilib orzularimga erishdim?", type: "leader" },
      { text: "Qaysi imkoniyatlarni boy berdim?", type: "strategist" },
      { text: "Haqiqatan ham baxtlimanmi?", type: "calm" },
      { text: "Hali qanday kashfiyotlar meni kutmoqda?", type: "creative" }
    ]
  },
  {
    category: "TASAVVUR SINOVI",
    icon: "☼",
    title: "Agar hayoting film bo‘lganida...",
    text: "Qaysi janrni tanlarding?",
    options: [
      { text: "Ilhomlantiruvchi sarguzasht.", type: "leader" },
      { text: "Sirli detektiv.", type: "mysterious" },
      { text: "Fantastik va noodatiy olam.", type: "creative" },
      { text: "Chuqur ma'noli drama.", type: "calm" }
    ]
  },
  {
    category: "ICHKI KUCH",
    icon: "⚙",
    title: "Eng katta muvaffaqiyatsizlikdan keyin...",
    text: "O‘zingga nima deysan?",
    options: [
      { text: "Men yana urinib ko‘raman!", type: "leader" },
      { text: "Xatolarimdan saboq olaman.", type: "strategist" },
      { text: "Boshqa yo‘lni kashf qilaman.", type: "creative" },
      { text: "Avval o‘zimni tiklab olaman.", type: "calm" }
    ]
  },
  {
    category: "YAKUNIY TANLOV",
    icon: "✦",
    title: "Senga butun bir yangi dunyo berildi.",
    text: "U dunyoda qanday inson bo‘lishni tanlaysan?",
    options: [
      { text: "O‘z qoidalarini yaratuvchi yetakchi.", type: "leader" },
      { text: "Har narsaning mohiyatini izlovchi.", type: "strategist" },
      { text: "Chegaralarni buzuvchi ijodkor.", type: "creative" },
      { text: "O‘z olamiga ega erkin ruh.", type: "mysterious" }
    ]
  }
];

const profiles = {
  leader: {
    name: "KUCHLI YETAKCHI",
    icon: "♛",
    description: "Sen tashabbus ko‘rsatishdan qo‘rqmaydigan, maqsad sari intiladigan va mas'uliyatni zimmasiga olishga moyil inson obrazisan.",
    traits: ["Qat'iyat", "Tashabbus", "Jasorat", "Maqsadga intilish"],
    strength: "Qat'iyat va tashabbus",
    strengthText: "Qiyin vaziyatlarda ham harakatni boshlashga moyilsan.",
    weakness: "Shoshqaloqlik",
    weaknessText: "Ba'zan tez natija istagi boshqalarning fikrini eshitishni qiyinlashtirishi mumkin.",
    thinking: "Maqsadga yo‘naltirilgan",
    thinkingText: "Ko‘proq natija, imkoniyat va harakat haqida o‘ylaysan.",
    talent: "Tashkilotchilik",
    talentText: "Odamlarni bir maqsad atrofida birlashtirishga moyilliging bor.",
    advice: "Kuchli bo‘lish bilan birga tinglashni ham o‘rgan. Haqiqiy yetakchilik boshqalarga ham imkon berishdan boshlanadi."
  },
  strategist: {
    name: "SOVUQQON TAHLILCHI",
    icon: "⌘",
    description: "Sen vaziyatga chuqur qaraydigan, tafsilotlarni payqaydigan va qaror oldidan o‘ylashni yoqtiradigan obrazsan.",
    traits: ["Tahlil", "Mantiq", "Kuzatuvchanlik", "Rejalashtirish"],
    strength: "Mantiqiy fikrlash",
    strengthText: "Muammoni qismlarga ajratib, yechim izlashga moyilsan.",
    weakness: "Ortiqcha o‘ylash",
    weaknessText: "Ba'zan juda ko‘p tahlil qilish harakatni kechiktirishi mumkin.",
    thinking: "Tizimli va mantiqiy",
    thinkingText: "Ma'lumotlarni solishtirib, sabab va natijani izlaysan.",
    talent: "Strategik rejalashtirish",
    talentText: "Oldindan ehtimoliy yo‘llarni ko‘rib chiqishga moyilsan.",
    advice: "Har bir qaror mukammal bo‘lishi shart emas. Ba'zan eng yaxshi tahlil — harakatni boshlashdir."
  },
  creative: {
    name: "ERKIN IJODKOR",
    icon: "✧",
    description: "Sen yangilik, noodatiy fikrlar va tasavvurga boy imkoniyatlarni yaxshi ko‘radigan obrazsan.",
    traits: ["Ijodkorlik", "Tasavvur", "Erkinlik", "Yangilik"],
    strength: "Original fikrlash",
    strengthText: "Boshqalar ko‘rmagan imkoniyatlarni tasavvur qilishing mumkin.",
    weakness: "Diqqatning bo‘linishi",
    weaknessText: "Bir vaqtning o‘zida ko‘p g‘oyaga qiziqib qolishing mumkin.",
    thinking: "Tasavvurga asoslangan",
    thinkingText: "Muammolarga turli burchaklardan qarashni yoqtirasan.",
    talent: "Yangi g‘oyalar yaratish",
    talentText: "Oddiy narsalardan noodatiy imkoniyat topishga moyilsan.",
    advice: "G‘oyalaringni yozib bor va bittasini oxirigacha amalga oshir. Ijodning kuchi natijada ko‘rinadi."
  },
  calm: {
    name: "XOTIRJAM DONISHMAND",
    icon: "☯",
    description: "Sen osoyishtalik, muvozanat va chuqur o‘ylashni qadrlaydigan obrazsan.",
    traits: ["Sabr", "Muvozanat", "Ehtiyotkorlik", "Bosiqlik"],
    strength: "Xotirjamlik",
    strengthText: "Shoshilinch vaziyatlarda ham o‘zingni boshqarishga moyilsan.",
    weakness: "Ortiqcha ehtiyotkorlik",
    weaknessText: "Ba'zan imkoniyatlarni sinab ko‘rishdan oldin uzoq kutishing mumkin.",
    thinking: "Mulohazali",
    thinkingText: "Qarorlarning oqibatini oldindan tasavvur qilishga harakat qilasan.",
    talent: "Muvozanatni saqlash",
    talentText: "Vaziyatga sokin qarash va keskinlikni kamaytirishga moyilsan.",
    advice: "Xotirjamligingni saqla, lekin ba'zan tavakkal qilishga ham jur'at top. Yangi imkoniyatlar har doim qulay paytni kutmaydi."
  },
  mysterious: {
    name: "SIRLI XAYOLPARAST",
    icon: "☽",
    description: "Sen o‘z ichki olamiga ega, mustaqil fikrlashni va chuqur ma'nolarni izlashni yoqtiradigan obrazsan.",
    traits: ["Mustaqillik", "Intuitsiya", "Sirli fikrlar", "Kuzatuvchanlik"],
    strength: "Mustaqil qarash",
    strengthText: "O‘z fikringni shakllantirish va boshqalardan farqli yo‘l tanlashga moyilsan.",
    weakness: "Ichingdagini yashirish",
    weaknessText: "Ba'zan fikr va hislaringni boshqalar bilan bo‘lishish qiyin bo‘lishi mumkin.",
    thinking: "Intuitiv va kuzatuvchan",
    thinkingText: "Mayda belgilar va yashirin ma'nolarga e'tibor berasan.",
    talent: "Chuqur kuzatuvchanlik",
    talentText: "Vaziyat va insonlarni sinchiklab kuzatishga moyilsan.",
    advice: "O‘z ichki dunyongni qadrlagin, lekin ishonchli insonlar bilan fikrlaringni bo‘lishishdan ham qo‘rqma."
  }
};

let playerName = "Mehmon";
let currentQuestion = 0;
let selectedAnswers = [];
let scores = {};

const $ = id => document.getElementById(id);

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  $(id).classList.add("active");
}

function startQuiz() {
  playerName = $("userName").value.trim() || "Mehmon";
  currentQuestion = 0;
  selectedAnswers = [];
  scores = {
    leader: 0,
    strategist: 0,
    creative: 0,
    calm: 0,
    mysterious: 0
  };

  $("participant").textContent = playerName.toUpperCase();
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];

  $("counter").textContent =
    String(currentQuestion + 1).padStart(2, "0") + " / 15";

  $("progress").style.width =
    ((currentQuestion + 1) / questions.length * 100) + "%";

  $("category").textContent = q.category;
  $("questionIcon").textContent = q.icon;
  $("questionTitle").textContent = q.title;
  $("questionText").textContent = q.text;
  $("feedback").textContent = "";

  const optionsBox = $("options");
  optionsBox.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.textContent = option.text;

    if (selectedAnswers[currentQuestion] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => selectOption(index));
    optionsBox.appendChild(button);
  });

  $("nextBtn").disabled = selectedAnswers[currentQuestion] === undefined;
  $("nextBtn").textContent =
    currentQuestion === questions.length - 1 ? "NATIJANI KO‘RISH ✦" : "DAVOM ETISH →";

  $("backBtn").style.visibility = currentQuestion === 0 ? "hidden" : "visible";
}

function selectOption(index) {
  selectedAnswers[currentQuestion] = index;

  document.querySelectorAll(".option").forEach((button, i) => {
    button.classList.toggle("selected", i === index);
  });

  $("nextBtn").disabled = false;
}

function nextQuestion() {
  if (selectedAnswers[currentQuestion] === undefined) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function calculateResults() {
  scores = {
    leader: 0,
    strategist: 0,
    creative: 0,
    calm: 0,
    mysterious: 0
  };

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    const chosen = questions[questionIndex].options[answerIndex];
    if (chosen) scores[chosen.type]++;
  });

  showAnalysis();
}

function showAnalysis() {
  showScreen("analyzing");

  const steps = [
    "Javoblaringiz o‘zaro taqqoslanmoqda...",
    "Fikrlash uslubingiz aniqlanmoqda...",
    "Xarakter xususiyatlari jamlanmoqda...",
    "Virtual obraz yaratilmoqda..."
  ];

  let progress = 0;
  $("analysisBar").style.width = "0%";

  const timer = setInterval(() => {
    progress += 2;
    $("analysisBar").style.width = progress + "%";

    const stepIndex = Math.min(
      Math.floor(progress / 25),
      steps.length - 1
    );

    $("analysisText").textContent = steps[stepIndex];

    if (progress >= 100) {
      clearInterval(timer);
      showResult();
    }
  }, 45);
}

function showResult() {
  const winner = Object.keys(scores).sort((a, b) => {
    return scores[b] - scores[a];
  })[0];

  const profile = profiles[winner];

  $("profileNumber").textContent =
    String(Math.floor(100 + Math.random() * 900));

  $("avatar").textContent = profile.icon;
  $("typeName").textContent = profile.name;
  $("typeDescription").textContent =
    playerName + ", " + profile.description;

  $("traits").innerHTML = "";
  profile.traits.forEach(trait => {
    const tag = document.createElement("span");
    tag.className = "trait";
    tag.textContent = trait;
    $("traits").appendChild(tag);
  });

  $("strength").textContent = profile.strength;
  $("strengthText").textContent = profile.strengthText;

  $("weakness").textContent = profile.weakness;
  $("weaknessText").textContent = profile.weaknessText;

  $("thinking").textContent = profile.thinking;
  $("thinkingText").textContent = profile.thinkingText;

  $("talent").textContent = profile.talent;
  $("talentText").textContent = profile.talentText;

  $("advice").textContent = profile.advice;

  const report = [
    "PERSONALITY LAB — SHAXSIY TAHLIL",
    "Ism: " + playerName,
    "Xarakter turi: " + profile.name,
    profile.description,
    "Kuchli tomon: " + profile.strength,
    "Ehtiyot bo‘lish kerak: " + profile.weakness,
    "Fikrlash uslubi: " + profile.thinking,
    "Maxsus qobiliyat: " + profile.talent,
    "Tavsiya: " + profile.advice,
    "Bu ko‘ngilochar tahlil, ilmiy tashxis emas."
  ].join("\n");

  window.personalityReport = report;
  showScreen("result");
}

async function copyResult() {
  const button = $("copyBtn");

  try {
    await navigator.clipboard.writeText(window.personalityReport);
    button.textContent = "✓ NUSXALANDI!";
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = window.personalityReport;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    button.textContent = "✓ NUSXALANDI!";
  }

  setTimeout(() => {
    button.textContent = "NATIJANI NUSXALASH";
  }, 2000);
}

function restart() {
  $("userName").value = "";
  showScreen("welcome");
}

function createParticles() {
  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 9 + "s";
    particle.style.animationDuration = (5 + Math.random() * 8) + "s";
    $("particles").appendChild(particle);
  }
}

$("startBtn").addEventListener("click", startQuiz);
$("nextBtn").addEventListener("click", nextQuestion);
$("backBtn").addEventListener("click", previousQuestion);
$("copyBtn").addEventListener("click", copyResult);
$("restartBtn").addEventListener("click", restart);

$("userName").addEventListener("keydown", event => {
  if (event.key === "Enter") startQuiz();
});

createParticles();
