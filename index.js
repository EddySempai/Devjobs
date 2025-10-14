// esto lo hice con geminis ayudandome. aun sigo tratando de aprender

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer para animaciones de deslizamiento desde abajo
    const slideUpElements = document.querySelectorAll('.animate-slide-up');

    const observerOptions = {
        root: null, // El viewport es el elemento raíz
        rootMargin: '0px',
        threshold: 0.1 // Activar cuando el 10% del elemento es visible
    };

    const slideUpObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); // Añade la clase para activar la transición CSS
                observer.unobserve(entry.target); // Deja de observar el elemento una vez animado
            }
        });
    }, observerOptions);

    slideUpElements.forEach(el => {
        slideUpObserver.observe(el);
    });

    // Efecto de máquina de escribir para párrafos
    const typewriterElements = document.querySelectorAll('.typewriter-text');

    const typewriterObserverOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Activar cuando el 50% del elemento es visible
    };

    const typewriterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const paragraph = entry.target;
                const originalText = paragraph.dataset.originalText || paragraph.textContent; // Guarda el texto original
                paragraph.dataset.originalText = originalText;
                paragraph.textContent = ''; // Limpia el texto para el efecto de escritura
                paragraph.style.opacity = 1; // Hace el párrafo visible para que se vea el efecto

                let charIndex = 0;
                const typingSpeed = 50; // Milisegundos por carácter

                function type() {
                    if (charIndex < originalText.length) {
                        paragraph.textContent += originalText.charAt(charIndex);
                        charIndex++;
                        setTimeout(type, typingSpeed);
                    }
                }
                type();
                observer.unobserve(entry.target); // Deja de observar el elemento una vez escrito
            }
        });
    }, typewriterObserverOptions);

    typewriterElements.forEach(el => {
        typewriterObserver.observe(el);
    });
});



