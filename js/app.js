/* FrameByKaram – MirrorBooth Reservation (Static)
   - No React / No build step
   - GitHub Pages friendly (relative paths)
*/

const WHATSAPP_NUMBER = "972524040714"; // TODO: replace with your WhatsApp number (international format)

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
  { id: "setup", title: { en: "Red Carpet Setup", he: "עיצוב שטיח אדום", ar: "إعداد السجادة الحمراء" }, subtitle: { en: "Select rope and carpet colors", he: "בחר צבעי חבל ושטיח", ar: "اختر ألوان الحبل والسجادة" } },
  { id: "mount", title: { en: "Photo Mounts", he: "מסגרות לתמונות", ar: "إطارات الصور" }, subtitle: { en: "How guests keep their memories", he: "איך האורחים שומרים את הזיכרונות", ar: "كيف يحتفظ الضيوف بذكرياتهم" } },
  { id: "details", title: { en: "Event Details", he: "פרטי האירוע", ar: "تفاصيل الحدث" }, subtitle: { en: "Tell us about your event", he: "ספר לנו על האירוע שלך", ar: "أخبرنا عن مناسبتك" } }
];

const FRAMES = [
  { id: "no-frame", name: { en: "No Frame", he: "ללא מסגרת", ar: "بدون إطار" }, image: "assets/images/no-frame.jpg" },
  { id: "vintage-gold", name: { en: "Vintage Gold", he: "זהב וינטג׳", ar: "ذهبي عتيق" }, image: "assets/images/vintage-gold.jpg" },
  { id: "vintage-silver", name: { en: "Vintage Silver", he: "כסף וינטג׳", ar: "فضي عتيق" }, image: "assets/images/vintage-silver.jpg" },
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
  // location autocomplete
  suggestions: [],
  showSuggestions: false,
  isSearching: false,
  debounce: null
};

function isRTL(lang) {
  return lang === "he" || lang === "ar";
}

