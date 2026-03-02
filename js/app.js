/* FrameByKaram – MirrorBooth Reservation (Static) */

const WHATSAPP_NUMBER = "972524040714"; 

const T = {
  en: {
    premiumExperience: "Premium Mirrorbooth Experience",
    yourSelection: "Your Selection",
    mirrorFrame: "Mirror Frame",
    redCarpetSetup: "Red Carpet Setup",
    photoMount: "Photo Mount",
    selectFramePreview: "Select a frame to preview",
    selectRopePreview: "Select a rope to preview",
    selectCarpetPreview: "Select a carpet to preview",
    selectMountPreview: "Select a mount to preview",
    nextStep: "Next Step",
    prevStep: "Previous Step",
    submitRequest: "Submit Request",
    successTitle: "Request Received!",
    successMessage:
      "Thank you for choosing Frame by Karam. We received your configuration and will contact you shortly to confirm availability and pricing.",
    formName: "Full Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formDate: "Event Date",
    formLocation: "Event Location",
    formNotes: "Additional Notes",
    formNotesPlaceholder: "Any special requests or details we should know about?",
    followUs: "Follow us on Instagram",
    none: "None",
    eventDetails: "Event Details",
    selections: "Selections",
    name: "Name",
    email: "Email",
    phone: "Phone",
    date: "Date",
    location: "Location",
    notes: "Notes",
    eventType: "Event type",
    wedding: "Wedding",
    engagement: "Engagement",
    birthday: "Birthday",
    corporate: "Corporate",
    other: "Other",
    customEventType: "Write event type",
    frame: "Frame",
    rope: "Rope",
    carpet: "Carpet",
    mount: "Mount",
    newRequest: "New Reservation Request"
  },
  he: {
    premiumExperience: "חוויה יוקרתית של מירורבוט",
    yourSelection: "הבחירה שלך",
    mirrorFrame: "מסגרת מראה",
    redCarpetSetup: "עיצוב שטיח אדום",
    photoMount: "מסגרת לתמונות",
    selectFramePreview: "בחר מסגרת להצגה",
    selectRopePreview: "בחר חבל להצגה",
    selectCarpetPreview: "בחר שטיח להצגה",
    selectMountPreview: "בחר מסגרת לתמונה להצגה",
    nextStep: "לשלב הבא",
    prevStep: "לשלב הקודם",
    submitRequest: "שלח בקשה",
    successTitle: "הבקשה התקבלה!",
    successMessage:
      "תודה שבחרת Frame by Karam. קיבלנו את הבחירה שלך וניצור קשר בקרוב לאישור זמינות ומחיר.",
    formName: "שם מלא",
    formEmail: "אימייל",
    formPhone: "טלפון",
    formDate: "תאריך האירוע",
    formLocation: "מיקום האירוע",
    formNotes: "הערות נוספות",
    formNotesPlaceholder: "בקשות מיוחדות או פרטים שחשוב שנדע?",
    followUs: "עקבו אחרינו באינסטגרם",
    none: "ללא",
    eventDetails: "פרטי האירוע",
    selections: "בחירות",
    name: "שם",
    email: "אימייל",
    phone: "טלפון",
    date: "תאריך",
    location: "מיקום",
    notes: "הערות",
    eventType: "סוג האירוע",
    wedding: "חתונה",
    engagement: "אירוסין",
    birthday: "יום הולדת",
    corporate: "אירוע חברה",
    other: "אחר",
    customEventType: "כתוב סוג אירוע",
    frame: "מסגרת",
    rope: "חבל",
    carpet: "שטיח",
    mount: "מסגרת תמונה",
    newRequest: "בקשת הזמנה חדשה"
  },
  ar: {
    premiumExperience: "تجربة ميروربوث فاخرة",
    yourSelection: "اختياراتك",
    mirrorFrame: "إطار المرآة",
    redCarpetSetup: "إعداد السجادة الحمراء",
    photoMount: "إطار الصورة",
    selectFramePreview: "اختر إطارًا للمعاينة",
    selectRopePreview: "اختر حبلًا للمعاينة",
    selectCarpetPreview: "اختر سجادة للمعاينة",
    selectMountPreview: "اختر إطار صورة للمعاينة",
    nextStep: "الخطوة التالية",
    prevStep: "الخطوة السابقة",
    submitRequest: "إرسال الطلب",
    successTitle: "تم استلام الطلب!",
    successMessage:
      "شكرًا لاختيارك Frame by Karam. استلمنا إعداداتك وسنتواصل معك قريبًا لتأكيد التوفر والسعر.",
    formName: "الاسم الكامل",
    formEmail: "البريد الإلكتروني",
    formPhone: "رقم الهاتف",
    formDate: "تاريخ المناسبة",
    formLocation: "موقع المناسبة",
    formNotes: "ملاحظات إضافية",
    formNotesPlaceholder: "هل لديك طلبات خاصة أو تفاصيل إضافية؟",
    followUs: "تابعنا على إنستغرام",
    none: "لا يوجد",
    eventDetails: "تفاصيل الحدث",
    selections: "الاختيارات",
    name: "الاسم",
    email: "البريد",
    phone: "الهاتف",
    date: "التاريخ",
    location: "الموقع",
    notes: "ملاحظات",
    eventType: "نوع الحدث",
    wedding: "زفاف",
    engagement: "خطوبة",
    birthday: "عيد ميلاد",
    corporate: "فعالية شركة",
    other: "أخرى",
    customEventType: "اكتب نوع الحدث",
    frame: "الإطار",
    rope: "الحبل",
    carpet: "السجادة",
    mount: "إطار الصورة",
    newRequest: "طلب حجز جديد"
  }
};

