$(document).ready(function () {
    // Navbar scroll functionality
    $(window).scroll(function () {
        var navbar = $('header'); // Ensure `header` is a valid tag in your HTML
        if ($(this).scrollTop() > 50) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });

    let currentSlide = 0;
    let $slides = $('.header');
    let slideInterval = 3000; // 3 seconds

    function showSlide(index) {
        $slides.each(function (i) {
            if (i === index) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % $slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide); 
    setInterval(nextSlide, slideInterval);
    // Exercises Slider
    var $exerciseSlider = $('.Exercises-slider');
    var $exerciseSlides = $exerciseSlider.find('.exercise');
    var totalExerciseSlides = $exerciseSlides.length;
    var exerciseSlideIndex = 0;

    function showExerciseSlide(index) {
        $exerciseSlides.hide().eq(index).show(); // Only show the current slide
    }

    $('#nextbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    $('#previousbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex - 1 + totalExerciseSlides) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    showExerciseSlide(exerciseSlideIndex); // Initialize slider with the first slide

    // Smooth Scroll for Hash Links
    if (window.location.hash) {
        var targetId = window.location.hash; // e.g., #slide2
        var $target = $(targetId);

        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top,
            }, 500); // Smooth scroll
        }

        // Ensure target is visible if hidden
        $exerciseSlides.hide();
        $target.show();
    }
});


    
