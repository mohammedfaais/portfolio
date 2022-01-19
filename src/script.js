const hamburger = document.querySelector('#hamburger');
const navsub = document.querySelector('#nav-list');
hamburger.addEventListener('click', () => {
 navsub.classList.toggle('show');
});
