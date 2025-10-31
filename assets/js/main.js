// Main JavaScript for Armada BJJ website

(function() {
    'use strict';

    // DOM Ready
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScrolling();
        initHeaderScroll();
        initAnimations();
    });

    // Mobile menu functionality
    function initMobileMenu() {
        const navTrigger = document.getElementById('nav-trigger');
        const menuIcon = document.querySelector('.menu-icon');
        const trigger = document.querySelector('.trigger');
        const siteNav = document.querySelector('.site-nav');

        if (navTrigger && menuIcon) {
            // Toggle menu when clicking the hamburger icon
            menuIcon.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                navTrigger.checked = !navTrigger.checked;
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!siteNav.contains(e.target) && navTrigger.checked) {
                    navTrigger.checked = false;
                }
            });

            // Close menu when clicking on a navigation link
            if (trigger) {
                const links = trigger.querySelectorAll('.page-link');
                links.forEach(link => {
                    link.addEventListener('click', function() {
                        navTrigger.checked = false;
                    });
                });
            }

            // Handle escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navTrigger.checked) {
                    navTrigger.checked = false;
                }
            });
        }
    }

    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }

            lastScrollTop = scrollTop;
        });
    }

    // Animation on scroll
    function initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll('.feature-card, .program-card, .instructor-card, .blog-post');
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Form validation and handling
    window.handleFormSubmission = function(formId, successMessage) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (!isValid) {
                alert('Please fill in all required fields.');
                return;
            }

            // Email validation
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    isValid = false;
                    field.style.borderColor = '#ff4444';
                    alert('Please enter a valid email address.');
                }
            });

            if (!isValid) return;

            // Here you would typically send the form data to your backend
            // For now, just show success message and reset form
            alert(successMessage || 'Thank you for your message! We\'ll get back to you soon.');
            form.reset();
        });
    };

    // Video placeholder functionality
    const videoPlaceholders = document.querySelectorAll('.video-placeholder');
    videoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // Here you would typically embed the actual video
            alert('Video functionality will be implemented here.');
        });
    });

})();