import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link-animate');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                textDecoration: 'underline !important',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                textDecoration: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
});