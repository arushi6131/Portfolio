// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('showing');
}

// Add scroll animations
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.scrollY + window.innerHeight;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop + section.offsetHeight / 2) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
