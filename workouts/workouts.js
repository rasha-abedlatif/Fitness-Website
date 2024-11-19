document.addEventListener("DOMContentLoaded", () => {
    //change of background-color of nav
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector('header');
        if (this.window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideInterval = 3000; // 3 seconds

    // Function to display the current slide and hide others
    function showSlide(index) {
        slides.forEach((slide, i) => {
            const slideContent = slide.querySelector('.slide-content');

            if (i === index) {
                slide.classList.add('active'); // Show current slide
                //   slideContent.classList.add('animate'); 
            } else {
                slide.classList.remove('active');
                //   slideContent.classList.remove('animate'); 
            }
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initialize slider
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
    let exercises = document.querySelectorAll('.container');
    let randomButton = document.getElementById('randomButton');

    randomButton.addEventListener('click', () => {
        exercises.forEach(exercise => exercise.classList.remove('highlight'));
        let randomIndex = Math.floor(Math.random() * exercises.length);
        let selectedExercise = exercises[randomIndex];
        selectedExercise.classList.add('highlight');
    });


    let currentIndex = 0;
    let carouselTrack = document.querySelector('.carousel-track');
    let carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    let leftButton = document.querySelector('#prev');
    let rightButton = document.querySelector('#next');

    let itemWidth = carouselItems[0].offsetWidth + 20;

    function updateTrackPosition() {
        let offset = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    function moveToNext() {
        if (currentIndex >= carouselItems.length - 1) {
            let firstItem = carouselTrack.firstElementChild;
            carouselTrack.appendChild(firstItem);
            currentIndex--;
        }
        currentIndex++;
        updateTrackPosition();
    }

    function moveToPrevious() {
        if (currentIndex <= 0) {
            let lastItem = carouselTrack.lastElementChild;
            carouselTrack.insertBefore(lastItem, carouselTrack.firstElementChild);
            currentIndex++;
        }
        currentIndex--;
        updateTrackPosition();
    }

    rightButton.addEventListener('click', moveToNext);
    leftButton.addEventListener('click', moveToPrevious);

    updateTrackPosition();

    updateTrackPosition();


    let apps = document.querySelectorAll(".app");

    apps.forEach(app => {
        let ratingText = app.querySelector("h3").textContent;
        let rating = parseFloat(ratingText);
        let stars = app.querySelector(".star");
        let filledStars = Math.round(rating);
        stars.innerHTML = "";
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement("span");
            star.innerHTML = "&#9733;";
            star.classList.add("star");
            if (i <= filledStars) {
                star.classList.add("filled");
            }
            stars.appendChild(star);
        }
    });
});
