document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');
    
    // Toggle mobile menu visibility
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Hide mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation on scroll
    const sections = document.querySelectorAll('.section-fade-in');
    const observerOptions = {
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hide/show navbar on scroll
    let lastScrollY = window.scrollY;
    const mainHeader = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        // Return early if the mobile menu is open, preventing the navbar from hiding
        if (!mobileMenu.classList.contains('hidden')) {
            return;
        }

        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            mainHeader.classList.add('header-hidden');
            mainHeader.classList.remove('header-visible');
        } else {
            // Scrolling up or at the top
            mainHeader.classList.add('header-visible');
            mainHeader.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    });
    
    // Theme toggle logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const themeIcon = document.getElementById('theme-icon');
    const themeIconMobile = document.getElementById('theme-icon-mobile');
    
    // Initial theme setting based on localStorage or OS preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeIconMobile.classList.remove('fa-sun');
        themeIconMobile.classList.add('fa-moon');
    } else {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeIconMobile.classList.remove('fa-moon');
        themeIconMobile.classList.add('fa-sun');
    }

    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            themeIconMobile.classList.remove('fa-moon');
            themeIconMobile.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            themeIconMobile.classList.remove('fa-sun');
            themeIconMobile.classList.add('fa-moon');
        }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Modal logic has been moved to assets/js/modal.js
});
