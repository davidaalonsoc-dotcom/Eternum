const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav');

menu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});