document.querySelectorAll(".container").forEach((container) => {
  container.addEventListener("click", () => {
    document
      .querySelectorAll(".container")
      .forEach((c) => c.classList.remove("active"));
    container.classList.add("active");
  });
});

$(document).ready(function () {
  function checkScroll() {
    let scrollPosition = $(window).scrollTop();
    let windowHeight = $(window).height();

    let firstImagePosition = $("#firstimg").offset().top;
    let secondImagePosition = $("#secondimg").offset().top;

    if (scrollPosition + windowHeight > firstImagePosition) {
      $("#firstimg").addClass("visible");
    }

    if (scrollPosition + windowHeight > secondImagePosition) {
      $("#secondimg").addClass("visible");
    }
  }

  checkScroll();

  $(window).on("scroll", function () {
    checkScroll();
  });

  $(".btn-div").click(function () {
    $(".inputs-div input, .inputs-div textarea").val("");

    $(".inputs-div select").prop("selectedIndex", 0);

    $(
      ".inputs-div input, .inputs-div select, .inputs-div textarea"
    ).removeClass("focused");
  });

  $(".inputs-div input, .inputs-div select, .inputs-div textarea").on(
    "focus",
    function () {
      $(
        ".inputs-div input, .inputs-div select, .inputs-div textarea"
      ).removeClass("focused");

      $(this).addClass("focused");
    }
  );
});
