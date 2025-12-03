
document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector('.page');
    setTimeout(() => {
        page.classList.add('animate-visible');
    }, 100);


    const navButtons = document.querySelectorAll('.nav-mini button');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.backgroundColor = 'rgba(47, 139, 106, 0.15)';
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.backgroundColor = 'transparent';
            button.style.transform = 'scale(1)';
        });
    });


    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(19, 50, 40, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'var(--shadow)';
        });
    });

    
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.addEventListener('mouseenter', () => {
            dot.style.backgroundColor = 'var(--accent)';
        });
        dot.addEventListener('mouseleave', () => {
            dot.style.backgroundColor = 'rgba(5, 30, 20, 0.12)';
        });
    });

    const promoSection = document.querySelector('.promo');
    window.addEventListener('scroll', () => {
        const sectionTop = promoSection.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
            promoSection.classList.add('animate-visible');
        }
    });
});

const style = document.createElement('style');
style.innerHTML = `
    /* Animación de la página */
    .animate-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    /* Inicialmente la página empieza oculta y un poco más abajo */
    .page {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    /* Asegurar que el título de promociones sea visible desde el inicio */
    .promo {
        opacity: 1 !important; /* Evitar que la sección de promociones se oculte */
    }

    .promo.animate-visible {
        opacity: 1;
    }
`;
document.head.appendChild(style);
