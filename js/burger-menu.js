let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__navigation');
let header = document.querySelector('.header');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    header.classList.toggle('active');
})
