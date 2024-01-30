// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Set the interval for scrolling
    setInterval(scrollImages, 2000); // Change the interval (in milliseconds) as needed

    function scrollImages() {
        // Get the image container
        var imageWrapper = document.getElementById('imageWrapper');

        // Clone the first image
        var clone = imageWrapper.firstElementChild.cloneNode(true);

        // Append the clone to the end
        imageWrapper.appendChild(clone);

        // Scroll the container to the left
        imageWrapper.style.transition = 'transform  0.5s ease-in-out';
        imageWrapper.style.transform = 'translateX(-50%)';

        // Set a timeout to remove the clone after the transition
        setTimeout(function () {
            imageWrapper.style.transition = 'none';
            imageWrapper.style.transform = 'translateX(0)';
            imageWrapper.removeChild(imageWrapper.firstElementChild);
        }, 1000); // Adjust the timeout based on your transition duration
    }
});
