/**
 * Sicilia in Famiglia - Landing Page JavaScript
 * Brand: Sicilia in Famiglia by GB Viaggi
 * Version: 2.0.0 Premium
 */

document.addEventListener('DOMContentLoaded', function() {

    // Sticky CTA
    const stickyCta = document.getElementById('stickyCta');
    const heroSection = document.getElementById('hero');

    function handleStickyCta() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        stickyCta.classList.toggle('visible', heroBottom < 0);
    }

    window.addEventListener('scroll', handleStickyCta, { passive: true });
    handleStickyCta();

    // Navbar scroll
    const navbar = document.getElementById('navbar');
    function handleNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', handleNavbar, { passive: true });
    handleNavbar();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer per animazioni
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    // Step cards
    document.querySelectorAll('.step-card').forEach((card, i) => {
        card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }, i * 200);
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        obs.observe(card);
    });

    // Trust cards
    document.querySelectorAll('.trust-card').forEach((card, i) => {
        card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }, i * 150);
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        obs.observe(card);
    });

    // Testimonials
    document.querySelectorAll('.testimonial-card').forEach((card, i) => {
        card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }, i * 200);
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        obs.observe(card);
    });

    // Image cards
    document.querySelectorAll('.image-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = i % 2 === 0 ? 'translateX(-30px)' : 'translateX(30px)';
        card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'; entry.target.style.transform = 'translateX(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);
        obs.observe(card);
    });

    // WhatsApp tracking
    document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('WhatsApp CTA clicked');
        });
    });

    // Reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.step-card, .trust-card, .testimonial-card, .image-card').forEach(el => {
            el.style.opacity = '1'; el.style.transform = 'none'; el.style.transition = 'none';
        });
    }

    console.log('%c Sicilia in Famiglia ', 'background: #BE5423; color: #fff; padding: 8px 16px; border-radius: 4px; font-weight: 500;');
    console.log('%c Premium Landing v2.0 ', 'background: #C9A96E; color: #1C1917; padding: 4px 12px; border-radius: 4px;');
});
