
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 3000; // 3 seconds

// Function to display the current slide and hide others
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active'); // Show current slide
    } else {
      slide.classList.remove('active'); // Hide other slides
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
  showSlide(currentSlide);
}

// Initial display
showSlide(currentSlide);

// Set interval to change slides automatically
setInterval(nextSlide, slideInterval);
document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  // Intersection Observer to detect when .card is in the viewport
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              card.classList.add("slide-in");
          }
      });
  });

  observer.observe(card);
});
// Select all belief buttons and content items
const buttons = document.querySelectorAll('.belief-button');
const contentItems = document.querySelectorAll('.belief-item');

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and items
    buttons.forEach((btn) => btn.classList.remove('active'));
    contentItems.forEach((item) => item.classList.remove('active'));

    // Add 'active' class to the clicked button and corresponding content
    button.classList.add('active');
    const targetId = button.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

