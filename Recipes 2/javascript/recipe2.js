$(document).ready(function () {
    let listimg = ['images2/img1.jpg', 'images2/img2.jpg', 'images2/img3.webp', 'images2/img4.jpg', ];
    let index = 0;
    let $image = $('.slides');
    let intervalTime = 3000; // Time in milliseconds for auto-slide
    let autoSlide;

    // Function to change the image
    function changeImage(next = true) {
        index = next ? (index + 1) % listimg.length : (index - 1 + listimg.length) % listimg.length;
        $image.attr('src', listimg[index]);
    }

    // Start automatic sliding
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            changeImage(true); // Automatically go to the next image
        }, intervalTime);
    }

    // Stop automatic sliding
    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    // Event listeners for buttons
    $('.prev').on('click', function () {
        stopAutoSlide(); // Stop auto sliding when user interacts
        changeImage(false); // Go to the previous image
        startAutoSlide(); // Restart auto sliding
    });

    $('.next').on('click', function () {
        stopAutoSlide(); // Stop auto sliding when user interacts
        changeImage(true); // Go to the next image
        startAutoSlide(); // Restart auto sliding
    });

    // Initialize auto-slide
    startAutoSlide();
});