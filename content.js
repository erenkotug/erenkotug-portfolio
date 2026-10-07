/* Portfolio metinleri ve proje bağlantıları. Kişisel içerikleri bu dosyadan güncelleyebilirsiniz. */
window.PORTFOLIO = {
  name: "Eren Kötüğ",
  intro: "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği mezunuyum. Ölçeklenebilir backend mimarileri, modern web arayüzleri ve yapay zekâ / bilgisayarlı görü çözümleri geliştiriyorum.",
  about: "Dokuz Eylül Üniversitesi Bilgisayar Mühendisliği mezunuyum ve en çok Java ile uygulama geliştirmeye ilgi duyuyorum. Backend tarafında temiz, sürdürülebilir çözümler üretmeye odaklanırken; stajlarımda .NET Core MVC, Razor ve Cisco ağ altyapılarıyla da çalıştım. Bilgisayarlı görü ve makine öğrenmesi projeleriyle farklı alanlarda deneyim kazanıyorum.",
  email: "erenkt11@gmail.com",
  location: "Bursa / İzmir, Türkiye",
  github: "https://github.com/erenkotug",
  linkedin: "https://www.linkedin.com/in/erenkotug/",
  resumeTr: "public/Eren-Kotug-CV-TR.pdf",
  resumeEn: "public/Eren-Kotug-CV-EN.pdf",
  skills: [
    { title: "Programlama dilleri", items: ["Java", "C#", "Python", "C++"] },
    { title: "Web & backend", items: [".NET Core MVC", "FastAPI", "React", "Razor"] },
    { title: "Yapay zekâ & görü", items: ["YOLO", "Poz tahmini", "Nesne takibi", "XGBoost", "Random Forest"] },
    { title: "Veri & depolama", items: ["SQL Server", "SQLite", "PostgreSQL"] },
    { title: "Ağ & altyapı", items: ["VLAN", "Routing", "DHCP", "Cisco Packet Tracer", "Sanallaştırma"] },
    { title: "Araçlar", items: ["Git", "GitHub", "Docker", "Visual Studio", "CVAT", "Roboflow"] }
  ],
  experience: [
    { company: "Akpınar Bilişim Hizmetleri", role: "Network & IT Stajyeri", date: "Haziran 2025 — Ağustos 2025", description: "Kurumsal Cisco ağ altyapılarında VLAN, DHCP ve routing yapılandırmaları üzerinde çalıştım. Sanallaştırma ortamları ve sunucu odası operasyonlarına destek verdim." },
    { company: "İletişim Yazılım A.Ş.", role: "Yazılım Geliştirme Stajyeri", date: "Haziran 2024 — Eylül 2024", description: ".NET Core MVC ve Razor ile kurumsal web uygulamalarına katkı sağladım; veri erişim süreçleri ve çevik ekip çalışması deneyimi kazandım." }
  ],
  education: "Dokuz Eylül Üniversitesi · Bilgisayar Mühendisliği",
  projects: [
    { id: "volleyball", number: "01", name: "Voleybol Performans Analizi", category: "BİTİRME TEZİ · BİLGİSAYARLI GÖRÜ", summary: "Maç videosundan oyuncu ve top hareketlerini işleyerek performans içgörüleri sunan web tabanlı analiz platformu.", description: "Video analizi, bilgisayarlı görü ve web geliştirmeyi bir araya getiren bitirme tezi projesi. Sistem; video işleme adımlarını, tespit sonuçlarını ve analiz çıktılarını bir arayüzde buluşturan uçtan uca bir akış üzerine kuruldu.", points: ["YOLO ile oyuncu ve top tespiti; poz tahmini ve nesne takibi.", "Saha filtreleme ve takım sınıflandırma adımlarıyla maç akışını zenginleştirme.", "FastAPI backend ve React arayüz üzerinden analiz sonuçları ile istatistikleri sunma.", "Model ve veri etiketleme sürecinde CVAT tabanlı iş akışından yararlanma."], stack: ["Python", "FastAPI", "React", "SQLite", "YOLO", "Pose Estimation", "CVAT"], github: "https://github.com/erenkotug/volleyball-analytics", githubRepository: true, theme: "volleyball", visual: "court" },
    { id: "fraud-detection", number: "02", name: "Finansal Dolandırıcılık Tespiti", category: "MAKİNE ÖĞRENMESİ · SINIFLANDIRMA", summary: "IEEE-CIS işlem verileri üzerinde şüpheli finansal işlemleri sınıflandırmaya yönelik modelleme çalışması.", description: "Dengesiz sınıf dağılımına sahip işlem verileri üzerinde veri hazırlama ve model karşılaştırmasına odaklanan makine öğrenmesi çalışması. Değerlendirme, tek bir doğruluk değerine bağlı kalmadan ROC-AUC ve çapraz doğrulama yaklaşımıyla ele alındı.", points: ["Veri ön işleme ve özellik mühendisliği adımları.", "Dengesiz veri dağılımına uygun modelleme ve değerlendirme yaklaşımı.", "XGBoost ve Random Forest modellerinin ROC-AUC ile karşılaştırılması.", "Tekrarlanabilir analiz akışı için Google Colab kullanımı."], stack: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Google Colab", "IEEE-CIS"], github: "https://github.com/erenkotug", theme: "fraud", visual: "network" },
    { id: "ecommerce", number: "03", name: "E-Ticaret Market Platformu", category: ".NET CORE · WEB UYGULAMASI", summary: "Northwind veri modeli üzerinde ürün ve sipariş akışları sunan .NET Core MVC uygulaması.", description: "Northwind veri tabanı etrafında geliştirilen platform, dinamik Razor sayfalarını modüler backend bileşenleriyle bir araya getiriyor. Çalışmada veri odaklı sayfalar ve sipariş yönetimi akışları üzerine odaklanıldı.", points: ["Ürün ve sipariş yönetimi için dinamik sayfalar.", "Razor ve MVC yapısıyla modüler sunucu tarafı bileşenler.", "SQL Server üzerinde ilişkisel veri erişimi ve sorgu iyileştirmeleri.", "Northwind veri modeliyle e-ticaret iş akışlarının örneklenmesi."], stack: ["C#", ".NET Core MVC", "Razor", "SQL Server", "Northwind"], github: "https://github.com/erenkotug/E-commerce_Market_Website", githubRepository: true, theme: "ecommerce", visual: "store" },
    { id: "autonomous-car", number: "04", name: "Otonom Engel Algılayan Araç", category: "GÖMÜLÜ SİSTEM · ROBOTİK", summary: "Ultrasonik sensörlerle çevresini algılayıp hareketini belirleyen ESP32 tabanlı araç.", description: "Gömülü yazılım, sensör verisi ve gerçek zamanlı karar akışını bir araya getiren otonom araç projesi. Araç, sensörlerden aldığı mesafe bilgisini kullanarak engellere tepki verir ve durumunu kullanıcıya aktarır.", points: ["ESP32 üzerinde sensör okuma ve hareket kontrol akışı.", "Ultrasonik mesafe ölçümü ile engel algılama.", "LCD ekran ve buzzer üzerinden durum geri bildirimi.", "C++ ile gerçek zamanlı gömülü sistem davranışı."], stack: ["C++", "ESP32", "Ultrasonik sensör", "LCD", "Gömülü sistemler"], github: "https://github.com/erenkotug", theme: "robot", visual: "circuit" }
  ]
};
