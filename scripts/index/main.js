// index.html's main JS file

import '../modules/collapsible.js';
import '../modules/animateText.js';
import '../modules/navbar.js';

const scrollToTop = document.querySelector('.scroll-to-top');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 500) {
    scrollToTop.style.display = 'block';
    return;
  }

  scrollToTop.style.display = 'none';
});

new Swiper('.swiperEffect', {
  spaceBetween: 30,
  effect: 'fade',
});
