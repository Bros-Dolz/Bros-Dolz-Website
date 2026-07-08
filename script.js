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
