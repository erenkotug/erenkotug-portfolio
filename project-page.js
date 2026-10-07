const portfolio = window.PORTFOLIO;
const locales = window.PORTFOLIO_LOCALES;
const projectId = document.body.dataset.project;
const baseProject = portfolio.projects.find((item) => item.id === projectId);
let language = localStorage.getItem('portfolio-language') || 'tr';

function renderProjectPage(nextLanguage) {
  language = nextLanguage;
  const locale = locales[language];
  const strings = locale.static;
  const project = { ...baseProject, ...(locale.projects?.[projectId] || {}) };
  const caseCopy = locale.casePages[projectId];
  document.documentElement.lang = language;
  document.title = `${project.name} — Eren Kötüğ`;
  document.querySelector('meta[name="description"]').content = project.summary;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = strings[node.dataset.i18n];
    if (value) node.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
    const value = strings[node.dataset.i18nAria];
    if (value) node.setAttribute('aria-label', value);
  });
  document.querySelectorAll('.language-option').forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('.language-toggle').setAttribute('aria-label', strings.languageLabel);
  document.querySelector('[data-number]').textContent = project.number;
  document.querySelector('[data-title]').textContent = project.name;
  document.querySelector('[data-category]').textContent = project.category;
  document.querySelector('[data-summary]').textContent = project.summary;
  document.querySelector('[data-description]').textContent = project.description;
  document.querySelector('[data-points]').innerHTML = project.points.map((point) => `<li>${point}</li>`).join('');
  document.querySelector('[data-stack]').innerHTML = project.stack.map((item) => `<span>${item}</span>`).join('');
  document.querySelector('[data-repo]').href = project.github;
  document.querySelector('[data-repo-label]').textContent = project.githubRepository ? strings.caseRepo : strings.caseProfile;
  document.querySelector('[data-visual]').classList.add(project.theme);
  document.querySelector('[data-art-title]').textContent = project.name;
  document.querySelector('[data-case-art]').textContent = caseCopy.art;
  document.querySelector('[data-case-stat-label]').textContent = caseCopy.stat;
  document.querySelector('[data-case-heading]').innerHTML = caseCopy.approachTitle;
  document.querySelector('[data-case-note]').textContent = caseCopy.note;
  document.querySelector('[data-case-project-name]').textContent = project.name.toLocaleUpperCase(language === 'tr' ? 'tr-TR' : 'en-US');
  document.querySelector('[data-flow]').innerHTML = caseCopy.flow.map((label, index) => `${index ? '<b>→</b>' : ''}<span>${label}</span>`).join('');
  document.querySelector('[data-stat]').textContent = project.stack.slice(0, 3).join('　/　');
}

document.querySelector('.case-nav').insertAdjacentHTML('beforeend', window.portfolioLanguageMarkup());
document.querySelectorAll('.language-option').forEach((button) => button.addEventListener('click', () => window.setPortfolioLanguage(button.dataset.language)));
window.addEventListener('portfolio-language-change', (event) => renderProjectPage(event.detail.language));
renderProjectPage(language);
