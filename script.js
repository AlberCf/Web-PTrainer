document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del Scroll de la Navegación Principal
    // Ahora solo selecciona los enlaces que están dentro de la lista de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
    
            // Si el enlace es a una sección de la misma página (ej. #contacto)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.getElementById(targetId.substring(1));
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
            // Si no empieza con #, se deja que el navegador lo maneje
            // (por ejemplo, para ir a blog.html, WhatsApp, etc.).
        });
    });

    // 2. Efecto de la barra de navegación al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Toggle del menú para móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links-container');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // 4. Ocultar menú al hacer clic en un enlace (para móviles)
    // También usa el selector específico para no afectar a otros enlaces
    const linksForMobileMenu = document.querySelectorAll('.nav-links a');
    linksForMobileMenu.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
});