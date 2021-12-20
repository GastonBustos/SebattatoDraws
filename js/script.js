const hamburger = document.getElementById('hamburger');
const navLIST = document.getElementById('nav__list');

hamburger.addEventListener('click', () => {
    navLIST.classList.toggle('show');
});