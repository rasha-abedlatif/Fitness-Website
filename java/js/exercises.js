$(document).ready(function () {
  $(".header").addClass("active");

  let $exercises = $(".Exercises-slider");
  let innerExercise = $(".exercise");
  let totalExerciseSlides = $exercises.length;
  const id = window.location.hash.substring(1);
  console.log(id);
  let exerciseSlideIndex = $exercises.find(".exercise").index($(`#${id}`));
  console.log(exerciseSlideIndex);
  function showExerciseSlide(index) {
    let $exerciseSlides = $exercises.eq(index).find(".exercise");

    $exercises.hide().eq(index).show();

    let $currentExercise = $exerciseSlides.first();
    if ($currentExercise.length) {
      $("html, body")
        .stop(true)
        .animate(
          {
            scrollTop: $currentExercise
              .closest(".exercise")
              .find(".upper-part")
              .offset().top,
          },
          1000
        );
    }
  }

  $(".btn").on("click", function (e) {
    e.preventDefault();
    showExerciseSlide(exerciseSlideIndex);
    exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
  });

  $("#nextbtn").click(function () {
    exerciseSlideIndex = (exerciseSlideIndex + 1) % totalExerciseSlides;
    showExerciseSlide(exerciseSlideIndex);
  });

  $("#previousbtn").click(function () {
    exerciseSlideIndex =
      (exerciseSlideIndex - 1 + totalExerciseSlides) % totalExerciseSlides;
    showExerciseSlide(exerciseSlideIndex);
  });

  showExerciseSlide(exerciseSlideIndex);

  console.log("jQuery is loaded and working!");
});
