(() => {
  'use strict';
  const root = document.documentElement;
  const translations = window.portfolioTranslations;
  const languageButtons = document.querySelectorAll('button[data-language]');
  const themeButton = document.querySelector('.theme-toggle');
  const glowButton = document.querySelector('.glow-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  let language = root.dataset.language === 'es' ? 'es' : 'en';
  let theme = root.dataset.theme === 'light' ? 'light' : 'dark';
  let lowGlow = root.dataset.glow === 'dim';
  const save = (key, value) => {
    try { localStorage.setItem(key, value); } catch { /* Preferences still work without storage. */ }
  };
  const translate = key => translations?.[language]?.[key] ?? translations?.en?.[key];

  function updateControlLabels() {
    const themeAction = translate(theme === 'dark' ? 'theme.toLight' : 'theme.toDark');
    themeButton.setAttribute('aria-label', themeAction);
    themeButton.title = themeAction;
    themeButton.querySelector('.theme-label').textContent = translate(theme === 'dark' ? 'theme.light' : 'theme.dark');
    const glowAction = translate(lowGlow ? 'glow.restoreAria' : 'glow.dimAria');
    glowButton.setAttribute('aria-label', glowAction);
    glowButton.title = glowAction;
    glowButton.querySelector('.glow-label').textContent = translate(lowGlow ? 'glow.restore' : 'glow.dim');
    const menuOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.querySelector('.menu-label').textContent = translate(menuOpen ? 'menu.close' : 'menu.open');
    menuButton.setAttribute('aria-label', translate(menuOpen ? 'menu.closeAria' : 'menu.openAria'));
  }


  function setFormattedText(element, value) {
    // Only the formatting used by local headings is permitted; other markup stays text.
    const fragment = document.createDocumentFragment();
    const stack = [fragment];
    const tokens = value.split(/(<br>|<span class="(?:accent|muted-heading)">|<\/span>)/g);
    tokens.forEach(token => {
      const parent = stack[stack.length - 1];
      if (token === '<br>') {
        parent.appendChild(document.createElement('br'));
      } else if (token === '<span class="accent">' || token === '<span class="muted-heading">') {
        const span = document.createElement('span');
        span.className = token === '<span class="accent">' ? 'accent' : 'muted-heading';
        parent.appendChild(span);
        stack.push(span);
      } else if (token === '</span>' && stack.length > 1) {
        stack.pop();
      } else if (token) {
        parent.appendChild(document.createTextNode(token));
      }
    });
    element.replaceChildren(fragment);
  }

  function setLanguage(nextLanguage) {
    if (!['en', 'es'].includes(nextLanguage) || !translations?.[nextLanguage]) return;
    language = nextLanguage;
    root.lang = language;
    root.dataset.language = language;
    // Translation formatting is limited to text, line breaks, and two heading classes.
    const bindings = {
      'data-i18n': (element, value) => { element.textContent = value; },
      'data-i18n-html': setFormattedText,
      'data-i18n-aria-label': (element, value) => element.setAttribute('aria-label', value),
      'data-i18n-title': (element, value) => element.setAttribute('title', value),
      'data-i18n-placeholder': (element, value) => element.setAttribute('placeholder', value),
      'data-i18n-value': (element, value) => element.setAttribute('value', value),
      'data-i18n-content': (element, value) => element.setAttribute('content', value)
    };
    Object.entries(bindings).forEach(([attribute, apply]) => {
      document.querySelectorAll(`[${attribute}]`).forEach(element => {
        const value = translate(element.getAttribute(attribute));
        if (typeof value === 'string') apply(element, value);
      });
    });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    updateControlLabels();
  }

  function setTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#0d141e' : '#f4f8fa');
    updateControlLabels();
  }

  function setGlow(dim) {
    lowGlow = dim;
    root.dataset.glow = dim ? 'dim' : 'normal';
    glowButton.setAttribute('aria-pressed', String(dim));
    updateControlLabels();
  }

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    updateControlLabels();
  }

  setLanguage(language);
  setTheme(theme);
  setGlow(lowGlow);
  root.classList.add('js');
  languageButtons.forEach(button => button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    save('portfolio-language', language);
  }));
  themeButton.addEventListener('click', () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    save('portfolio-theme', theme);
  });
  glowButton.addEventListener('click', () => {
    setGlow(!lowGlow);
    save('portfolio-low-glow', String(lowGlow));
  });
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.header')) setMenu(false);
  });
  window.matchMedia('(min-width: 801px)').addEventListener('change', event => {
    if (event.matches) setMenu(false);
  });
})();
