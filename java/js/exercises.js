$(document).ready(function () {
    function navigateToHash() {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const $element = $('#' + targetId);
            if ($element.length) {
                console.log("Navigating to:", targetId); // Debugging line
                exerciseSlideIndex = $element.closest('.Exercises-slider').index();
                showExerciseSlide(exerciseSlideIndex);
                $('html, body').animate({
                    scrollTop: $element.offset().top
                }, 1000);
            } else {
                console.log("Element not found for ID:", targetId); // Debugging line
            }
        }
    }

    let currentSlide = 0;
    let $slides = $('.header');
    let slideInterval = 3000; // 3 seconds

    function showSlide(index) {
        $slides.each(function (i) {
            $(this).toggleClass('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % $slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);

    let $exercises = $(".Exercises-slider");
    let innerExercise=$(".exercise")
    let totalExerciseSlides = $exercises.length;
    const id = window.location.hash.substring(1);
    console.log(id)
    let exerciseSlideIndex = $exercises.find(".exercise").index($(`#${id}`));
    console.log(exerciseSlideIndex)
    function showExerciseSlide(index) {
        let $exerciseSlides = $exercises.eq(index).find('.exercise');

        $exercises.hide().eq(index).show();

        let $currentExercise = $exerciseSlides.first();
        if ($currentExercise.length) {
            $('html, body').stop(true).animate({
                scrollTop: $currentExercise.closest('.exercise').find(".upper-part").offset().top
            }, 1000);
        }
    }


    $(".btn").on("click", function (e) {
        e.preventDefault();
        showExerciseSlide(exerciseSlideIndex);
        exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
    });

    $('#nextbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    $('#previousbtn').click(function () {
        exerciseSlideIndex = (exerciseSlideIndex - 1 + totalExerciseSlides) % totalExerciseSlides;
        showExerciseSlide(exerciseSlideIndex);
    });

    showExerciseSlide(exerciseSlideIndex);

    console.log('jQuery is loaded and working!');
});