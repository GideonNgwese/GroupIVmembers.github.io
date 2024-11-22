// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll functionality for navigation links
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href !== '#') {
                window.location.href = href;
            }
        });
    });

    // Add hover animation for dashboard cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click animation for buttons
    const buttons = document.querySelectorAll('button, .auth-section a');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;

            const x = e.clientX - rect.left - size/2;
            const y = e.clientY - rect.top - size/2;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add scroll reveal animation for dashboard cards
    const revealOnScroll = () => {
        const cards = document.querySelectorAll('.dashboard-card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize card animations
    const initializeCards = () => {
        const cards = document.querySelectorAll('.dashboard-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    };

    // Call initial setup
    initializeCards();
    revealOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);

    // Add mobile menu toggle functionality
    const createMobileMenu = () => {
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            const menuButton = document.createElement('button');
            menuButton.innerHTML = '☰';
            menuButton.classList.add('mobile-menu-toggle');
            menuButton.style.cssText = `
                position: fixed;
                top: 10px;
                left: 10px;
                z-index: 1000;
                background: #2563eb;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                cursor: pointer;
            `;

            document.body.appendChild(menuButton);

            menuButton.addEventListener('click', () => {
                sidebar.classList.toggle('show-mobile-menu');
            });
        }
    };

    // Initialize mobile menu
    createMobileMenu();

    // Handle window resize
    window.addEventListener('resize', () => {
        const existingButton = document.querySelector('.mobile-menu-toggle');
        if (existingButton) {
            existingButton.remove();
        }
        createMobileMenu();
    });
}); 