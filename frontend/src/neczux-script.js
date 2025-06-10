document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header Effect
    const header = document.querySelector('.sticky-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Client Logo Carousel Animation
    const logoCarousel = document.querySelector('.logo-carousel');
    if (logoCarousel) {
        let scrollAmount = 0;
        const scrollSpeed = 1;
        
        function animateLogos() {
            scrollAmount += scrollSpeed;
            if (scrollAmount >= logoCarousel.scrollWidth / 2) {
                scrollAmount = 0;
            }
            logoCarousel.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(animateLogos);
        }
        
        // Start animation if there are enough logos
        if (logoCarousel.children.length > 5) {
            animateLogos();
        }
    }

    // Video Background Fallback
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        heroVideo.addEventListener('error', function() {
            // If video fails to load, use background image instead
            document.querySelector('.hero-video-background').innerHTML = '';
            document.querySelector('#hero').style.backgroundImage = 'url(ngg/hero-backup.jpg)';
            document.querySelector('#hero').style.backgroundSize = 'cover';
            document.querySelector('#hero').style.backgroundPosition = 'center';
        });
    }

    // Intersection Observer for Animations
    const animateElements = document.querySelectorAll('.service-card, .video-section, .client-logos');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => observer.observe(element));
});
