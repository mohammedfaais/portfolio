const hamburger = document.querySelector('#hamburger');
const navsub = document.querySelector('#nav-list');
const closeIcon = document.querySelector('#closeIcon')
const openIcon = document.querySelector('#openIcon')
const hamburgerLine =  document.querySelector('.line')
hamburger.addEventListener('click', () => {
 navsub.classList.toggle('show')
 hamburger.classList.toggle('open')
//  closeIcon.style.display='block';
//  openIcon.style.display='none';
//  closeIcon.classList.add('view');
//  openIcon.classList.add('hide');
});