const STEPS = [
  { id: "frame", title: { en: "Mirror Frame", he: "מסגרת מראה", ar: "إطار المرآة" }, subtitle: { en: "Choose your aesthetic", he: "בחר את העיצוב שלך", ar: "اختر تصميمك" } },
  { id: "rope", title: { en: "Red Carpet: Rope", he: "שטיח אדום: חבל", ar: "السجادة الحمراء: الحبل" }, subtitle: { en: "Select rope color", he: "בחר צבע חבל", ar: "اختر لون الحبل" } },
  { id: "carpet", title: { en: "Red Carpet: Carpet", he: "שטיח אדום: שטיח", ar: "السجادة الحمراء: السجادة" }, subtitle: { en: "Select carpet color", he: "בחר צבע שטיח", ar: "اختر لون السجادة" } },
  { id: "mount", title: { en: "Photo Mounts", he: "מסגרות לתמונות", ar: "إطارات الصور" }, subtitle: { en: "How guests keep their memories", he: "איך האורחים שומרים את הזיכרונות", ar: "كيف يحتفظ الضيوف بذكرياتهم" } },
  { id: "details", title: { en: "Event Details", he: "פרטי האירוע", ar: "تفاصيل الحدث" }, subtitle: { en: "Tell us about your event", he: "ספר לנו על האירוע שלך", ar: "أخبرنا عن مناسبتك" } }
];

const FRAMES = [
  { id: "no-frame", name: { en: "No Frame", he: "ללא מסגרת", ar: "بدون إطار" }, image: "assets/images/no-frame.jpg" },
  { id: "vintage-gold", name: { en: "Vintage Gold", he: "זהב וינטג׳", ar: "ذهبي عتيق" }, image: "assets/images/vintage-gold.jpg" },
  { id: "vintage-silver", name: { en: "Vintage Silver", he: "כסף וינטג׳", ar: "فضي عتيق" }, image: "assets/images/vintage-silver.jpg" }
];

