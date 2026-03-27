document.addEventListener('DOMContentLoaded', () => {
    // 1. Плавное появление элементов при скролле
    const revealElements = () => {
        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealElements);
    revealElements(); // Запуск при старте

    // 2. Простая навигация между секциями (страницами)
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target');

            sections.forEach(section => {
                section.classList.add('hidden');
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    window.scrollTo(0, 0);
                }
            });
        });
    });
});