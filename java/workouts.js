// Slide Show Logic (Header)
let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let slideInterval = 3000; // 3 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, slideInterval);

// Smooth Scroll to Section
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.section1')?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Rating System with Local Storage
document.querySelectorAll('.container').forEach(card => {
    let exerciseId = card.getAttribute('data-id');
    let savedRating = localStorage.getItem(`rating-${exerciseId}`);
    if (savedRating) {
        fillStars(card, parseInt(savedRating));
    }

    let stars = card.querySelectorAll('.rating span');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            let rating = parseInt(star.getAttribute('data-value'));
            localStorage.setItem(`rating-${exerciseId}`, rating);
            fillStars(card, rating);
        });
    });
});

function fillStars(card, rating) {
    let stars = card.querySelectorAll('.rating span');
    stars.forEach(star => {
        let starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= rating);
    });
}

// Random Exercise Highlighter
let exercises = document.querySelectorAll('.container');
let randomButton = document.getElementById('randomButton');
randomButton.addEventListener('click', () => {
    exercises.forEach(exercise => exercise.classList.remove('highlight'));
    let randomIndex = Math.floor(Math.random() * exercises.length);
    exercises[randomIndex].classList.add('highlight');
});

// Carousel Functionality
let currentIndex = 0;
let carouselTrack = document.querySelector('.carousel-track');
let carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
let leftButton = document.querySelector('#prev');
let rightButton = document.querySelector('#next');
let itemWidth = carouselItems[0].getBoundingClientRect().width + 20;

// Clone the first 3 and last 3 items for infinite scrolling effect
let firstClone = carouselItems.slice(0, 3).map(item => item.cloneNode(true));
let lastClone = carouselItems.slice(-3).map(item => item.cloneNode(true));

firstClone.forEach(clone => carouselTrack.appendChild(clone));
lastClone.forEach(clone => carouselTrack.insertBefore(clone, carouselTrack.firstChild));

currentIndex += lastClone.length;

// Update track position for carousel
function updateTrackPosition() {
    let offset = -currentIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${offset}px)`;
}

// Move carousel to next item
function moveToNext() {
    currentIndex++;
    carouselTrack.style.transition = 'transform 0.3s ease-in-out';
    updateTrackPosition();

    // Reset carousel position if at the end
    if (currentIndex === carouselItems.length + lastClone.length) {
        setTimeout(() => {
            currentIndex = lastClone.length;
            carouselTrack.style.transition = 'none';
            updateTrackPosition();
        }, 300);
    }
}

// Move carousel to previous item
function moveToPrevious() {
    currentIndex--;
    carouselTrack.style.transition = 'transform 0.3s ease-in-out';
    updateTrackPosition();

    // Reset carousel position if at the beginning
    if (currentIndex < lastClone.length) {
        setTimeout(() => {
            currentIndex = carouselItems.length + lastClone.length - 1; // Reset index
            carouselTrack.style.transition = 'none'; // Disable transition
            updateTrackPosition();
        }, 300);
    }
}

// Button click handlers for carousel
let isMoving = false;
function handleButtonClick(moveFunction) {
    if (!isMoving) {
        isMoving = true;
        moveFunction();
        setTimeout(() => {
            isMoving = false;
        }, 300);
    }
}

rightButton.addEventListener('click', () => handleButtonClick(moveToNext));
leftButton.addEventListener('click', () => handleButtonClick(moveToPrevious));

updateTrackPosition();

// Rating Display for Apps
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