const ROPES = [
  { id: "red", name: { en: "Classic Red", he: "אדום קלאסי", ar: "أحمر كلاسيكي" }, image: "assets/images/red-rope.jpg" },
  { id: "twisted-gold", name: { en: "Twisted Gold", he: "זהב שזור", ar: "ذهبي مجدول" }, image: "assets/images/twisted-gold.jpg" },
  { id: "twisted-white", name: { en: "Twisted White", he: "לבן שזור", ar: "أبيض مجدول" }, image: "assets/images/twisted-white.jpg" },
  { id: "twisted-pink", name: { en: "Twisted Pink", he: "ורוד שזור", ar: "وردي مجدول" }, image: "assets/images/twisted-pink.jpg" }
];

const CARPETS = [
  { id: "red", name: { en: "Red Carpet", he: "שטיח אדום", ar: "سجادة حمراء" }, image: "assets/images/red-carpet.jpg" },
  { id: "beige", name: { en: "Beige Carpet", he: "שטיח בז׳", ar: "سجادة بيج" }, image: "assets/images/beige-carpet.jpg" },
  { id: "white", name: { en: "White Carpet", he: "שטיח לבן", ar: "سجادة بيضاء" }, image: "assets/images/white-carpet.jpg" }
];

const MOUNTS = [
  { id: "mount-white-gold", name: { en: "White & Gold", he: "לבן וזהב", ar: "أبيض وذهبي" }, desc: { en: "White mount with gold accents", he: "מסגרת לבנה עם נגיעות זהב", ar: "إطار أبيض مع لمسات ذهبية" }, image: "assets/images/mount-white-gold.jpg" },
  { id: "mount-pure-white", name: { en: "Pure White", he: "לבן נקי", ar: "أبيض نقي" }, desc: { en: "Clean pure white mount", he: "מסגרת לבנה נקייה", ar: "إطار أبيض نقي" }, image: "assets/images/mount-pure-white.jpg" },
  { id: "mount-monochrome", name: { en: "Monochrome", he: "מונוכרום", ar: "أحادي اللون" }, desc: { en: "Classic monochrome mount", he: "מסגרת מונוכרום קלאסית", ar: "إطار أحادي اللون كلاسيكي" }, image: "assets/images/mount-monochrome.jpg" },
  { id: "mount-kraft", name: { en: "Kraft Mount", he: "מסגרת קראפט", ar: "إطار كرافت" }, desc: { en: "Rustic kraft paper mount", he: "מסגרת נייר קראפט כפרית", ar: "إطار ورق كرافت ريفي" }, image: "assets/images/mount-kraft.jpg" },
  { id: "mount-black", name: { en: "Black Mount", he: "מסגרת שחורה", ar: "إطار أسود" }, desc: { en: "Elegant black photo mount", he: "מסגרת תמונה שחורה ואלגנטית", ar: "إطار صورة أسود أنيق" }, image: "assets/images/mount-black.jpg" },
  { id: "mount-wine-red", name: { en: "Wine Red", he: "אדום יין", ar: "أحمر نبيذي" }, desc: { en: "Deep red luxury mount", he: "מסגרת יוקרתית באדום עמוק", ar: "إطار فاخر بلون أحمر نبيذي" }, image: "assets/images/mount-wine-red.jpg" },
  { id: "mount-luxury-white", name: { en: "Luxury White", he: "לבן יוקרתי", ar: "أبيض فاخر" }, desc: { en: "Premium white photo mount", he: "מסגרת תמונה לבנה פרימיום", ar: "إطار صورة أبيض فاخر" }, image: "assets/images/mount-luxury-white.jpg" },
  { id: "mount-kraft-xl", name: { en: "Kraft Mount XL", he: "מסגרת קראפט XL", ar: "إطار كرافت XL" }, desc: { en: "Extra large rustic kraft mount", he: "מסגרת קראפט כפרית גדולה במיוחד", ar: "إطار كرافت ريفي كبير جداً" }, image: "assets/images/mount-kraft-xl.jpg" }
];

const state = {
  lang: "en",
  step: 0,
  selections: { frame: "", rope: "", carpet: "", mount: "" },
  form: { name: "", email: "", phone: "", date: "", location: "", notes: "", eventType: "Wedding", customEventType: "" },
  suggestions: [],
  showSuggestions: false,
  isSearching: false,
  debounce: null
};

