document.addEventListener('DOMContentLoaded', () => {
    const waddleButton = document.getElementById('waddleButton');
    const waddlingDuck = document.getElementById('waddlingDuck');
    const duckSection = document.getElementById('duck-waddle-section');

    if (waddleButton && waddlingDuck && duckSection) {
        waddleButton.addEventListener('click', () => {
            // Reset duck position and display
            waddlingDuck.style.left = '0px';
            waddlingDuck.style.display = 'block';
            waddlingDuck.style.top = `${duckSection.offsetHeight - waddlingDuck.offsetHeight - 20}px`; // Position at bottom of section

            let position = 0;
            const speed = 5; // Pixels per frame
            const animationDuration = 5000; // milliseconds
            const startTime = performance.now();

            function animateDuck(currentTime) {
                const elapsedTime = currentTime - startTime;
                if (elapsedTime < animationDuration) {
                    position = (elapsedTime / animationDuration) * (duckSection.offsetWidth - waddlingDuck.offsetWidth);
                    waddlingDuck.style.left = `${position}px`;
                    requestAnimationFrame(animateDuck);
                } else {
                    // Ensure it ends at the right edge
                    waddlingDuck.style.left = `${duckSection.offsetWidth - waddlingDuck.offsetWidth}px`;
                    setTimeout(() => {
                        waddlingDuck.style.display = 'none'; // Hide after waddling
                    }, 500); // Keep visible briefly at the end
                }
            }
            requestAnimationFrame(animateDuck);
        });
    }
});
