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

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn-div");
  
  button.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    
    const requiredFields = [
      { selector: "input[type='email']", name: "Email" },
      { selector: "input[placeholder='Subject..*']", name: "Subject" },
      { selector: "textarea[name='Message']", name: "Message" }
    ];
    
    const missingFields = [];
    
    requiredFields.forEach((field) => {
      const element = document.querySelector(field.selector);
      if (!element || element.value.trim() === "") {
        missingFields.push(field.name);
      }
    });
    
    if (missingFields.length > 0) {
      if (missingFields.length === 1) {
        alert(`Please fill out the ${missingFields[0]} field.`);
      } else {
        alert(`Your information is incomplete. Missing: ${missingFields.join(", ")}.`);
      }
    } else {
      alert("Form submitted successfully!"); // Placeholder for successful submission
    }
  });
});