function setDirAndFont() {
  const html = document.getElementById("html-root");
  html.dir = isRTL(state.lang) ? "rtl" : "ltr";
  html.lang = state.lang;

  // Light-touch font mapping for better Hebrew/Arabic rendering
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

function stepTitle() {
  return STEPS[state.step].title[state.lang] || STEPS[state.step].title.en;
}
function stepSubtitle() {
  return STEPS[state.step].subtitle[state.lang] || STEPS[state.step].subtitle.en;
}

function isStepValid() {
  if (state.step === 0) return state.selections.frame !== "";
  if (state.step === 1) return state.selections.rope !== "" && state.selections.carpet !== "";
  if (state.step === 2) return state.selections.mount !== "";
  if (state.step === 3) return !!(state.form.name && state.form.email && state.form.date);
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
    <button data-lang="${b.id}" class="px-3 py-2 rounded-xl text-sm font-semibold ${state.lang===b.id ? "gold-btn" : "text-white/80 hover:text-white"}">
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
  document.getElementById("step-title").textContent = stepTitle();
  document.getElementById("step-subtitle").textContent = stepSubtitle();

  const dots = document.getElementById("step-dots");
  dots.innerHTML = STEPS.map((_, i) => {
    let cls = "step-dot";
    if (i === state.step) cls += " active";
    if (i < state.step) cls += " done";
    return `<div class="${cls}" title="${i+1}"></div>`;
  }).join("");
}

function cardHTML(item, selectedId, onCategory) {
  const selected = item.id === selectedId;
  const title = item.name[state.lang] || item.name.en || "";
  const desc = item.desc ? (item.desc[state.lang] || item.desc.en || "") : "";
  return `
    <button class="option-card glass rounded-3xl p-3 text-left border border-white/10 ${selected ? "selected" : ""}" data-cat="${onCategory}" data-id="${item.id}">
      <div class="rounded-2xl overflow-hidden aspect-[4/3] bg-black/40">
        <img src="${item.image}" alt="${title}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="mt-3">
        <div class="font-semibold">${title}</div>
        ${desc ? `<div class="text-sm text-white/60 mt-1">${desc}</div>` : ``}
      </div>
    </button>
  `;
}

function renderStepContent() {
  const root = document.getElementById("step-content");

  // Helper: current preview
  const preview = (labelKey, img, fallbackKey, opts = {}) => {
    const aspect = opts.aspect || "aspect-[16/9]";
    const fit = opts.fit || "object-cover";
    return `
    <div class="glass rounded-3xl p-4">
      <div class="text-sm text-white/60">${t(labelKey)}</div>
      <div class="mt-3 rounded-2xl overflow-hidden bg-black/40 ${aspect} flex items-center justify-center" id="preview-box">
        ${img ? `<img src="${img}" alt="preview" class="w-full h-full ${fit}">` : `<div class="text-white/55">${t(fallbackKey)}</div>`}
      </div>
    </div>
  `;
  };
  if (state.step === 0) {
    const selected = FRAMES.find(x => x.id === state.selections.frame);
    root.innerHTML = `
      <div class="grid gap-4">
        ${preview("mirrorFrame", selected?.image, "selectFramePreview", { aspect: "aspect-[9/16] md:aspect-[16/9]", fit: "object-contain md:object-cover" })}

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          ${FRAMES.map((f) => cardHTML(f, state.selections.frame, "frame")).join("")}
        </div>
      </div>
    `;
  }

  if (state.step === 1) {
    const rope = ROPES.find(x => x.id === state.selections.rope);
    const carpet = CARPETS.find(x => x.id === state.selections.carpet);

    root.innerHTML = `
      <div class="grid gap-4">
        <div class="grid md:grid-cols-2 gap-4">
          ${preview("rope", rope?.image, "selectRopePreview")}
          ${preview("carpet", carpet?.image, "selectCarpetPreview")}
        </div>

        <div class="glass rounded-3xl p-4">
          <div class="font-semibold">${t("redCarpetSetup")}</div>
          <div class="text-sm text-white/60 mt-1">${stepSubtitle()}</div>

          <div class="mt-4">
            <div class="text-sm text-white/60 mb-2">${t("rope")}</div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              ${ROPES.map((r) => cardHTML(r, state.selections.rope, "rope")).join("")}
            </div>
          </div>

          <div class="mt-6">
            <div class="text-sm text-white/60 mb-2">${t("carpet")}</div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
              ${CARPETS.map((c) => cardHTML(c, state.selections.carpet, "carpet")).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.step === 2) {
    const selected = MOUNTS.find(x => x.id === state.selections.mount);
    root.innerHTML = `
      <div class="grid gap-4">
        ${preview("mount", selected?.image, "selectMountPreview")}

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${MOUNTS.map((m) => cardHTML(m, state.selections.mount, "mount")).join("")}
        </div>
      </div>
    `;
  }

  if (state.step === 3) {
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

  // Bind option click events (for steps that show cards)
  root.querySelectorAll("[data-cat][data-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-cat");
      const id = btn.getAttribute("data-id");
      state.selections[cat] = id;

      // Scroll preview into view on mount selection (nice UX)
      if (cat === "mount") {
        setTimeout(() => {
          document.getElementById("preview-box")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      }

      renderAll();
    });
  });

  // Bind form events (step 3)
  if (state.step === 3) {
    const form = document.getElementById("details-form");
    if (form) {
      form.addEventListener("input", (e) => {
        const target = e.target;
        if (!target || !target.name) return;

        state.form[target.name] = target.value;

        // If event type changes, re-render to show/hide custom field
        if (target.name === "eventType") {
          renderAll();
          return;
        }

        // Autocomplete
        if (target.name === "location") handleLocationChange(target.value);
        renderNav(); // keep button state updated
      });
    }

    // Fill suggestion dropdown on render
    renderSuggestions();
  }
}

function renderNav() {
  const prevBtn = document.getElementById("btn-prev");
  const nextBtn = document.getElementById("btn-next");

  document.getElementById("prev-label").textContent = t("prevStep");
  document.getElementById("next-label").textContent = (state.step === STEPS.length - 1) ? t("submitRequest") : t("nextStep");

  // prev visibility
  prevBtn.style.visibility = state.step === 0 ? "hidden" : "visible";

  // next disabled state
  const valid = isStepValid();
  nextBtn.disabled = !valid;

  // flip icons in RTL
  const leftIcon = prevBtn.querySelector("i");
  const rightIcon = nextBtn.querySelector("i");
  if (isRTL(state.lang)) {
    leftIcon.setAttribute("data-lucide", "chevron-right");
    rightIcon.setAttribute("data-lucide", "chevron-left");
  } else {
    leftIcon.setAttribute("data-lucide", "chevron-left");
    rightIcon.setAttribute("data-lucide", "chevron-right");
  }

  // Recreate icons
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
  }
}

function goNext() {
  if (!isStepValid()) return;

  if (state.step < STEPS.length - 1) {
    state.step += 1;
    state.showSuggestions = false;
    renderAll();
    return;
  }

  // submit (step 3)
  submitToWhatsApp();
}

function finalEventTypeText() {
  const v = state.form.eventType;
  if (v === "Other") return (state.form.customEventType || t("other"));
  const key = v.toLowerCase();
  return t(key);
}

function submitToWhatsApp() {
  // minimal validation
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

  // show success panel (optional)
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

/* --- Israel-only location autocomplete (Nominatim) --- */
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

      // update input value without full re-render
      const input = document.getElementById("location-input");
      if (input) input.value = loc;
      renderSuggestions();
      renderNav();
    });
  });
}

/* --- Service worker register (skip on file://) --- */
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
  setDirAndFont();
  bindNavButtons();
  renderAll();
  registerSW();

  // Hide suggestions when clicking elsewhere
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
