(() => {
  'use strict';
  // Apply preferences before the stylesheet paints, including when storage is blocked.
  const read = key => {
    try { return localStorage.getItem(key); } catch { return null; }
  };
  const root = document.documentElement;
  const savedLanguage = read('portfolio-language');
  const browserLanguage = navigator.languages?.[0] || navigator.language || 'en';
  const language = ['en', 'es'].includes(savedLanguage)
    ? savedLanguage
    : browserLanguage.toLowerCase().startsWith('es') ? 'es' : 'en';
  const savedTheme = read('portfolio-theme');
  root.lang = language;
  root.dataset.language = language;
  root.dataset.theme = ['light', 'dark'].includes(savedTheme) ? savedTheme : 'dark';
  root.dataset.glow = read('portfolio-low-glow') === 'true' ? 'dim' : 'normal';
})();
