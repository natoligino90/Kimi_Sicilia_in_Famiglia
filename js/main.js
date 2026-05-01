/**
 * Sicilia in Famiglia — v4.1
 * Minimal. Elegante. Emotivo. Converte.
 */

document.addEventListener('DOMContentLoaded', function() {

    // ====================
    // INTERSECTION OBSERVER — Animazioni scroll
    // ====================
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    function observeElements(selector, delay = 0, stagger = 100) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = `opacity 0.7s ease ${i * stagger}ms, transform 0.7s ease ${i * stagger}ms`;

            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, delay);
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            obs.observe(el);
        });
    }

    // Animazioni per sezione
    observeElements('.guarantee-card', 0, 150);
    observeElements('.destination-card', 0, 100);
    observeElements('.step-card', 0, 200);
    observeElements('.testimonial-card', 0, 150);
    observeElements('.section-header', 0, 0);

    // ====================
    // HEADER SCROLL EFFECT
    // ====================
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;
    let ticking = false;

    function handleNavScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(28,25,23,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(handleNavScroll);
            ticking = true;
        }
    }, { passive: true });

    // ====================
    // SMOOTH SCROLL
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ====================
    // DESTINAZIONI CLICK
    // ====================
    window.openDestination = function(dest) {
        const names = {
            'palermo': 'Palermo',
            'agrigento': 'Agrigento', 
            'cefalu': 'Cefalù',
            'taormina': 'Taormina',
            'etna': 'Etna',
            'siracusa': 'Siracusa',
            'isole-eolie': 'Isole Eolie'
        };
        const text = `Ciao, sono interessato a ${names[dest] || dest}. Vorrei ricevere proposte per una vacanza in Sicilia con la mia famiglia.`;
        window.open(`https://wa.me/393205532756?text=${encodeURIComponent(text)}`, '_blank');
    };

    // ====================
    // WHATSAPP TRACKING
    // ====================
    document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('WhatsApp CTA clicked — Sicilia in Famiglia');
        });
    });

    // ====================
    // REDUCED MOTION
    // ====================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.guarantee-card, .destination-card, .step-card, .testimonial-card, .section-header').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
        });
    }

    console.log('%c Sicilia in Famiglia ', 'background: #BE5423; color: #fff; padding: 8px 16px; border-radius: 4px; font-weight: 500;');
    console.log('%c v4.1 — Rebuild Minimal Elegante ', 'background: #C9A96E; color: #1C1917; padding: 4px 12px; border-radius: 4px;');
});