// ----------------------------------------------------
// INTRO ANIMATION & LOCALSTORAGE LOGIC
// ----------------------------------------------------
function initIntro() {
  const introOverlay = document.getElementById('intro-overlay');
  const startBtn = document.getElementById('intro-start-btn');
  const stepTitle = document.getElementById('step-title');
  if (!introOverlay || !startBtn) return;

  const lastSeen = localStorage.getItem('introSeenAt');
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  // Show intro if never seen or if older than 24 hours
  if (!lastSeen || (now - parseInt(lastSeen, 10)) > oneDay) {
    introOverlay.classList.remove('hidden');
    introOverlay.classList.add('intro--visible');
    introOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scrolling

    // Auto-focus button for accessibility
    setTimeout(() => startBtn.focus(), 100);

    const closeIntro = () => {
      // Trigger the hide animation sequence
      introOverlay.classList.remove('intro--visible');
      introOverlay.classList.add('intro--hiding');
      
      // Clean up after CSS animation ends (1000ms based on keyframes)
      setTimeout(() => {
        introOverlay.classList.add('hidden');
        introOverlay.classList.remove('intro--hiding');
        introOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock scroll
        
        // Pass focus to the main app so keyboard users aren't lost
        if (stepTitle) stepTitle.focus();
      }, 1000);

      // Save user choice to localStorage
      localStorage.setItem('introSeenAt', Date.now().toString());
    };

    // Click trigger
    startBtn.addEventListener('click', closeIntro);
    
    // Keyboard trigger (Enter/Space)
    startBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeIntro();
      }
    });

    // Trap focus inside the overlay while it is visible
    introOverlay.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        startBtn.focus();
      }
    });
  }
}

function isRTL(lang) {
  return lang === "he" || lang === "ar";
}

function setDirAndFont() {
  const html = document.getElementById("html-root");
  html.dir = isRTL(state.lang) ? "rtl" : "ltr";
  html.lang = state.lang;
  if (state.lang === "he") document.body.style.fontFamily = `"Rubik", Inter, system-ui, sans-serif`;
  else if (state.lang === "ar") document.body.style.fontFamily = `"Cairo", Inter, system-ui, sans-serif`;
  else document.body.style.fontFamily = `Inter, system-ui, sans-serif`;
}

function t(key) {
  return (T[state.lang] && T[state.lang][key]) ? T[state.lang][key] : key;
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const d = String(date.getDate()).padStart(2, "0");
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
}

function getItemName(list, id) {
  const found = list.find((x) => x.id === id);
  if (!found) return t("none");
  return found.name[state.lang] || found.name.en || t("none");
}

function stepTitleText() {
  return STEPS[state.step].title[state.lang] || STEPS[state.step].title.en;
}
function stepSubtitleText() {
  return STEPS[state.step].subtitle[state.lang] || STEPS[state.step].subtitle.en;
}

function isStepValid() {
  if (state.step === 0) return state.selections.frame !== "";
  if (state.step === 1) return state.selections.rope !== "";
  if (state.step === 2) return state.selections.carpet !== "";
  if (state.step === 3) return state.selections.mount !== "";
  if (state.step === 4) return !!(state.form.name && state.form.email && state.form.date);
  return true;
}

function renderLangSwitch() {
  const root = document.getElementById("lang-switch");
  const buttons = [
    { id: "en", label: "EN" },
    { id: "he", label: "עב" },
    { id: "ar", label: "AR" }
  ];

root.innerHTML = buttons.map((b) => `
<button data-lang="${b.id}" class="px-3 py-1 rounded-full text-[10px] font-semibold transition-colors ${state.lang===b.id ? "gold-btn shadow-md" : "bg-[#1a1a1a] text-white/60 border border-white/10 hover:text-white"}">
${b.label}
</button>
`).join("");

  root.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.lang = btn.getAttribute("data-lang");
      setDirAndFont();
      renderAll();
    });
  });
}

