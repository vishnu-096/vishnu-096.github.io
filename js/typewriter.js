// JavaScript for typewriting effect
function typeWriter(text, element, delay) {
    let i = 0;
    const speed = 50; // Adjust typing speed as needed
    const targetElement = document.getElementById(element);

    function type() {
        if (i < text.length) {
            targetElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Reset the text and start typing animation again
            setTimeout(() => {
                targetElement.innerHTML = '';
                i = 0;
                type();
            }, delay); // Delay before starting the animation again
        }
    }

    // Start the typing animation
    type();
}

// Call the typewriter function when the page loads
window.addEventListener('load', () => {
    typeWriter("Robotics, Motion Planning, Control, Computer Vision, Reinforcement Learning, Real-Time Deployment, Embedded System ", 'skillsText', 1000); // Replace with your skills
});
