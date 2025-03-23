import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-image');
                img.classList.add('loaded');
                
                // Ensure glass effect is visible
                const glassEffect = img.nextElementSibling;
                if (glassEffect && glassEffect.classList.contains('glass-effect')) {
                    glassEffect.style.display = 'block';
                }

                // GSAP animation when image loads
                gsap.from(img, {
                    duration: 0.6,
                    scale: 0.8,
                    opacity: 0,
                    ease: 'power2.out'
                });
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 100px 0px'
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});