function renderStepper() {
  document.getElementById("step-title").textContent = stepTitleText();
  document.getElementById("step-subtitle").textContent = stepSubtitleText();

  const dots = document.getElementById("step-dots");
const labels = [
  {en: "FRAME", he: "מסגרת", ar: "إطار"},
  {en: "CARPET", he: "שטיח", ar: "سجادة"},
  {en: "MOUNTS", he: "מסגרות", ar: "إطارات"},
  {en: "DETAILS", he: "פרטים", ar: "تفاصيل"}
];

let html = "";
for(let i=0; i<4; i++) {
  let cls = "step-circle";
  let inner = `0${i+1}`;
  let labelCls = "text-[8px] mt-2 tracking-wider uppercase text-white/40";

  if (i === state.step || (state.step === 4 && i === 3)) {
     cls += " active";
     labelCls = "text-[8px] mt-2 tracking-wider uppercase gold-text font-bold";
  } else if (i < state.step) {
     cls += " done";
     inner = `<i data-lucide="check" class="w-3 h-3 text-[#0b0b0b]"></i>`;
  }

  let labelText = labels[i][state.lang] || labels[i].en;

  html += `<div class="flex flex-col items-center flex-1 relative">
             <div class="${cls}">${inner}</div>
             <div class="absolute top-7 w-max text-center ${labelCls}">${labelText}</div>
           </div>`;

  if (i < 3) {
     html += `<div class="step-line"></div>`;
  }
}
dots.innerHTML = html;
}

function cardHTML(item, selectedId, onCategory, containerClass = "aspect-[4/3]", imgClass = "object-cover", isCompact = false) {
  const selected = item.id === selectedId;
  const title = item.name[state.lang] || item.name.en || "";
  const desc = item.desc ? (item.desc[state.lang] || item.desc.en || "") : "";
  
  const textSize = isCompact ? "text-[10px] sm:text-[11px] md:text-base leading-tight" : "text-[11px] md:text-base font-semibold";

  return `
    <button class="option-card glass rounded-xl md:rounded-3xl p-1.5 md:p-3 text-center md:text-left border border-white/10 ${selected ? "selected" : ""}" data-cat="${onCategory}" data-id="${item.id}">
      <div class="rounded-lg md:rounded-2xl overflow-hidden ${containerClass} bg-black/40">
        <img src="${item.image}" alt="${title}" class="w-full h-full ${imgClass}" loading="lazy">
      </div>
      <div class="mt-1 md:mt-3 px-1 md:px-0">
        <div class="font-semibold ${textSize}">${title}</div>
        ${!isCompact && desc ? `<div class="text-xs text-white/60 mt-1 hidden md:block">${desc}</div>` : ``}
      </div>
    </button>
  `;
}

