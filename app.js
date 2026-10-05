(() => {
  'use strict';
  const root = document.documentElement;
  const glowButton = document.querySelector('.glow-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  root.classList.add('js');
  function setGlow(dim) {
    root.dataset.glow = dim ? 'dim' : 'normal';
    glowButton.setAttribute('aria-pressed', String(dim));
  }
  let lowGlow = false;
  try { lowGlow = localStorage.getItem('portfolio-low-glow') === 'true'; } catch { /* Storage is optional. */ }
  setGlow(lowGlow);
  glowButton.addEventListener('click', () => {
    lowGlow = !lowGlow;
    setGlow(lowGlow);
    try { localStorage.setItem('portfolio-low-glow', String(lowGlow)); } catch { /* The preference still works without storage. */ }
  });
  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  }
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
