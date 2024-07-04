document.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav1 li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav1 ul');

    burgerMenu.addEventListener('click', function() {
        if (navMenu.style.display === 'none' || navMenu.style.display === '') {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
});