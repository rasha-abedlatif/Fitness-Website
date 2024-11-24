$(document).ready(function () {
    let slideIndex = 0;
    const slides = $(".slides");
    const dots = $(".dot");
    const slideCount = slides.length;

    function showSlide(index) {
        slides.removeClass("active-slide").fadeOut(1000);
        slides.eq(index).addClass("active-slide").fadeIn(1000);

        dots.removeClass("active");
        dots.eq(index).addClass("active");
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slideCount;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        showSlide(slideIndex);
    }

    // Initialize the slideshow
    showSlide(slideIndex);

    // Auto slide every 3 seconds
    const autoSlide = setInterval(nextSlide, 3000);

    // Next and previous controls
    $(".next").click(function () {
        nextSlide();
    });

    $(".prev").click(function () {
        prevSlide();
    });

    // Dot navigation
    $(".dot").click(function () {
        slideIndex = $(this).data("slide");
        showSlide(slideIndex);
    });
});