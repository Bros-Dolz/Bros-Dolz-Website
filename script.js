const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const label = toggle.querySelector('.theme-toggle__label');

const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = savedTheme || preferredTheme;

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
  label.textContent = isDark ? '🌙' : '☀️';
}

applyTheme(initialTheme);

toggle.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', nextTheme);
  applyTheme(nextTheme);
});

const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const navigationButtons = document.querySelectorAll('[data-go-to]');

function showTab(tabName) {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tabName;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => showTab(tab.dataset.tab));
});

navigationButtons.forEach((button) => {
  button.addEventListener('click', () => showTab(button.dataset.goTo));
});
