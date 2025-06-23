document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.onscroll = function() {
        // If the user scrolls down more than 300 pixels from the top, show the button
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll animation
        });
    });

    // Optional: Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});