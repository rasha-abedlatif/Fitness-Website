function navigateToHash() {
    if (window.location.hash) {
        let targetId = window.location.hash.substring(1);
        let $element = $('#' + targetId);
        if ($element.length) {
            console.log("Navigating to:", targetId); // Debugging line
            exerciseSlideIndex = $exercises.index($element.closest('.Exercises-slider'));
            if (exerciseSlideIndex !== -1) {
                showExerciseSlide(exerciseSlideIndex);
                $('html, body').animate({
                    scrollTop: $element.offset().top
                }, 1000);
            } else {
                console.warn("No matching Exercises-slider found for:", targetId);
            }
        } else {
            console.log("Element not found for ID:", targetId); // Debugging line
        }
    }
}

function showExerciseSlide(index) {
    let $exerciseSlides = $exercises.eq(index).find('.exercise');

    $exercises.hide().eq(index).show();

    let $currentExercise = $exerciseSlides.first();
    if ($currentExercise.length) {
        let $target = $currentExercise.closest('.exercise').find(".upper-part");
        if ($target.length) {
            $('html, body').stop(true).animate({
                scrollTop: $target.offset().top
            }, 1000);
        } else {
            console.warn("Scroll target not found: .upper-part");
        }
    }
}
