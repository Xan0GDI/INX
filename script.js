document.addEventListener('DOMContentLoaded', () => {
    console.log("Inxiske's Minecraft Portfolio Loaded!");

    // Get all sections that should animate on scroll
    const sections = document.querySelectorAll('.section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // The viewport is the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    // Create a new Intersection Observer instance
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is in view, apply the animation styles
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Add transition for smooth animation
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                // Stop observing this section once it has animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Initialize sections: set them to invisible and slightly offset
    sections.forEach(section => {
        section.style.opacity = '0'; // Start completely transparent
        section.style.transform = 'translateY(20px)'; // Start 20px below its final position
        // Start observing each section
        sectionObserver.observe(section);
    });

    // You can add more complex JavaScript interactions or animations here.
    // For example:
    // - A custom modal for messages instead of alert()
    // - Interactive elements that change on click/hover with more complex logic
    // - Parallax scrolling effects for the background or foreground elements
    // - Simple sound effects on certain interactions (e.g., button clicks)
});