function renderStepContent() {
  const root = document.getElementById("step-content");

const preview = (labelKey, img, fallbackKey, extraClasses = "aspect-[16/9]", imgClass = "object-cover", idSuffix = "") => `
<div class="rounded-3xl p-5 scroll-mt-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border border-white/5 shadow-xl mb-6" id="preview-section-${idSuffix}">
<div class="flex items-center gap-2 mb-4">
  <i data-lucide="sparkles" class="w-4 h-4 gold-text"></i>
  <span class="text-sm font-semibold text-white tracking-wide uppercase">${t(labelKey)}</span>
</div>
<div class="rounded-2xl overflow-hidden bg-black/60 ${extraClasses} flex items-center justify-center border border-white/5 shadow-inner">
${img ? `<img src="${img}" alt="preview" class="w-full h-full ${imgClass}">` : `<div class="text-white/40 text-sm tracking-wide">${t(fallbackKey)}</div>`}
</div>
</div>
`;

  if (state.step === 0) {
    const selected = FRAMES.find(x => x.id === state.selections.frame);
    root.innerHTML = `
      <div class="grid gap-4">
        ${preview("mirrorFrame", selected?.image, "selectFramePreview", "h-48 md:h-64 max-w-[160px] md:max-w-sm mx-auto w-full", "object-contain", "frame")}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          ${FRAMES.map((f) => cardHTML(f, state.selections.frame, "frame")).join("")}
        </div>
      </div>
    `;
  }

  if (state.step === 1) {
    const rope = ROPES.find(x => x.id === state.selections.rope);
    root.innerHTML = `
      <div class="grid gap-6">
        ${preview("rope", rope?.image, "selectRopePreview", "aspect-[16/9] md:max-w-md mx-auto w-full", "object-cover", "rope")}
        <div>
          <div class="text-sm text-white/60 mb-2">${t("rope")} Options</div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            ${ROPES.map((r) => cardHTML(r, state.selections.rope, "rope")).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (state.step === 2) {
    const carpet = CARPETS.find(x => x.id === state.selections.carpet);
    root.innerHTML = `
      <div class="grid gap-6">
        ${preview("carpet", carpet?.image, "selectCarpetPreview", "aspect-[16/9] md:max-w-md mx-auto w-full", "object-cover", "carpet")}
        <div>
          <div class="text-sm text-white/60 mb-2">${t("carpet")} Options</div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            ${CARPETS.map((c) => cardHTML(c, state.selections.carpet, "carpet")).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (state.step === 3) {
    const selected = MOUNTS.find(x => x.id === state.selections.mount);
    root.innerHTML = `
      <div class="grid gap-6">
        ${preview("mount", selected?.image, "selectMountPreview", "aspect-[3/4] max-w-[160px] md:max-w-sm mx-auto w-full", "object-contain", "mount")}
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-2">
          ${MOUNTS.map((m) => cardHTML(m, state.selections.mount, "mount", "aspect-[3/4] sm:aspect-[4/3]", "object-contain", true)).join("")}
        </div>
      </div>
    `;
  }

  if (state.step === 4) {
    const selectionSummary = `
      <div class="glass rounded-3xl p-4">
        <div class="font-semibold">${t("yourSelection")}</div>
        <div class="mt-3 text-sm text-white/75 grid gap-2">
          <div>• ${t("frame")}: <span class="text-white">${getItemName(FRAMES, state.selections.frame)}</span></div>
          <div>• ${t("rope")}: <span class="text-white">${getItemName(ROPES, state.selections.rope)}</span></div>
          <div>• ${t("carpet")}: <span class="text-white">${getItemName(CARPETS, state.selections.carpet)}</span></div>
          <div>• ${t("mount")}: <span class="text-white">${getItemName(MOUNTS, state.selections.mount)}</span></div>
        </div>
        <small class="help block mt-3">WhatsApp message will include your selections and event details.</small>
      </div>
    `;

    const eventTypeValue = state.form.eventType;

    root.innerHTML = `
      <div class="grid gap-4">
        ${selectionSummary}

        <form id="details-form" class="glass rounded-3xl p-4 grid gap-3">
          <div class="font-semibold">${t("eventDetails")}</div>

          <div class="grid md:grid-cols-2 gap-3">
            <div>
              <label class="text-sm text-white/60">${t("formName")} *</label>
              <input class="input mt-1" name="name" value="${escapeHTML(state.form.name)}" placeholder="${t("formName")}" required />
            </div>
            <div>
              <label class="text-sm text-white/60">${t("formEmail")} *</label>
              <input class="input mt-1" type="email" name="email" value="${escapeHTML(state.form.email)}" placeholder="name@email.com" required />
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div>
              <label class="text-sm text-white/60">${t("formPhone")}</label>
              <input class="input mt-1" name="phone" value="${escapeHTML(state.form.phone)}" placeholder="+972..." />
            </div>
            <div>
              <label class="text-sm text-white/60">${t("eventType")}</label>
              <select class="input mt-1" name="eventType">
                ${["Wedding","Engagement","Birthday","Corporate","Other"].map((opt) => {
                  const key = opt.toLowerCase();
                  const label = t(key);
                  const sel = (opt === eventTypeValue) ? "selected" : "";
                  return `<option value="${opt}" ${sel}>${label}</option>`;
                }).join("")}
              </select>
            </div>
          </div>

          <div class="${eventTypeValue==="Other" ? "" : "hidden"}" id="custom-event-wrap">
            <label class="text-sm text-white/60">${t("customEventType")}</label>
            <input class="input mt-1" name="customEventType" value="${escapeHTML(state.form.customEventType)}" placeholder="${t("customEventType")}" />
          </div>

          <div class="grid md:grid-cols-2 gap-3">
            <div>
              <label class="text-sm text-white/60">${t("formDate")} *</label>
              <input class="input mt-1" type="date" name="date" value="${escapeHTML(state.form.date)}" required />
              <small class="help block mt-1">Message uses DD-MMM-YYYY (example: 02-Mar-2026).</small>
            </div>

            <div class="relative">
              <label class="text-sm text-white/60">${t("formLocation")}</label>
              <input class="input mt-1" name="location" id="location-input" value="${escapeHTML(state.form.location)}" placeholder="Israel (town / village)" autocomplete="off" />
              <div id="suggestions" class="suggest ${state.showSuggestions ? "" : "hidden"}"></div>
              <small class="help block mt-1">Autocomplete shows places in Israel only.</small>
            </div>
          </div>

          <div>
            <label class="text-sm text-white/60">${t("formNotes")}</label>
            <textarea class="input mt-1" rows="4" name="notes" placeholder="${t("formNotesPlaceholder")}">${escapeHTML(state.form.notes)}</textarea>
          </div>

          <div class="text-xs text-white/55">
            * Required: name, email, date.
          </div>
        </form>

        <div id="success" class="hidden glass rounded-3xl p-4">
          <div class="text-xl font-semibold gold-text" style="font-family: 'Playfair Display', serif;">${t("successTitle")}</div>
          <div class="mt-2 text-white/70">${t("successMessage")}</div>
        </div>
      </div>
    `;
  }

  root.querySelectorAll("[data-cat][data-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-cat");
      const id = btn.getAttribute("data-id");
      state.selections[cat] = id;

      renderAll();

      setTimeout(() => {
        const previewBox = document.getElementById(`preview-section-${cat}`);
        if (previewBox) {
          const y = previewBox.getBoundingClientRect().top + window.scrollY - 30;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 50);
    });
  });

  if (state.step === 4) {
    const form = document.getElementById("details-form");
    if (form) {
      form.addEventListener("input", (e) => {
        const target = e.target;
        if (!target || !target.name) return;
        state.form[target.name] = target.value;
        if (target.name === "eventType") {
          renderAll();
          return;
        }
        if (target.name === "location") handleLocationChange(target.value);
        renderNav(); 
      });
    }
    renderSuggestions();
  }
}

