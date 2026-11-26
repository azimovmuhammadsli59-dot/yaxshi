/* ==========================================================================
   SHIFO MED — Zamonaviy tibbiyot markazi
   Sof Vanilla JavaScript funksionalligi
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------------
     1. MA'LUMOTLAR BAZASI (Xizmatlar va Maqolalar — O'zbek tilida)
     ------------------------------------------------------------------------ */
  const SERVICES_DATA = {
    terapiya: {
      title: "Terapiya bo'limi",
      kicker: "Umumiy klinik ko'rik",
      description:
        "Terapiya bo'limida bemorning umumiy holati har tomonlama baholanadi, surunkali hamda mavsumiy kasalliklar erta bosqichda aniqlanadi va individual sog'lomlashtirish dasturi tuziladi.",
      procedures: [
        "Terapevtning birlamchi va takroriy maslahati",
        "Nafas olish, hazm qilish va yurak-qon tomir tizimi skriningi",
        "Kerakli laboratoriya va instrumental tekshiruvlarga yo'llanma",
        "Profilaktik check-up dasturlarini tuzish"
      ],
      price: "Konsultatsiya: 130 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Terapiya bo'limi"
    },
    kardiologiya: {
      title: "Kardiologiya bo'limi",
      kicker: "Yurak-qon tomir salomatligi",
      description:
        "Zamonaviy kardiologik tekshiruvlar yordamida gipertoniya, aritmiya va yurak ishemik kasalliklarini o'z vaqtida aniqlash hamda nazorat qilish xizmatlari ko'rsatiladi.",
      procedures: [
        "Oliy toifali kardiolog qabuli (Dr. Rustam Karimov)",
        "12 kanalli elektrokardiografiya (EKG) va tahlil",
        "Yurak ultratovush tekshiruvi (Exokardiografiya)",
        "Sutkalik arterial bosim va Xolter monitoringi"
      ],
      price: "Konsultatsiya: 180 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Dr. Rustam Karimov — Kardiologiya"
    },
    pediatriya: {
      title: "Pediatriya bo'limi",
      kicker: "Bolalar salomatligi",
      description:
        "Chaqaloqlik davridan o'smirlik yoshigacha bo'lgan bolalarning o'sishi, rivojlanishi, emlash jadvali va bolalar kasalliklarini ehtiyotkorlik bilan davolash xizmatlari.",
      procedures: [
        "Pediatr ko'rigi va jismoniy rivojlanish bahosi",
        "Bolalar shamollashi va allergik holatlarni davolash",
        "Maktab va bog'cha uchun tibbiy ko'riklar",
        "Ota-onalar uchun ovqatlantirish va parvarish tavsiyalari"
      ],
      price: "Konsultatsiya: 150 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Dr. Gulnora Qodirova — Pediatriya"
    },
    nevrologiya: {
      title: "Nevrologiya bo'limi",
      kicker: "Asab tizimi va umurtqa",
      description:
        "Bosh og'rig'i, migren, uyqu buzilishi, umurtqa pog'onasi osteoxondrozi hamda stress bilan bog'liq nevrologik holatlarni zamonaviy usullarda davolash.",
      procedures: [
        "Nevrolog mutaxassis ko'rigi (Dr. Temur Almazov)",
        "Bosh va bo'yin qon tomirlari dopplerografiyasi",
        "Umurtqa pog'onasi va periferik asablar tekshiruvi",
        "Kompleks dori-darmon va fizioterapiya kursi"
      ],
      price: "Konsultatsiya: 170 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Dr. Temur Almazov — Nevrologiya"
    },
    stomatologiya: {
      title: "Stomatologiya bo'limi",
      kicker: "Og'riqsiz tish davolash",
      description:
        "Zamonaviy anesteziya va raqamli diagnostika yordamida tishlarni og'riqsiz davolash, professional gigiyena hamda estetik tiklash xizmatlari.",
      procedures: [
        "Kariyes va pulpitni zamonaviy plombalar bilan davolash",
        "Ultratovush va AirFlow yordamida tish toshini tozalash",
        "Estetik vinirlar va tishlarni oqartirish",
        "Bolalar va kattalar uchun profilaktik ko'rik"
      ],
      price: "Ko'rik va maslahat: 120 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Stomatologiya bo'limi"
    },
    ginekologiya: {
      title: "Ginekologiya bo'limi",
      kicker: "Ayollar salomatligi",
      description:
        "Ayollar salomatligini asrash, gormonal muvozanatni tekshirish, homiladorlikka tayyorgarlik va muntazam profilaktik ko'riklar mutlaq maxfiylikda olib boriladi.",
      procedures: [
        "Ginekolog maslahati va kompleks ko'rik",
        "Kichik chanoq a'zolari UZI tekshiruvi",
        "Reproduktiv salomatlik va gormonal panel tahlillari",
        "Homiladorlik davrida individual kuzatuv"
      ],
      price: "Konsultatsiya: 160 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Ginekologiya bo'limi"
    },
    dermatologiya: {
      title: "Dermatologiya bo'limi",
      kicker: "Teri va soch parvarishi",
      description:
        "Allergik toshmalar, akne, ekzema, zamburug'li kasalliklar hamda teri xollarini raqamli dermatoskopiya orqali aniq tekshirish va davolash.",
      procedures: [
        "Dermatolog ko'rigi va raqamli dermatoskopiya",
        "Teri allergiyalari va dermatitlarni davolash",
        "Soch to'kilishi sabablarini aniqlash (trixoskopiya)",
        "Teri parvarishi bo'yicha shaxsiy tavsiyalar"
      ],
      price: "Konsultatsiya: 145 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Dermatologiya bo'limi"
    },
    uzi: {
      title: "UZI diagnostika",
      kicker: "Yuqori aniqlikdagi ultratovush",
      description:
        "Ekspert sinfidagi ultratovush apparatlari yordamida ichki a'zolar, qalqonsimon bez, yurak va qon tomirlarni xavfsiz hamda og'riqsiz tekshirish.",
      procedures: [
        "Qorin bo'shlig'i va buyraklar kompleks UZI tekshiruvi",
        "Qalqonsimon bez va sut bezlari ultratovush ko'rigi",
        "Qon tomirlar rangli dopplerografiyasi",
        "Homiladorlik skriningi (3D/4D tasvir)"
      ],
      price: "Tekshiruv: 110 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Dr. Dilnoza Axmedova — UZI diagnostika"
    },
    laboratoriya: {
      title: "Laboratoriya tahlillari",
      kicker: "Tezkor va aniq tahlillar",
      description:
        "Avtomatlashtirilgan zamonaviy analizatorlarda 200 dan ortiq turdagi klinik, biokimyoviy, gormonal va immunologik tahlillar o'tkaziladi.",
      procedures: [
        "Umumiy qon va siydik tahlillari",
        "Biokimyoviy ko'rsatkichlar (jigar, buyrak, glyukoza, lipidlar)",
        "Vitaminlar (D, B12, ferritin) va gormonlar tahlili",
        "Natijalarni elektron shaklda qisqa muddatda taqdim etish"
      ],
      price: "Tahlillar: 45 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Laboratoriya tahlillari"
    },
    oftalmologiya: {
      title: "Oftalmologiya bo'limi",
      kicker: "Ko'z salomatligi",
      description:
        "Kompyuterli avtorefraktometriya, ko'z ichki bosimini o'lchash, ko'z tubini ko'rish hamda kattalar va bolalar uchun ko'zoynak tanlash xizmatlari.",
      procedures: [
        "Ko'rish o'tkirligini kompyuter diagnostikasi",
        "Kontaktsiz ko'z ichki bosimi (tonometriya) o'lchovi",
        "Ko'z quruqligi va charchash sindromini davolash",
        "Aniq retsept asosida ko'zoynak yoki linza tanlash"
      ],
      price: "Konsultatsiya: 140 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Oftalmologiya bo'limi"
    },
    jarrohlik: {
      title: "Jarrohlik bo'limi",
      kicker: "Kam invaziv ambulator jarrohlik",
      description:
        "Statsionarda uzoq qolishni talab qilmaydigan zamonaviy ambulator jarrohlik muolajalari, jarohatlarga ishlov berish va tiklanish nazorati.",
      procedures: [
        "Jarroh maslahati va amaliyot oldi ko'rigi",
        "Yumshoq to'qimalardagi kichik xavfsiz o'smalarni olib tashlash",
        "Steril bog'lovlar va amaliyotdan keyingi parvarish",
        "Kam invaziv lazer va radioto'lqinli usullar"
      ],
      price: "Konsultatsiya: 160 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Jarrohlik bo'limi"
    },
    fizioterapiya: {
      title: "Fizioterapiya bo'limi",
      kicker: "Reabilitatsiya va tiklanish",
      description:
        "Jarohatlar, umurtqa kasalliklari va bo'g'im og'riqlaridan keyin organizmni dori-darmonsiz va xavfsiz usullarda tiklash muolajalari.",
      procedures: [
        "Elektroforez, magnitoterapiya va ultratovush terapiyasi",
        "Lazeroterapiya va zarba-to'lqinli muolajalar",
        "Shifobaxsh va tiklovchi massaj kurslari",
        "Har bir bemor uchun bosqichma-bosqich reabilitatsiya"
      ],
      price: "Muolaja: 90 000 so'mdan (namunaviy demo narx)",
      specialistOption: "Fizioterapiya bo'limi"
    }
  };

  const ARTICLES_DATA = {
    ovqatlanish: {
      title: "Sog'lom ovqatlanish: kunlik ratsionni to'g'ri tuzish qoidalari",
      kicker: "18 Noyabr, 2026 · Terapiya bo'limi tavsiyasi",
      paragraphs: [
        "To'g'ri va muvozanatli ovqatlanish insonning kunlik quvvati, hazm qilish tizimi va yurak-qon tomir salomatligining asosiy tayanchidir. Mutaxassislar tarelkangizning yarmini yangi sabzavot va ko'katlar, chorak qismini sifatli oqsil (baliq, tovuq go'shti, tuxum yoki dukkaklilar) va qolgan choragini butun donli mahsulotlar tashkil etishini tavsiya qiladi.",
        "Kun davomida shakarli ichimliklar va haddan tashqari sho'r taomlarni kamaytirish qon bosimi hamda qondagi qand miqdorini barqaror saqlashga yordam beradi. Suv ichish tartibini ham unutmang: tana vazniga mos ravishda kuniga 1.5–2 litr toza suv ichish moddalar almashinuvini faollashtiradi.",
        "Agar sizda ovqat hazm qilishda noqulaylik yoki vazn o'zgarishi kuzatilsa, o'zbilarmonlik bilan qat'iy parhez tutishdan ko'ra terapevt shifokor bilan maslahatlashish xavfsizroqdir."
      ]
    },
    yurak: {
      title: "Yurak salomatligi: profilaktik ko'rik qachon zarur?",
      kicker: "14 Noyabr, 2026 · Kardiologiya bo'limi tavsiyasi",
      paragraphs: [
        "Yurak-qon tomir kasalliklari ko'p hollarda dastlabki bosqichlarda yaqqol belgilarsiz kechadi. Shu sababli 35 yoshdan oshgan har bir inson yiliga kamida bir marta arterial bosimini, xolesterin darajasini tekshirtirishi va EKG ko'rigidan o'tishi maqsadga muvofiqdir.",
        "Yurakni asrash uchun kuniga kamida 30 daqiqa tez yurish, uyqu rejimini normallashtirish (7–8 soat), tuz iste'molini kuniga 5 grammdan oshirmaslik va stressni boshqarish muhim ahamiyatga ega.",
        "Ko'krak sohasida siqilish, zinadan ko'tarilganda nafas qisishi yoki yurak urishining tezlashishi sezilsa, kechiktirmasdan kardiolog ko'rigiga yozilish tavsiya etiladi."
      ]
    },
    immunitet: {
      title: "Immunitetni mustahkamlash: mavsumiy o'zgarishlarga tayyorgarlik",
      kicker: "09 Noyabr, 2026 · Profilaktika tavsiyasi",
      paragraphs: [
        "Ob-havo sovushi va kunlar qisqarishi bilan organizmning himoya tizimiga tushadigan yuklama ortadi. Immunitetni qo'llab-quvvatlashda mo'jizaviy bitta vosita emas, balki tizimli sog'lom odatlar eng yaxshi natija beradi.",
        "Ratsionga C vitaminiga boy sitrus mevalar, bulg'or qalampiri, zanjabil, yong'oqlar va fermentlangan mahsulotlarni kiritish foydalidir. Shuningdek, kuz-qish oylarida qondagi D vitamini miqdorini laboratoriya orqali tekshirtirib, shifokor tavsiyasi bilan me'yoriy dozani qabul qilish muhim.",
        "Har kuni xonani shamollatish, ochiq havoda sayr qilish va to'laqonli tungi uyqu virusli infeksiyalarga chidamlilikni sezilarli oshiradi."
      ]
    },
    bolalar: {
      title: "Bolalar salomatligi: maktab yoshidagi bolalarda ko'rik rejasi",
      kicker: "03 Noyabr, 2026 · Pediatriya bo'limi tavsiyasi",
      paragraphs: [
        "Maktab yoshidagi bolalarda o'quv yuklamasi va ekran qarshisida o'tkaziladigan vaqt ortishi sababli ko'rish qobiliyati va umurtqa pog'onasi holatini muntazam nazorat qilish zarur.",
        "Pediatrlar har o'quv yili boshida umumiy qon tahlili, oftalmolog ko'rigi hamda qomat tekshiruvidan o'tishni tavsiya etadi. Dars tayyorlash stoli va stulining bolaning bo'yiga mos bo'lishi skoliozning oldini oladi.",
        "Bundan tashqari, uyqudan kamida bir soat oldin telefon va planshetlardan foydalanishni cheklash bolaning asab tizimi dam olishi va diqqat jamlanishi uchun juda muhimdir."
      ]
    }
  };

  /* ------------------------------------------------------------------------
     2. YORDAMCHI FUNKSIYALAR (Toast, Formatlash, Sanalar)
     ------------------------------------------------------------------------ */
  function showToast(message, type) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast" + (type ? " toast--" + type : "");
    toast.setAttribute("role", "status");
    toast.textContent = message;
    container.appendChild(toast);

    window.setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";
      toast.style.transition = "opacity 200ms ease, transform 200ms ease";
      window.setTimeout(function () {
        toast.remove();
      }, 220);
    }, 3600);
  }

  function getTodayISO() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function formatUzbekPhone(rawValue) {
    let digits = rawValue.replace(/\D/g, "");
    if (digits.startsWith("998")) {
      digits = digits.slice(3);
    }
    digits = digits.slice(0, 9);

    if (digits.length === 0) {
      return rawValue.trim().startsWith("+") ? "+998 " : "";
    }

    let formatted = "+998";
    if (digits.length > 0) formatted += " " + digits.slice(0, 2);
    if (digits.length > 2) formatted += " " + digits.slice(2, 5);
    if (digits.length > 5) formatted += " " + digits.slice(5, 7);
    if (digits.length > 7) formatted += " " + digits.slice(7, 9);
    return formatted;
  }

  function isValidUzbekPhone(value) {
    const digits = value.replace(/\D/g, "");
    return /^998\d{9}$/.test(digits);
  }

  function isSundayISO(dateStr) {
    if (!dateStr) return false;
    const parts = dateStr.split("-");
    if (parts.length !== 3) return false;
    const dateObj = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return dateObj.getDay() === 0;
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return "";
    const parts = dateStr.split("-");
    if (parts.length !== 3) return dateStr;
    return parts[2] + "." + parts[1] + "." + parts[0];
  }

  /* ------------------------------------------------------------------------
     3. SAHIFA YUKLANISH ANIMATSIYASI VA FOOTER YILI
     ------------------------------------------------------------------------ */
  function initLoaderAndYear() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    const loader = document.getElementById("pageLoader");
    if (loader) {
      window.setTimeout(function () {
        loader.classList.add("is-hidden");
      }, 280);
    }
  }

  /* ------------------------------------------------------------------------
     4. STICKY NAVBAR, AKTIV HAVOLA, MOBIL MENYU VA SMOOTH SCROLL
     ------------------------------------------------------------------------ */
  function initNavigation() {
    const header = document.getElementById("siteHeader");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const backToTopBtn = document.getElementById("backToTopBtn");
    const navLinks = document.querySelectorAll(".nav-link");

    function closeMobileMenu() {
      if (!mobileMenuBtn || !mobileDrawer) return;
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.setAttribute("aria-label", "Mobil menyuni ochish");
      mobileDrawer.hidden = true;
    }

    function toggleMobileMenu() {
      if (!mobileMenuBtn || !mobileDrawer) return;
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!isExpanded));
      mobileMenuBtn.setAttribute(
        "aria-label",
        !isExpanded ? "Mobil menyuni yopish" : "Mobil menyuni ochish"
      );
      mobileDrawer.hidden = isExpanded;
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", toggleMobileMenu);
    }

    document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });

    // Silliq skroll (Smooth scroll with header offset)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        closeMobileMenu();

        const headerOffset = header ? header.offsetHeight : 72;
        const elementTop = target.getBoundingClientRect().top + window.scrollY;
        const offsetTop = Math.max(0, elementTop - headerOffset + 4);

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      });
    });

    // Skroll holatini kuzatish (Sticky header + Back-to-top)
    function handleScroll() {
      const y = window.scrollY;
      if (header) {
        header.classList.toggle("is-scrolled", y > 16);
      }
      if (backToTopBtn) {
        backToTopBtn.hidden = y < 420;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Aktiv menyu bandini IntersectionObserver bilan aniqlash
    const trackedSections = document.querySelectorAll("main section[id]");
    if ("IntersectionObserver" in window && trackedSections.length > 0) {
      const navObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");
            let matched = false;
            navLinks.forEach(function (link) {
              const targetId = link.getAttribute("data-section");
              if (targetId === id) {
                matched = true;
              }
            });
            if (matched) {
              navLinks.forEach(function (link) {
                link.classList.toggle("active", link.getAttribute("data-section") === id);
              });
            }
          });
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0
        }
      );

      trackedSections.forEach(function (sec) {
        navObserver.observe(sec);
      });
    }

    // Tashqariga bosilganda mobil menyuni yopish
    document.addEventListener("click", function (e) {
      if (!mobileDrawer || mobileDrawer.hidden) return;
      if (header && !header.contains(e.target)) {
        closeMobileMenu();
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. SCROLL REVEAL VA STATISTIKA SANAGICHI
     ------------------------------------------------------------------------ */
  function initScrollRevealAndStats() {
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
      );

      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }

    // Statistika animatsiyasi
    const statsSection = document.getElementById("statistika");
    const statNumbers = document.querySelectorAll(".stat-number");
    let statsAnimated = false;

    function animateStats() {
      if (statsAnimated) return;
      statsAnimated = true;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      statNumbers.forEach(function (el) {
        const target = Number(el.getAttribute("data-target") || "0");
        const suffix = el.getAttribute("data-suffix") || "";

        if (reduceMotion) {
          el.textContent = formatStatNumber(target) + suffix;
          return;
        }

        const duration = 1200;
        const startTime = performance.now();

        function step(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          el.textContent = formatStatNumber(current) + suffix;

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = formatStatNumber(target) + suffix;
          }
        }

        requestAnimationFrame(step);
      });
    }

    function formatStatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    if (statsSection && "IntersectionObserver" in window) {
      const statsObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateStats();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.35 }
      );
      statsObserver.observe(statsSection);
    } else {
      animateStats();
    }
  }

  /* ------------------------------------------------------------------------
     6. MODALLARNI BOSHQARISH TIZIMI
     ------------------------------------------------------------------------ */
  let lastFocusedElement = null;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    const firstInput = modal.querySelector("input, select, button.modal-close");
    if (firstInput) {
      window.setTimeout(function () {
        firstInput.focus();
      }, 30);
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.hidden = true;

    const anyOpen = document.querySelector(".modal-overlay:not([hidden])");
    if (!anyOpen) {
      document.body.style.overflow = "";
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function initModals() {
    document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        closeModal(btn.getAttribute("data-close-modal"));
      });
    });

    document.querySelectorAll(".modal-overlay").forEach(function (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
          closeModal(overlay.id);
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const openModals = document.querySelectorAll(".modal-overlay:not([hidden])");
        if (openModals.length > 0) {
          closeModal(openModals[openModals.length - 1].id);
        }
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. XIZMATLAR FILTRI VA BATAFSIL MODALLAR (Xizmatlar & Maqolalar)
     ------------------------------------------------------------------------ */
  function initServicesAndArticles() {
    const filterTabs = document.querySelectorAll(".filter-tab");
    const serviceCards = document.querySelectorAll(".service-card");

    filterTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        const filter = tab.getAttribute("data-filter");

        filterTabs.forEach(function (t) {
          const isActive = t === tab;
          t.classList.toggle("active", isActive);
          t.setAttribute("aria-selected", String(isActive));
        });

        serviceCards.forEach(function (card) {
          const category = card.getAttribute("data-category");
          const shouldShow = filter === "all" || category === filter;
          card.classList.toggle("is-hidden", !shouldShow);
          if (shouldShow) {
            card.classList.add("is-visible");
          }
        });
      });
    });

    // Xizmat "Batafsil" tugmalari
    document.querySelectorAll("[data-service-detail]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-service-detail");
        const service = SERVICES_DATA[key];
        if (!service) return;

        const kickerEl = document.getElementById("infoModalKicker");
        const titleEl = document.getElementById("infoModalTitle");
        const bodyEl = document.getElementById("infoModalBody");
        const footerEl = document.getElementById("infoModalFooter");

        kickerEl.textContent = service.kicker;
        titleEl.textContent = service.title;

        bodyEl.innerHTML = "";
        const descP = document.createElement("p");
        descP.textContent = service.description;
        bodyEl.appendChild(descP);

        const listEl = document.createElement("ul");
        listEl.className = "info-modal-list";
        service.procedures.forEach(function (proc) {
          const li = document.createElement("li");
          li.textContent = proc;
          listEl.appendChild(li);
        });
        bodyEl.appendChild(listEl);

        const priceBox = document.createElement("div");
        priceBox.className = "info-modal-meta";
        priceBox.textContent = service.price;
        bodyEl.appendChild(priceBox);

        footerEl.innerHTML = "";
        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.className = "btn btn-secondary";
        closeBtn.textContent = "Yopish";
        closeBtn.addEventListener("click", function () {
          closeModal("infoModal");
        });

        const bookBtn = document.createElement("button");
        bookBtn.type = "button";
        bookBtn.className = "btn btn-primary";
        bookBtn.textContent = "Shifokorga yozilish";
        bookBtn.addEventListener("click", function () {
          closeModal("infoModal");
          openBookingModalWithSpecialist(service.specialistOption);
        });

        footerEl.appendChild(closeBtn);
        footerEl.appendChild(bookBtn);

        openModal("infoModal");
      });
    });

    // Tibbiy yangiliklar "Batafsil" tugmalari
    document.querySelectorAll("[data-article-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const key = btn.getAttribute("data-article-id");
        const article = ARTICLES_DATA[key];
        if (!article) return;

        const kickerEl = document.getElementById("infoModalKicker");
        const titleEl = document.getElementById("infoModalTitle");
        const bodyEl = document.getElementById("infoModalBody");
        const footerEl = document.getElementById("infoModalFooter");

        kickerEl.textContent = article.kicker;
        titleEl.textContent = article.title;

        bodyEl.innerHTML = "";
        article.paragraphs.forEach(function (text) {
          const p = document.createElement("p");
          p.textContent = text;
          bodyEl.appendChild(p);
        });

        footerEl.innerHTML = "";
        const closeBtn = document.createElement("button");
        closeBtn.type = "button";
        closeBtn.className = "btn btn-secondary";
        closeBtn.textContent = "Yopish";
        closeBtn.addEventListener("click", function () {
          closeModal("infoModal");
        });

        const bookBtn = document.createElement("button");
        bookBtn.type = "button";
        bookBtn.className = "btn btn-primary";
        bookBtn.textContent = "Maslahatga yozilish";
        bookBtn.addEventListener("click", function () {
          closeModal("infoModal");
          openBookingModalWithSpecialist("");
        });

        footerEl.appendChild(closeBtn);
        footerEl.appendChild(bookBtn);

        openModal("infoModal");
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. QABULGA YOZILISH FORMALARI VA VALIDATSIYA
     ------------------------------------------------------------------------ */
  function openBookingModalWithSpecialist(specialistValue) {
    const select = document.getElementById("modalBookingSpecialist");
    if (select && specialistValue) {
      select.value = specialistValue;
    }
    const mobileDrawer = document.getElementById("mobileDrawer");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    if (mobileDrawer && !mobileDrawer.hidden) {
      mobileDrawer.hidden = true;
      if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
    }
    openModal("bookingModal");
  }

  function showBookingSuccessModal(data) {
    const summaryList = document.getElementById("bookingSummaryList");
    if (summaryList) {
      summaryList.innerHTML = "";
      const rows = [
        ["Bemor:", data.fullName],
        ["Telefon:", data.phone],
        ["Mutaxassis:", data.specialist],
        ["Sana:", formatDisplayDate(data.date)],
        ["Vaqt:", data.time]
      ];
      if (data.note) {
        rows.push(["Izoh:", data.note]);
      }

      rows.forEach(function (pair) {
        const div = document.createElement("div");
        div.className = "summary-row";
        const dt = document.createElement("dt");
        dt.textContent = pair[0];
        const dd = document.createElement("dd");
        dd.textContent = pair[1];
        div.appendChild(dt);
        div.appendChild(dd);
        summaryList.appendChild(div);
      });
    }

    openModal("successModal");
    showToast("Qabulga arizangiz muvaffaqiyatli shakllantirildi!", "success");
  }

  function setFieldError(inputEl, errorEl, message) {
    if (!inputEl || !errorEl) return;
    if (message) {
      inputEl.classList.add("is-invalid");
      inputEl.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
    } else {
      inputEl.classList.remove("is-invalid");
      inputEl.removeAttribute("aria-invalid");
      errorEl.textContent = "";
    }
  }

  function setupBookingForm(config) {
    const form = document.getElementById(config.formId);
    if (!form) return;

    const nameInput = document.getElementById(config.nameId);
    const phoneInput = document.getElementById(config.phoneId);
    const specialistSelect = document.getElementById(config.specialistId);
    const dateInput = document.getElementById(config.dateId);
    const timeSelect = document.getElementById(config.timeId);
    const noteInput = document.getElementById(config.noteId);
    const submitBtn = document.getElementById(config.submitId);

    const nameErr = document.getElementById(config.nameErrorId);
    const phoneErr = document.getElementById(config.phoneErrorId);
    const specErr = document.getElementById(config.specialistErrorId);
    const dateErr = document.getElementById(config.dateErrorId);
    const timeErr = document.getElementById(config.timeErrorId);

    if (dateInput) {
      dateInput.min = getTodayISO();
    }

    function validateField(field) {
      if (field === nameInput) {
        const val = nameInput.value.trim();
        if (!val) {
          setFieldError(nameInput, nameErr, "Iltimos, bemorning ism-familiyasini kiriting.");
          return false;
        }
        if (val.length < 3) {
          setFieldError(nameInput, nameErr, "Ism-familiya kamida 3 ta belgidan iborat bo'lishi kerak.");
          return false;
        }
        setFieldError(nameInput, nameErr, "");
        return true;
      }

      if (field === phoneInput) {
        const val = phoneInput.value.trim();
        if (!val) {
          setFieldError(phoneInput, phoneErr, "Iltimos, telefon raqamingizni kiriting.");
          return false;
        }
        if (!isValidUzbekPhone(val)) {
          setFieldError(phoneInput, phoneErr, "O'zbekiston raqamini to'g'ri kiriting: +998 XX XXX XX XX");
          return false;
        }
        setFieldError(phoneInput, phoneErr, "");
        return true;
      }

      if (field === specialistSelect) {
        if (!specialistSelect.value) {
          setFieldError(specialistSelect, specErr, "Iltimos, mutaxassis yoki bo'limni tanlang.");
          return false;
        }
        setFieldError(specialistSelect, specErr, "");
        return true;
      }

      if (field === dateInput) {
        const val = dateInput.value;
        if (!val) {
          setFieldError(dateInput, dateErr, "Iltimos, qabul sanasini tanlang.");
          return false;
        }
        if (val < getTodayISO()) {
          setFieldError(dateInput, dateErr, "O'tib ketgan sanani tanlab bo'lmaydi.");
          return false;
        }
        if (isSundayISO(val)) {
          setFieldError(dateInput, dateErr, "Yakshanba dam olish kuni. Dushanba – Shanba kunini tanlang.");
          return false;
        }
        setFieldError(dateInput, dateErr, "");
        return true;
      }

      if (field === timeSelect) {
        if (!timeSelect.value) {
          setFieldError(timeSelect, timeErr, "Iltimos, qabul vaqtini tanlang.");
          return false;
        }
        setFieldError(timeSelect, timeErr, "");
        return true;
      }

      return true;
    }

    [nameInput, phoneInput, specialistSelect, dateInput, timeSelect].forEach(function (el) {
      if (!el) return;
      el.addEventListener("input", function () {
        if (el.classList.contains("is-invalid")) {
          validateField(el);
        }
      });
      el.addEventListener("change", function () {
        validateField(el);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const validName = validateField(nameInput);
      const validPhone = validateField(phoneInput);
      const validSpec = validateField(specialistSelect);
      const validDate = validateField(dateInput);
      const validTime = validateField(timeSelect);

      if (!validName || !validPhone || !validSpec || !validDate || !validTime) {
        showToast("Iltimos, barcha majburiy maydonlarni to'g'ri to'ldiring.", "error");
        const firstInvalid = form.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const payload = {
        fullName: nameInput.value.trim(),
        phone: formatUzbekPhone(phoneInput.value),
        specialist: specialistSelect.value,
        date: dateInput.value,
        time: timeSelect.value,
        note: noteInput ? noteInput.value.trim() : ""
      };

      const btnLabel = submitBtn ? submitBtn.querySelector(".btn-label") : null;
      const originalText = btnLabel ? btnLabel.textContent : "";

      if (submitBtn) {
        submitBtn.classList.add("is-loading");
        submitBtn.disabled = true;
      }
      if (btnLabel) {
        btnLabel.textContent = "Yuborilmoqda...";
      }

      window.setTimeout(function () {
        if (submitBtn) {
          submitBtn.classList.remove("is-loading");
          submitBtn.disabled = false;
        }
        if (btnLabel) {
          btnLabel.textContent = originalText;
        }

        form.reset();
        if (config.closeModalId) {
          closeModal(config.closeModalId);
        }
        showBookingSuccessModal(payload);
      }, 350);
    });
  }

  function initAllBookingControls() {
    // Telefon maydonlari uchun +998 avtomatik formatlash
    document.querySelectorAll(".phone-input").forEach(function (input) {
      input.addEventListener("focus", function () {
        if (!input.value.trim()) {
          input.value = "+998 ";
        }
      });
      input.addEventListener("input", function () {
        input.value = formatUzbekPhone(input.value);
      });
    });

    // Header va mobil menyu "Qabulga yozilish" tugmalari
    document.querySelectorAll('[data-open-booking="true"]').forEach(function (btn) {
      btn.addEventListener("click", function () {
        openBookingModalWithSpecialist("");
      });
    });

    // Shifokor kartalari "Qabulga yozilish" tugmalari
    document.querySelectorAll("[data-book-doctor]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const docValue = btn.getAttribute("data-book-doctor") || "";
        openBookingModalWithSpecialist(docValue);
      });
    });

    // Sahifadagi asosiy forma
    setupBookingForm({
      formId: "inlineBookingForm",
      nameId: "bookingName",
      phoneId: "bookingPhone",
      specialistId: "bookingSpecialist",
      dateId: "bookingDate",
      timeId: "bookingTime",
      noteId: "bookingNote",
      submitId: "inlineBookingSubmit",
      nameErrorId: "bookingNameError",
      phoneErrorId: "bookingPhoneError",
      specialistErrorId: "bookingSpecialistError",
      dateErrorId: "bookingDateError",
      timeErrorId: "bookingTimeError"
    });

    // Modal oyna formasi
    setupBookingForm({
      formId: "modalBookingForm",
      nameId: "modalBookingName",
      phoneId: "modalBookingPhone",
      specialistId: "modalBookingSpecialist",
      dateId: "modalBookingDate",
      timeId: "modalBookingTime",
      noteId: "modalBookingNote",
      submitId: "modalBookingSubmit",
      nameErrorId: "modalBookingNameError",
      phoneErrorId: "modalBookingPhoneError",
      specialistErrorId: "modalBookingSpecialistError",
      dateErrorId: "modalBookingDateError",
      timeErrorId: "modalBookingTimeError",
      closeModalId: "bookingModal"
    });
  }

  /* ------------------------------------------------------------------------
     9. BEMORLAR FIKRLARI KARUSELI
     ------------------------------------------------------------------------ */
  function initReviewsCarousel() {
    const viewport = document.getElementById("reviewsViewport");
    const track = document.getElementById("reviewsTrack");
    const prevBtn = document.getElementById("prevReviewBtn");
    const nextBtn = document.getElementById("nextReviewBtn");
    const dotsContainer = document.getElementById("reviewsDots");

    if (!viewport || !track || !dotsContainer) return;

    const cards = Array.from(track.querySelectorAll(".review-card"));
    if (cards.length === 0) return;

    let currentIndex = 0;

    function getVisibleCount() {
      return window.innerWidth <= 640 ? 1 : 2;
    }

    function getMaxIndex() {
      return Math.max(0, cards.length - getVisibleCount());
    }

    function buildDots() {
      const totalStops = getMaxIndex() + 1;
      dotsContainer.innerHTML = "";
      for (let i = 0; i < totalStops; i++) {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "slider-dot" + (i === currentIndex ? " active" : "");
        dot.setAttribute("aria-label", i + 1 + "-fikrlar sahifasi");
        dot.addEventListener("click", function () {
          goToSlide(i);
        });
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider() {
      const maxIndex = getMaxIndex();
      if (currentIndex > maxIndex) currentIndex = maxIndex;
      if (currentIndex < 0) currentIndex = 0;

      const cardWidth = cards[0].getBoundingClientRect().width;
      const gap = 24;
      const offset = currentIndex * (cardWidth + gap);
      track.style.transform = "translateX(-" + offset + "px)";

      const dots = dotsContainer.querySelectorAll(".slider-dot");
      dots.forEach(function (dot, idx) {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }

    function goToSlide(index) {
      const maxIndex = getMaxIndex();
      if (index < 0) {
        currentIndex = maxIndex;
      } else if (index > maxIndex) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      updateSlider();
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goToSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goToSlide(currentIndex + 1);
      });
    }

    // Sensorli (touch) surish qo'llab-quvvatlashi
    let touchStartX = 0;
    viewport.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    viewport.addEventListener(
      "touchend",
      function (e) {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 45) {
          goToSlide(diff < 0 ? currentIndex + 1 : currentIndex - 1);
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", function () {
      buildDots();
      updateSlider();
    });

    buildDots();
    updateSlider();
  }

  /* ------------------------------------------------------------------------
     10. FAQ AKKORDEON
     ------------------------------------------------------------------------ */
  function initFaqAccordion() {
    const accordion = document.getElementById("faqAccordion");
    if (!accordion) return;

    const items = accordion.querySelectorAll(".faq-item");
    items.forEach(function (item) {
      const trigger = item.querySelector(".faq-trigger");
      const panel = item.querySelector(".faq-panel");
      if (!trigger || !panel) return;

      trigger.addEventListener("click", function () {
        const isOpen = item.classList.contains("is-open");

        // Boshqalarini yopish
        items.forEach(function (other) {
          if (other !== item) {
            other.classList.remove("is-open");
            const otherBtn = other.querySelector(".faq-trigger");
            const otherPanel = other.querySelector(".faq-panel");
            if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
            if (otherPanel) otherPanel.hidden = true;
          }
        });

        item.classList.toggle("is-open", !isOpen);
        trigger.setAttribute("aria-expanded", String(!isOpen));
        panel.hidden = isOpen;
      });
    });
  }

  /* ------------------------------------------------------------------------
     11. ALOQA FORMASI VA XARITA TUGMALARI
     ------------------------------------------------------------------------ */
  function initContactSection() {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("contactName");
    const phoneInput = document.getElementById("contactPhone");
    const messageInput = document.getElementById("contactMessage");
    const nameErr = document.getElementById("contactNameError");
    const phoneErr = document.getElementById("contactPhoneError");
    const msgErr = document.getElementById("contactMessageError");
    const submitBtn = document.getElementById("contactSubmitBtn");
    const successBox = document.getElementById("contactSuccessBox");

    if (contactForm) {
      function validateContactField(field) {
        if (field === nameInput) {
          const val = nameInput.value.trim();
          if (!val) {
            setFieldError(nameInput, nameErr, "Iltimos, ismingizni kiriting.");
            return false;
          }
          if (val.length < 2) {
            setFieldError(nameInput, nameErr, "Ism kamida 2 ta harfdan iborat bo'lishi kerak.");
            return false;
          }
          setFieldError(nameInput, nameErr, "");
          return true;
        }

        if (field === phoneInput) {
          const val = phoneInput.value.trim();
          if (!val) {
            setFieldError(phoneInput, phoneErr, "Iltimos, telefon raqamingizni kiriting.");
            return false;
          }
          if (!isValidUzbekPhone(val)) {
            setFieldError(phoneInput, phoneErr, "O'zbekiston raqamini kiriting: +998 XX XXX XX XX");
            return false;
          }
          setFieldError(phoneInput, phoneErr, "");
          return true;
        }

        if (field === messageInput) {
          const val = messageInput.value.trim();
          if (!val) {
            setFieldError(messageInput, msgErr, "Iltimos, xabar matnini yozing.");
            return false;
          }
          if (val.length < 8) {
            setFieldError(messageInput, msgErr, "Xabar kamida 8 ta belgidan iborat bo'lishi kerak.");
            return false;
          }
          setFieldError(messageInput, msgErr, "");
          return true;
        }

        return true;
      }

      [nameInput, phoneInput, messageInput].forEach(function (el) {
        if (!el) return;
        el.addEventListener("input", function () {
          if (el.classList.contains("is-invalid")) {
            validateContactField(el);
          }
        });
      });

      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (successBox) successBox.hidden = true;

        const v1 = validateContactField(nameInput);
        const v2 = validateContactField(phoneInput);
        const v3 = validateContactField(messageInput);

        if (!v1 || !v2 || !v3) {
          showToast("Aloqa formasidagi xatoliklarni tuzating.", "error");
          const firstInvalid = contactForm.querySelector(".is-invalid");
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        const btnLabel = submitBtn ? submitBtn.querySelector(".btn-label") : null;
        const originalText = btnLabel ? btnLabel.textContent : "";

        if (submitBtn) {
          submitBtn.classList.add("is-loading");
          submitBtn.disabled = true;
        }
        if (btnLabel) {
          btnLabel.textContent = "Yuborilmoqda...";
        }

        window.setTimeout(function () {
          if (submitBtn) {
            submitBtn.classList.remove("is-loading");
            submitBtn.disabled = false;
          }
          if (btnLabel) {
            btnLabel.textContent = originalText;
          }

          contactForm.reset();
          if (successBox) successBox.hidden = false;
          showToast("Xabaringiz muvaffaqiyatli yuborildi (namoyish rejimi)!", "success");
        }, 350);
      });
    }

    // Manzilni nusxalash tugmasi
    const copyAddressBtn = document.getElementById("copyAddressBtn");
    if (copyAddressBtn) {
      copyAddressBtn.addEventListener("click", function () {
        const addressText = "Toshkent shahri, namunaviy manzil — SHIFO MED tibbiyot markazi";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard
            .writeText(addressText)
            .then(function () {
              showToast("Klinika manzili nusxalandi.", "success");
            })
            .catch(function () {
              showToast("Manzil: Toshkent shahri, namunaviy manzil.", "success");
            });
        } else {
          showToast("Manzil: Toshkent shahri, namunaviy manzil.", "success");
        }
      });
    }

    // Ijtimoiy tarmoq havolalari uchun namoyish xabari
    document.querySelectorAll("[data-social]").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const network = link.getAttribute("data-social");
        showToast("SHIFO MED " + network + " sahifasi (namoyish havolasi).", "success");
      });
    });
  }

  /* ------------------------------------------------------------------------
     12. BARCHA MODULLARNI ISHGA TUSHIRISH
     ------------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", function () {
    initLoaderAndYear();
    initNavigation();
    initScrollRevealAndStats();
    initModals();
    initServicesAndArticles();
    initAllBookingControls();
    initReviewsCarousel();
    initFaqAccordion();
    initContactSection();
  });
})();
