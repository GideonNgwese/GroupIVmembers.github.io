document.addEventListener("DOMContentLoaded", function() {
    // Accordion functionality
    const accordions = document.querySelectorAll(".accordion-toggle");
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.style.maxHeight
                ? content.style.maxHeight = null
                : content.style.maxHeight = content.scrollHeight + "px";
        });
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); // Initialize carousel

    setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
});