function renderNav() {
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");

  document.getElementById("prev-label").textContent = t("prevStep");
  document.getElementById("next-label").textContent = (state.step === STEPS.length - 1) ? t("submitRequest") : t("nextStep");

  prevBtn.style.visibility = state.step === 0 ? "hidden" : "visible";

  const valid = isStepValid();
  nextBtn.disabled = !valid;

  const leftIcon = prevBtn.querySelector("i");
  const rightIcon = nextBtn.querySelector("i");
  if (isRTL(state.lang)) {
    leftIcon.setAttribute("data-lucide", "chevron-right");
    rightIcon.setAttribute("data-lucide", "chevron-left");
  } else {
    leftIcon.setAttribute("data-lucide", "chevron-left");
    rightIcon.setAttribute("data-lucide", "chevron-right");
  }

  safeCreateIcons();
}

function safeCreateIcons() {
  try { lucide.createIcons(); } catch (e) {}
}

function goPrev() {
  if (state.step > 0) {
    state.step -= 1;
    state.showSuggestions = false;
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goNext() {
  if (!isStepValid()) return;

  if (state.step < STEPS.length - 1) {
    state.step += 1;
    state.showSuggestions = false;
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  submitToWhatsApp();
}

function finalEventTypeText() {
  const v = state.form.eventType;
  if (v === "Other") return (state.form.customEventType || t("other"));
  const key = v.toLowerCase();
  return t(key);
}

function submitToWhatsApp() {
  if (!isStepValid()) return;

  const frameName = getItemName(FRAMES, state.selections.frame);
  const ropeName = getItemName(ROPES, state.selections.rope);
  const carpetName = getItemName(CARPETS, state.selections.carpet);
  const mountName = getItemName(MOUNTS, state.selections.mount);

  const msg =
`*${t("newRequest")}* 📸✨

*${t("eventDetails")}:*
• ${t("name")}: ${state.form.name}
• ${t("email")}: ${state.form.email}
${state.form.phone ? `• ${t("phone")}: ${state.form.phone}\n` : ""}• ${t("eventType")}: ${finalEventTypeText()}
• ${t("date")}: ${formatDate(state.form.date)}
${state.form.location ? `• ${t("location")}: ${state.form.location}\n` : ""}${state.form.notes ? `• ${t("notes")}: ${state.form.notes}\n` : ""}

*${t("selections")}:*
• ${t("frame")}: ${frameName}
• ${t("rope")}: ${ropeName}
• ${t("carpet")}: ${carpetName}
• ${t("mount")}: ${mountName}`.trim();

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  const success = document.getElementById("success");
  if (success) success.classList.remove("hidden");
}

function escapeHTML(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function handleLocationChange(val) {
  if (state.debounce) clearTimeout(state.debounce);

  if (!val || val.trim().length <= 2) {
    state.suggestions = [];
    state.showSuggestions = false;
    renderSuggestions();
    return;
  }

  state.isSearching = true;
  state.debounce = setTimeout(async () => {
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(val)}&limit=5&countrycodes=il`;
      const res = await fetch(url, { headers: { "Accept": "application/json" } });
      const data = await res.json();
      state.suggestions = Array.isArray(data) ? data : [];
      state.showSuggestions = true;
    } catch (e) {
      console.warn("Location search failed", e);
      state.suggestions = [];
      state.showSuggestions = false;
    } finally {
      state.isSearching = false;
      renderSuggestions();
    }
  }, 500);
}

function renderSuggestions() {
  const wrap = document.getElementById("suggestions");
  if (!wrap) return;

  if (!state.showSuggestions || !state.suggestions.length) {
    wrap.classList.add("hidden");
    wrap.innerHTML = "";
    return;
  }

  wrap.classList.remove("hidden");
  wrap.innerHTML = state.suggestions.map((s) => {
    const label = escapeHTML(s.display_name || "");
    return `<button type="button" data-loc="${label}">${label}</button>`;
  }).join("");

  wrap.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const loc = btn.getAttribute("data-loc") || "";
      state.form.location = loc;
      state.showSuggestions = false;

      const input = document.getElementById("location-input");
      if (input) input.value = loc;
      renderSuggestions();
      renderNav();
    });
  });
}

function registerSW() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "https:" && location.hostname !== "localhost") return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

function renderAll() {
  renderLangSwitch();
  renderStepper();
  renderStepContent();
  renderNav();
  safeCreateIcons();
}

function bindNavButtons() {
  document.getElementById("btn-prev").addEventListener("click", goPrev);
  document.getElementById("btn-next").addEventListener("click", goNext);
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Intro before rendering the rest of the app
  initIntro();
  
  setDirAndFont();
  bindNavButtons();
  renderAll();
  registerSW();

  document.addEventListener("click", (e) => {
    const target = e.target;
    const sugg = document.getElementById("suggestions");
    const input = document.getElementById("location-input");
    if (!sugg) return;

    const clickedInside = sugg.contains(target) || (input && input.contains(target));
    if (!clickedInside) {
      state.showSuggestions = false;
      renderSuggestions();
    }
  });
});



