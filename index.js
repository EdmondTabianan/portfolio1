document.addEventListener('DOMContentLoaded', (event) => {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav1 li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

