const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu.querySelectorAll('a');

burgerMenu.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        mobileMenu.classList.add('closed');
    } else {
        mobileMenu.classList.remove('closed');
        mobileMenu.classList.add('open');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('closed');
        mobileMenu.classList.remove('open');
    });
});