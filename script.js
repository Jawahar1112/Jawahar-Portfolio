// Toggle mobile navigation menu
const nav = document.querySelector('nav ul');
const burger = document.querySelector('.hamburger');
burger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Highlight active section link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = sec.getAttribute('id');
        }
    });
    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) {
            a.classList.add('active');
        }
    });
});
