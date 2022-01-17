const hamburger = document.querySelector('.humburger');
const navsub = document.querySelector('.navbar-list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  navsub.classList.toggle('nav-change');
});
