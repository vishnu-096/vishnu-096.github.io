document.addEventListener('DOMContentLoaded', function () {
    // Initialize Glide.js carousel
    new Glide('.glide', {
        type: 'carousel',
        perView: 4, // Number of projects visible at a time
        focusAt: 'center',
        gap: 20, // Adjust spacing between projects
        breakpoints: {
            768: {
                perView: 1, // Adjust for mobile view
            }
        }
    }).mount();
});
