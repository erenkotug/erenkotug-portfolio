const portfolio = window.PORTFOLIO;
const projectId = document.body.dataset.project;
const project = portfolio.projects.find((item) => item.id === projectId);
if (project) {
  document.title = `${project.name} — Eren Kötüğ`;
  document.querySelector('meta[name="description"]').content = project.summary;
  document.querySelector('[data-number]').textContent = project.number;
  document.querySelector('[data-title]').textContent = project.name;
  document.querySelector('[data-category]').textContent = project.category;
  document.querySelector('[data-summary]').textContent = project.summary;
  document.querySelector('[data-description]').textContent = project.description;
  document.querySelector('[data-points]').innerHTML = project.points.map((point) => `<li>${point}</li>`).join('');
  document.querySelector('[data-stack]').innerHTML = project.stack.map((item) => `<span>${item}</span>`).join('');
  document.querySelector('[data-repo]').href = project.github;
  document.querySelector('[data-repo-label]').textContent = project.githubRepository ? 'GitHub deposunu incele' : 'GitHub profilimi aç';
  document.querySelector('[data-visual]').classList.add(project.theme);
  const labels = { volleyball: ['VİDEO GİRİŞİ', 'OYUNCU / TOP TESPİTİ', 'MAÇ İSTATİSTİKLERİ'], fraud: ['İŞLEM VERİLERİ', 'ÖZELLİK MÜHENDİSLİĞİ', 'RİSK SINIFLANDIRMA'], ecommerce: ['ÜRÜN LİSTESİ', 'SİPARİŞ YÖNETİMİ', 'VERİ TABANLI SAYFALAR'], robot: ['MESAFE SENSÖRÜ', 'ESP32 KARAR AKIŞI', 'MOTOR / KULLANICI GERİ BİLDİRİMİ'] };
  document.querySelector('[data-flow]').innerHTML = labels[project.theme].map((label, index) => `${index ? '<b>→</b>' : ''}<span>${label}</span>`).join('');
  document.querySelector('[data-art-title]').textContent = project.name;
  document.querySelector('[data-stat]').textContent = project.stack.slice(0, 3).join('　/　');
}
