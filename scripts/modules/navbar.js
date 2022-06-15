const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarContent = document.querySelector('.navbar-content');
const navbarContentBg = document.querySelector('.navbar-content-bg');
const navbarContentClose = document.querySelector('.navbar-content-close');

navbarContentBg.addEventListener('click', () => {
  const isOpen = navbarContent.classList.contains('show');
  if (isOpen) {
    navbarContent.classList.remove('show');
    navbarContentBg.classList.remove('show');
    document.body.style.overflowY = 'auto';
    return;
  }
});

navbarContentClose.addEventListener('click', () => {
  const isOpen = navbarContent.classList.contains('show');
  if (isOpen) {
    navbarContent.classList.remove('show');
    navbarContentBg.classList.remove('show');
    document.body.style.overflowY = 'auto';
    return;
  }
});

navbarToggle.addEventListener('click', () => {
  const isOpen = navbarContent.classList.contains('show');
  if (isOpen) {
    return;
  }

  navbarContent.classList.add('show');
  navbarContentBg.classList.add('show');
  document.body.style.overflowY = 'hidden';
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= navbar.scrollHeight) {
    navbar.classList.add('sticky');
    return;
  }
  navbar.classList.remove('sticky');
});
