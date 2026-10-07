/* Portfolio metinleri ve proje bağlantıları. Kişisel içerikleri bu dosyadan güncelleyebilirsiniz. */
window.PORTFOLIO = {
  name: "Eren Kötüğ",
  intro: "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği mezunuyum. Önümüzdeki dönemde Java ile backend projeleri geliştirmeye; temiz kod, veritabanı tasarımı ve sürdürülebilir servisler konusunda deneyim kazanmaya odaklanıyorum.",
  about: "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği mezunuyum. Yazılım geliştirme alanında Java ile ilerlemeyi; backend servisleri ve web uygulamaları geliştirerek bu alandaki yetkinliğimi derinleştirmeyi hedefliyorum. Yazılım stajımda .NET Core MVC ve Razor ile kurumsal uygulamalar üzerinde çalıştım; ağ stajımda Cisco altyapıları, VLAN, DHCP, routing ve sanallaştırma süreçlerini deneyimledim. Bitirme projemde ve makine öğrenmesi çalışmalarımda bilgisayarlı görü çözümleri geliştirdim.",
  email: "erenkt11@gmail.com",
  location: "Bursa / İzmir, Türkiye",
  github: "https://github.com/erenkotug",
  linkedin: "https://www.linkedin.com/in/erenkotug/",
  resumeTr: "public/Eren-Kotug-CV-TR.pdf",
  resumeEn: "public/Eren-Kotug-CV-EN.pdf",
  skills: [
    { title: "Programlama dilleri", items: ["Java", "C#", "Python"] },
    { title: "Web & backend", items: [".NET Core MVC", "FastAPI", "React", "Razor"] },
    { title: "Yapay zekâ & görü", items: ["YOLO", "Poz tahmini", "Nesne takibi", "XGBoost", "Random Forest"] },
    { title: "Veri & depolama", items: ["SQL Server", "SQLite", "PostgreSQL"] },
    { title: "Ağ & altyapı", items: ["VLAN", "Routing", "DHCP", "Cisco Packet Tracer", "Sanallaştırma"] },
    { title: "Araçlar", items: ["Git", "GitHub", "Docker", "Visual Studio", "CVAT", "Roboflow"] }
  ],
  experience: [
    { company: "Akpınar Bilişim Hizmetleri", role: "Network & IT Stajyeri", date: "Haziran 2025 — Ağustos 2025", description: "Cisco teknolojileriyle VLAN, routing ve DHCP servislerini içeren kurumsal ağ altyapılarının tasarım ve yapılandırma süreçlerinde görev aldım. Sanallaştırma ortamları ile ağ cihazlarının kurulum ve yönetimine destek oldum. Sunucu odası operasyonları, kablolama düzeni, UPS entegrasyonu ve altyapı izleme çalışmalarında deneyim kazandım." },
    { company: "İletişim Yazılım A.Ş.", role: "Yazılım Geliştirme Stajyeri", date: "Haziran 2024 — Eylül 2024", description: ".NET Core MVC ve Razor kullanarak web uygulamaları geliştirdim; kullanıcı deneyimi ve sistem yanıt hızını iyileştirmeye yönelik çalışmalara katkı sundum. Veritabanı tabanlı işlevleri uygulamalara entegre edip veri erişim süreçlerini optimize ettim. Gerçek yazılım projelerinde backend geliştirme ve çevik iş akışları deneyimi kazandım." }
  ],
  education: "Dokuz Eylül Üniversitesi · Bilgisayar Mühendisliği",
  projects: [
    { id: "volleyball", number: "01", name: "Voleybol Performans Analizi", category: "BİTİRME TEZİ · BİLGİSAYARLI GÖRÜ", summary: "Maç videosundan oyuncu ve top hareketlerini işleyerek performans içgörüleri sunan web tabanlı analiz platformu.", description: "Video analizi, bilgisayarlı görü ve web geliştirmeyi bir araya getiren bitirme tezi projesi. Sistem; video işleme adımlarını, tespit sonuçlarını ve analiz çıktılarını bir arayüzde buluşturan uçtan uca bir akış üzerine kuruldu.", points: ["YOLO ile oyuncu ve top tespiti; poz tahmini ve nesne takibi.", "Saha filtreleme ve takım sınıflandırma adımlarıyla maç akışını zenginleştirme.", "FastAPI backend ve React arayüz üzerinden analiz sonuçları ile istatistikleri sunma.", "Model ve veri etiketleme sürecinde CVAT tabanlı iş akışından yararlanma."], stack: ["Python", "FastAPI", "React", "SQLite", "YOLO", "Pose Estimation", "CVAT"], github: "https://github.com/erenkotug/volleyball-analytics", githubRepository: true, theme: "volleyball", visual: "court" },
    { id: "fraud-detection", number: "02", name: "Finansal Dolandırıcılık Tespiti", category: "MAKİNE ÖĞRENMESİ · SINIFLANDIRMA", summary: "IEEE-CIS işlem verileri üzerinde şüpheli finansal işlemleri sınıflandırmaya yönelik modelleme çalışması.", description: "Dengesiz sınıf dağılımına sahip işlem verileri üzerinde veri hazırlama ve model karşılaştırmasına odaklanan makine öğrenmesi çalışması. Değerlendirme, tek bir doğruluk değerine bağlı kalmadan ROC-AUC ve çapraz doğrulama yaklaşımıyla ele alındı.", points: ["Veri ön işleme ve özellik mühendisliği adımları.", "Dengesiz veri dağılımına uygun modelleme ve değerlendirme yaklaşımı.", "XGBoost ve Random Forest modellerinin ROC-AUC ile karşılaştırılması.", "Tekrarlanabilir analiz akışı için Google Colab kullanımı."], stack: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Google Colab", "IEEE-CIS"], github: "https://github.com/erenkotug", theme: "fraud", visual: "network" },
    { id: "ecommerce", number: "03", name: "E-Ticaret Market Platformu", category: ".NET CORE · WEB UYGULAMASI", summary: "Northwind veri modeli üzerinde ürün ve sipariş akışları sunan .NET Core MVC uygulaması.", description: "Northwind veri tabanı etrafında geliştirilen platform, dinamik Razor sayfalarını modüler backend bileşenleriyle bir araya getiriyor. Çalışmada veri odaklı sayfalar ve sipariş yönetimi akışları üzerine odaklanıldı.", points: ["Ürün ve sipariş yönetimi için dinamik sayfalar.", "Razor ve MVC yapısıyla modüler sunucu tarafı bileşenler.", "SQL Server üzerinde ilişkisel veri erişimi ve sorgu iyileştirmeleri.", "Northwind veri modeliyle e-ticaret iş akışlarının örneklenmesi."], stack: ["C#", ".NET Core MVC", "Razor", "SQL Server", "Northwind"], github: "https://github.com/erenkotug/E-commerce_Market_Website", githubRepository: true, theme: "ecommerce", visual: "store" },
    { id: "autonomous-car", number: "04", name: "Otonom Engel Algılayan Araç", category: "GÖMÜLÜ SİSTEM · ROBOTİK", summary: "Ultrasonik sensörlerle çevresini algılayıp hareketini belirleyen ESP32 tabanlı araç.", description: "Gömülü yazılım, sensör verisi ve gerçek zamanlı karar akışını bir araya getiren otonom araç projesi. Araç, sensörlerden aldığı mesafe bilgisini kullanarak engellere tepki verir ve durumunu kullanıcıya aktarır.", points: ["ESP32 üzerinde sensör okuma ve hareket kontrol akışı.", "Ultrasonik mesafe ölçümü ile engel algılama.", "LCD ekran ve buzzer üzerinden durum geri bildirimi.", "C++ ile gerçek zamanlı gömülü sistem davranışı."], stack: ["C++", "ESP32", "Ultrasonik sensör", "LCD", "Gömülü sistemler"], github: "https://github.com/erenkotug", theme: "robot", visual: "circuit" }
  ]
};

window.PORTFOLIO_LOCALES = {
  tr: {
    intro: window.PORTFOLIO.intro,
    about: window.PORTFOLIO.about,
    location: window.PORTFOLIO.location,
    education: window.PORTFOLIO.education,
    skills: window.PORTFOLIO.skills,
    experience: window.PORTFOLIO.experience,
    projects: {},
    preview: {
      court: ["MAÇ ANALİZİ / 04:32", "OYUNCU TAKİBİ", "POZ TAHMİNİ", "AKTİF"],
      network: ["İŞLEM SINIFLANDIRMA", "ÖZELLİK MÜHENDİSLİĞİ", "MODEL / XGB"],
      store: ["ÜRÜNLER", "SİPARİŞLER", "HESAP", "ÜRÜN"],
      circuit: ["OTONOM SİSTEM / ESP32", "ULTRASONİK SENSÖR", "BAĞLI"]
    },
    casePages: {
      volleyball: { art: "VİDEO ANALİZİ / VOLEYBOL", stat: "POZ TAHMİNİ / TAKİP / TAKIM", approachTitle: "Maç görüntüsünden<br />anlamlı içgörüye.", note: "Bu sayfa projenin kapsamını ve teknik akışını anlatan portfolyo incelemesidir. Model ve API bileşenlerinin çalıştırılması kendi uygulama ortamını gerektirir.", flow: ["VİDEO GİRİŞİ", "OYUNCU / TOP TESPİTİ", "MAÇ İSTATİSTİKLERİ"] },
      "fraud-detection": { art: "ÖZELLİKLER / MODEL KARŞILAŞTIRMASI", stat: "ROC-AUC / ÇAPRAZ DOĞRULAMA", approachTitle: "Veriden dengeli<br />karar sistemine.", note: "Bu sayfa projenin kapsamını ve teknik akışını anlatan portfolyo incelemesidir. Model değerlendirme metrikleri veri ve eğitim koşullarına göre yorumlanmalıdır.", flow: ["İŞLEM VERİLERİ", "ÖZELLİK MÜHENDİSLİĞİ", "RİSK SINIFLANDIRMA"] },
      ecommerce: { art: "NORTHWIND / WEB UYGULAMASI", stat: "KATALOG / SİPARİŞ / VERİ", approachTitle: "İş akışlarını<br />bir araya getiren web.", note: "Bu sayfa projenin kapsamını ve teknik akışını anlatan portfolyo incelemesidir. Uygulamanın gerçek zamanlı demosu ayrı bir .NET ve SQL Server çalışma ortamı gerektirir.", flow: ["ÜRÜN LİSTESİ", "SİPARİŞ YÖNETİMİ", "VERİ TABANLI SAYFALAR"] },
      "autonomous-car": { art: "SENSÖR SİSTEMİ / ESP32", stat: "ANLIK SENSÖR VERİSİ", approachTitle: "Algıla, karar ver,<br />harekete geç.", note: "Bu sayfa projenin kapsamını ve teknik akışını anlatan portfolyo incelemesidir. Gömülü yazılımın çalıştırılması ESP32 donanımı ve sensör bağlantıları gerektirir.", flow: ["MESAFE SENSÖRÜ", "ESP32 KARAR AKIŞI", "MOTOR / KULLANICI GERİ BİLDİRİMİ"] }
    },
    static: {
      homeLabel: "Eren Kötüğ ana sayfa", menuOpen: "Menüyü aç", menuClose: "Menüyü kapat", navLabel: "Ana menü",
      navWork: "Projeler", navAbout: "Hakkımda", navExperience: "Deneyim", navContact: "İletişim",
      heroEyebrow: "MERHABA, BEN EREN KÖTÜĞ", heroTitle: "Bilgisayar Mühendisi<br /><span class=\"headline-indent\">ve <em>Yazılım Geliştirici.</em></span>",
      heroArt: "Backend, yapay zekâ ve web arayüzünü temsil eden katmanlı grafik", workCta: "Projelerimi incele", contactCta: "İletişime geç",
      resumeTr: "Türkçe CV", resumeEn: "İngilizce CV", languageLabel: "Site dili",
      artAi: "YAPAY ZEKÂ", artSystems: "SİSTEMLER", artWeb: "WEB GELİŞTİRME", artLabel: "ÇALIŞMA<br />ALANLARIM",
      heroProjects: "PROJELERİ GÖR", heroLocation: "BURSA / İZMİR",
      workEyebrow: "PROJELER", workTitle: "Seçili <em>çalışmalar.</em>", workNote: "Üzerinde çalıştığım projeler ve<br />kullandığım teknolojiler.",
      workBottom: "SEÇİLMİŞ ÇALIŞMALAR", moreGithub: "GITHUB’DA DAHA FAZLASI", projectView: "PROJEYİ İNCELE", projectDetails: "Detaylar", githubRepo: "GitHub deposu", githubProfile: "GitHub profilim", projectAlt: "proje detaylarını incele",
      aboutEyebrow: "HAKKIMDA", aboutTitle: "Kısaca<br /><em>ben.</em>", aboutStamp: "DEÜ<br /><b>BİLGİSAYAR<br />MÜHENDİSLİĞİ</b><i>✳</i>", education: "EĞİTİM", internshipLink: "Staj deneyimlerim",
      experienceEyebrow: "DENEYİM", experienceTitle: "Staj <em>deneyimlerim.</em>", experienceNote: "Yazılım geliştirme ve ağ altyapısı.",
      skillsEyebrow: "TEKNİK YETKİNLİKLER", skillsTitle: "Kullandığım<br /><em>teknolojiler.</em>", skillsNote: "Programlama, web, yapay zekâ<br />ve altyapı araçları.",
      contactEyebrow: "YENİ PROJELERDE BİRLİKTE ÇALIŞALIM", contactTitle: "İyi bir fikri<br /><em>hayata geçirelim.</em>",
      contactIntro: "Yeni mezun mühendislik fırsatları, iş birlikleri veya projeler hakkında görüşmek için bana ulaşabilirsiniz.",
      githubAria: "GitHub profilini yeni sekmede aç", linkedinAria: "LinkedIn profilini yeni sekmede aç", photoAlt: "Eren Kötüğ",
      footerTop: "YUKARI ÇIK", footerName: "EREN KÖTÜĞ", caseBack: "PROJELERE DÖN", caseEyebrow: "PROJE İNCELEMESİ",
      caseContact: "İletişime geç", caseApproach: "PROJE YAKLAŞIMI", caseTech: "TEKNOLOJİLER", caseTools: "Kullanılan<br />araçlar.",
      caseNote: "Bu sayfa projenin kapsamını ve teknik akışını anlatan portfolyo incelemesidir.", allProjects: "TÜM PROJELER", portfolio: "PORTFOLYO", caseRepo: "GitHub deposunu incele", caseProfile: "GitHub profilimi aç"
    }
  },
  en: {
    intro: "A Dokuz Eylül University Computer Engineering graduate, I am focusing on building backend projects with Java and strengthening my foundations in clean code, database design, and maintainable services.",
    about: "I graduated in Computer Engineering from Dokuz Eylül University. I plan to build on my software development experience with Java, focusing on backend services and web applications. During my software internship, I worked with .NET Core MVC and Razor; my network internship introduced me to Cisco infrastructure, VLAN, DHCP, routing, and virtualization. My graduation and machine learning projects also involved computer vision solutions.",
    location: "Bursa / İzmir, Türkiye",
    education: "Dokuz Eylül University · Computer Engineering",
    skills: [
      { title: "Programming languages", items: ["Java", "C#", "Python"] },
      { title: "Web & backend", items: [".NET Core MVC", "FastAPI", "React", "Razor"] },
      { title: "AI & computer vision", items: ["YOLO", "Pose estimation", "Object tracking", "XGBoost", "Random Forest"] },
      { title: "Data & storage", items: ["SQL Server", "SQLite", "PostgreSQL"] },
      { title: "Networks & infrastructure", items: ["VLAN", "Routing", "DHCP", "Cisco Packet Tracer", "Virtualization"] },
      { title: "Tools", items: ["Git", "GitHub", "Docker", "Visual Studio", "CVAT", "Roboflow"] }
    ],
    experience: [
      { company: "Akpınar Bilişim Hizmetleri", role: "Network & IT Intern", date: "June 2025 — August 2025", description: "Designed and configured corporate network infrastructure using Cisco technologies, including VLANs, routing, and DHCP services. Helped deploy and manage virtualization environments and network devices. Supported server room operations, cabling, UPS integration, and infrastructure monitoring." },
      { company: "İletişim Yazılım A.Ş.", role: "Software Development Intern", date: "June 2024 — September 2024", description: "Developed web applications with .NET Core MVC and Razor, contributing to improvements in user experience and system responsiveness. Integrated database-driven features and optimized data access. Gained hands-on experience in backend development and Agile workflows through real software projects." }
    ],
    projects: {
      volleyball: { name: "Volleyball Performance Analysis", category: "GRADUATION PROJECT · COMPUTER VISION", summary: "A web-based analysis platform that processes player and ball movement from match footage to surface performance insights.", description: "A graduation project combining video analysis, computer vision, and web development. The system brings video processing, detection results, and analysis outputs together in an end-to-end workflow.", points: ["Detects players and the ball with YOLO, pose estimation, and object tracking.", "Enriches match footage with court filtering and team classification.", "Presents analysis results and statistics through a FastAPI backend and React interface.", "Uses a CVAT-based workflow for model and data annotation."] },
      "fraud-detection": { name: "Financial Fraud Detection", category: "MACHINE LEARNING · CLASSIFICATION", summary: "A modeling study that classifies suspicious financial transactions in the IEEE-CIS dataset.", description: "A machine learning study focused on preparing transaction data with an imbalanced class distribution and comparing models. Evaluation uses ROC-AUC and cross-validation rather than relying on a single accuracy score.", points: ["Data preprocessing and feature engineering.", "Modeling and evaluation for imbalanced data.", "ROC-AUC comparison of XGBoost and Random Forest.", "A repeatable analysis workflow in Google Colab."] },
      ecommerce: { name: "E-Commerce Market Platform", category: ".NET CORE · WEB APPLICATION", summary: "A .NET Core MVC application for product and order workflows based on the Northwind data model.", description: "Built around the Northwind database, the platform combines dynamic Razor pages with modular backend components. The work focuses on data-driven pages and order management flows.", points: ["Dynamic pages for product and order management.", "Modular server-side components using Razor and MVC.", "Relational data access and query optimization with SQL Server.", "Examples of e-commerce workflows based on the Northwind data model."] },
      "autonomous-car": { name: "Autonomous Obstacle-Avoiding Vehicle", category: "EMBEDDED SYSTEMS · ROBOTICS", summary: "An ESP32-based vehicle that senses its surroundings with ultrasonic sensors and adjusts its movement.", description: "An autonomous vehicle project combining embedded software, sensor data, and real-time decisions. It responds to obstacles using distance readings and communicates its status to the user.", points: ["Sensor reading and motor control on an ESP32.", "Obstacle detection using ultrasonic distance measurements.", "Status feedback through an LCD and buzzer.", "Real-time embedded behavior implemented in C++." ] }
    },
    preview: {
      court: ["MATCH ANALYSIS / 04:32", "PLAYER TRACKING", "POSE ESTIMATION", "ACTIVE"],
      network: ["TRANSACTION CLASSIFICATION", "FEATURE ENGINEERING", "MODEL / XGB"],
      store: ["PRODUCTS", "ORDERS", "ACCOUNT", "ITEM"],
      circuit: ["AUTONOMOUS SYSTEM / ESP32", "ULTRASONIC SENSOR", "CONNECTED"]
    },
    static: {
      homeLabel: "Eren Kötüğ home", menuOpen: "Open menu", menuClose: "Close menu", navLabel: "Main navigation",
      navWork: "Projects", navAbout: "About", navExperience: "Experience", navContact: "Contact",
      heroEyebrow: "HELLO, I'M EREN KÖTÜĞ", heroTitle: "Computer Engineer<br /><span class=\"headline-indent\">& <em>Software Developer.</em></span>",
      heroArt: "Layered graphic representing backend, AI, and web interfaces", workCta: "View projects", contactCta: "Get in touch",
      resumeTr: "Download Turkish CV (PDF)", resumeEn: "Download English CV (PDF)", languageLabel: "Site language",
      artAi: "ARTIFICIAL INTELLIGENCE", artSystems: "SYSTEMS", artWeb: "WEB DEVELOPMENT", artLabel: "AREAS<br />OF FOCUS",
      heroProjects: "SCROLL TO PROJECTS", heroLocation: "BURSA / IZMIR",
      workEyebrow: "PROJECTS", workTitle: "Selected <em>work.</em>", workNote: "Projects I have worked on and<br />the technologies I use.",
      workBottom: "SELECTED PROJECTS", moreGithub: "MORE ON GITHUB", projectView: "VIEW PROJECT", projectDetails: "Details", githubRepo: "GitHub repository", githubProfile: "GitHub profile", projectAlt: "view project details",
      aboutEyebrow: "ABOUT", aboutTitle: "A little<br /><em>about me.</em>", aboutStamp: "DEÜ<br /><b>COMPUTER<br />ENGINEERING</b><i>✳</i>", education: "EDUCATION", internshipLink: "Internship experience",
      experienceEyebrow: "EXPERIENCE", experienceTitle: "Internship <em>experience.</em>", experienceNote: "Software development and network infrastructure.",
      skillsEyebrow: "TECHNICAL SKILLS", skillsTitle: "Technologies<br /><em>I use.</em>", skillsNote: "Programming, web, AI<br />and infrastructure tools.",
      contactEyebrow: "LET’S WORK ON SOMETHING NEW", contactTitle: "Have a good idea?<br /><em>Let’s build it.</em>",
      contactIntro: "Feel free to reach out about early-career engineering opportunities, collaborations, or projects.",
      githubAria: "Open GitHub profile in a new tab", linkedinAria: "Open LinkedIn profile in a new tab", photoAlt: "Eren Kötüğ",
      footerTop: "BACK TO TOP", footerName: "EREN KÖTÜĞ", caseBack: "BACK TO PROJECTS", caseEyebrow: "PROJECT OVERVIEW",
      caseContact: "Get in touch", caseApproach: "PROJECT APPROACH", caseTech: "TECHNOLOGIES", caseTools: "Tools<br />used.",
      caseNote: "This page is a portfolio overview of the project scope and technical workflow.", allProjects: "ALL PROJECTS", portfolio: "PORTFOLIO", caseRepo: "View GitHub repository", caseProfile: "Open GitHub profile"
    },
    casePages: {
      volleyball: { art: "VIDEO ANALYSIS / VOLLEYBALL", stat: "POSE / TRACKING / TEAM", approachTitle: "From match footage<br />to useful insights.", note: "This portfolio page describes the project's scope and technical workflow. Running the model and API components requires their application environment.", flow: ["VIDEO INPUT", "PLAYER / BALL DETECTION", "MATCH STATISTICS"] },
      "fraud-detection": { art: "FEATURES / MODEL COMPARISON", stat: "ROC-AUC / CROSS-VALIDATION", approachTitle: "From transaction data<br />to balanced decisions.", note: "This portfolio page describes the project's scope and technical workflow. Model metrics should be interpreted in the context of the data and training setup.", flow: ["TRANSACTION DATA", "FEATURE ENGINEERING", "RISK CLASSIFICATION"] },
      ecommerce: { art: "NORTHWIND / WEB APPLICATION", stat: "CATALOG / ORDERS / DATA", approachTitle: "Bringing business flows<br />together on the web.", note: "This portfolio page describes the project's scope and technical workflow. A live application requires a separate .NET and SQL Server environment.", flow: ["PRODUCT CATALOG", "ORDER MANAGEMENT", "DATA-DRIVEN PAGES"] },
      "autonomous-car": { art: "SENSOR SYSTEM / ESP32", stat: "LIVE SENSOR DATA", approachTitle: "Sense, decide,<br />and move.", note: "This portfolio page describes the project's scope and technical workflow. Running the embedded software requires ESP32 hardware and sensor connections.", flow: ["DISTANCE SENSOR", "ESP32 DECISION FLOW", "MOTOR / USER FEEDBACK"] }
    }
  }
};

window.PORTFOLIO_FLAG_ICONS = {
  tr: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" rx="2" fill="#e30a17"/><circle cx="9" cy="8" r="4.5" fill="#fff"/><circle cx="10.5" cy="7" r="3.7" fill="#e30a17"/><path d="m15.8 4.7.8 2 2.1.1-1.7 1.3.6 2-1.8-1.2-1.8 1.2.6-2-1.7-1.3 2.1-.1z" fill="#fff"/></svg>',
  en: '<svg viewBox="0 0 24 16" aria-hidden="true"><rect width="24" height="16" rx="2" fill="#17315e"/><path d="m0 0 24 16M24 0 0 16" stroke="#fff" stroke-width="4"/><path d="m0 0 24 16M24 0 0 16" stroke="#c8102e" stroke-width="1.5"/><path d="M12 0v16M0 8h24" stroke="#fff" stroke-width="6"/><path d="M12 0v16M0 8h24" stroke="#c8102e" stroke-width="2.5"/></svg>'
};

window.portfolioLanguageMarkup = () => `<div class="language-toggle" role="group" aria-label="Site language"><button class="language-option" type="button" data-language="tr" aria-label="Türkçe" aria-pressed="true">${window.PORTFOLIO_FLAG_ICONS.tr}<span>TR</span></button><button class="language-option" type="button" data-language="en" aria-label="English" aria-pressed="false">${window.PORTFOLIO_FLAG_ICONS.en}<span>EN</span></button></div>`;
window.setPortfolioLanguage = (language) => {
  if (!window.PORTFOLIO_LOCALES[language]) return;
  localStorage.setItem("portfolio-language", language);
  window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: { language } }));
};
