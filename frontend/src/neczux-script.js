// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.createElement('button');
    menuToggle.textContent = 'Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header .container').appendChild(menuToggle);

    menuToggle.addEventListener('click', function() {
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Dropdown menu for mobile
    const dropdownToggles = document.querySelectorAll('nav > ul > li > a');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.nextElementSibling.classList.toggle('show');
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            const formData = new FormData(this);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            // Clear the form
            this.reset();
            // Show a success message
            alert('Thank you for your message. We will get back to you soon!');
        });
    }

    // Intersection Observer for fade-in animation
    const fadeElems = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElems.forEach(elem => observer.observe(elem));
});

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
