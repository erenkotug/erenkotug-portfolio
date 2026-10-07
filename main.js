const portfolio = window.PORTFOLIO;
const githubIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.64-1.24-1.64-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15 1 .1 1.5 2.2 3.67 1.57.1-.72.4-1.21.7-1.49-2.48-.28-5.08-1.24-5.08-5.54 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.14 3.08-1.14.61 1.53.23 2.67.11 2.95.72.78 1.14 1.77 1.14 2.99 0 4.31-2.6 5.26-5.1 5.53.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/></svg>`;
const linkedinIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.31ZM5.34 7.42a2.06 2.06 0 1 1 .02-4.12 2.06 2.06 0 0 1-.02 4.12Zm1.78 13.03H3.56V8.98h3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>`;
const put = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
put('[data-content="intro"]', portfolio.intro);
put('[data-content="about"]', portfolio.about);
put('[data-content="education"]', portfolio.education);
put('[data-email]', portfolio.email);
put('[data-location]', portfolio.location);
document.querySelector('[data-email-link]').href = `mailto:${portfolio.email}`;
document.querySelector('[data-resume-tr]').href = portfolio.resumeTr;
document.querySelector('[data-resume-en]').href = portfolio.resumeEn;
document.querySelector('#year').textContent = new Date().getFullYear();

const previews = {
  court: `<div class="preview-court"><span class="court-label">MAÇ ANALİZİ / 04:32</span><div class="court-lines"><i class="player p1">01</i><i class="player p2">02</i><i class="player p3">03</i><i class="player p4">04</i><i class="ball-path"></i><i class="ball-dot"></i></div><div class="court-stats"><span>OYUNCU TAKİBİ <b>●●●●</b></span><span>POZ TAHMİNİ <b>AKTİF ↗</b></span></div></div>`,
  network: `<div class="preview-network"><span class="network-label">İŞLEM SINIFLANDIRMA</span><div class="network-nodes"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="network-bottom"><span>ÖZELLİK MÜHENDİSLİĞİ</span><b>MODEL / XGB</b></div></div>`,
  store: `<div class="preview-store"><div class="store-bar"><b>MARKET</b><span>ÜRÜNLER　 SİPARİŞLER　 HESAP</span></div><div class="store-layout"><div class="store-item item-one"><i></i><span>ÜRÜN / 001</span></div><div class="store-item item-two"><i></i><span>ÜRÜN / 002</span></div><div class="store-item item-three"><i></i><span>ÜRÜN / 003</span></div></div></div>`,
  circuit: `<div class="preview-circuit"><span class="circuit-label">OTONOM SİSTEM / ESP32</span><div class="circuit-board"><i class="circuit-chip">ESP<br/>32</i><i class="sensor sensor-left"></i><i class="sensor sensor-right"></i><i class="circuit-line line-a"></i><i class="circuit-line line-b"></i><i class="circuit-node node-a"></i><i class="circuit-node node-b"></i></div><span class="circuit-bottom">ULTRASONİK SENSÖR <b>● BAĞLI</b></span></div>`
};

document.querySelector('#project-grid').innerHTML = portfolio.projects.map((project) => `
  <article class="project-card project-${project.theme}">
    <a class="project-visual" href="/projects/${project.id}/" aria-label="${project.name} proje detaylarını incele">${previews[project.visual]}<span class="project-open">↗</span></a>
    <div class="project-info"><div><span class="project-category">${project.category}</span><h3>${project.name}<span class="project-number">${project.number}</span></h3></div><a class="project-visit" href="/projects/${project.id}/">PROJEYİ İNCELE ↗</a></div>
    <p class="project-description">${project.summary}</p>
    <div class="project-tags">${project.stack.slice(0, 4).map((item) => `<span>${item}</span>`).join('')}</div>
    <div class="project-links"><a href="/projects/${project.id}/">Detaylar <span>↗</span></a><a href="${project.github}" target="_blank" rel="noreferrer">${project.githubRepository ? 'GitHub deposu' : 'GitHub profilim'} <span>↗</span></a></div>
  </article>`).join('');

document.querySelector('#experience-list').innerHTML = portfolio.experience.map((item, index) => `
  <article class="experience-item"><span class="experience-index">0${index + 1}</span><div class="experience-main"><p class="experience-date">${item.date}</p><h3>${item.company}</h3><h4>${item.role}</h4><p>${item.description}</p></div><span class="experience-arrow">↗</span></article>`).join('');

document.querySelector('#skills-grid').innerHTML = portfolio.skills.map((group, index) => `
  <article class="skill-group"><span class="skill-index">0${index + 1} / 06</span><h3>${group.title}</h3><div>${group.items.map((item) => `<span>${item}</span>`).join('')}</div></article>`).join('');

document.querySelector('#social-links').innerHTML = `
  <a class="social-link" href="${portfolio.github}" target="_blank" rel="noreferrer" aria-label="GitHub profilini yeni sekmede aç">${githubIcon}<span>GitHub</span> ↗</a>
  <a class="social-link" href="${portfolio.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn profilini yeni sekmede aç">${linkedinIcon}<span>LinkedIn</span> ↗</a>`;

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('nav-open', !expanded);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('nav-open');
}));
