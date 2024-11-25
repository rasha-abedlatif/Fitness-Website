
//change of background-color of nav
window.addEventListener("scroll",function(){
    let navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let exercises = document.querySelectorAll('.container');
    let randomButton = document.getElementById('randomButton');
    
    randomButton.addEventListener('click', () => {
        exercises.forEach(exercise => exercise.classList.remove('highlight'));

        // Select a random exercise
        let randomIndex = Math.floor(Math.random() * exercises.length);
        let selectedExercise = exercises[randomIndex];
        
        // Add highlight class to the selected exercise
        selectedExercise.classList.add('highlight');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    let carouselTrack = document.querySelector('.carousel-track');
    let carouselItems = document.querySelectorAll('.carousel-item');
    let leftButton = document.querySelector('#prev');
    let rightButton = document.querySelector('#next');

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1; 
        } else if (currentIndex >= carouselItems.length) {
            currentIndex = 0; 
        }

        // Only use the width of each item
        let itemWidth = carouselItems[0].offsetWidth+20;
        let offset = -currentIndex * itemWidth;

        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    leftButton.addEventListener('click', () => moveSlide(-1));
    rightButton.addEventListener('click', () => moveSlide(1));
});
document.addEventListener("DOMContentLoaded", () => {
    let apps = document.querySelectorAll(".app");
    apps.forEach(app => {
        let ratingText = app.querySelector("h3").textContent;
        let rating = parseFloat(ratingText);
        let stars = app.querySelector(".star");

        // Set number of filled stars based on the rating
        let filledStars = Math.round(rating); // Round rating to nearest whole number for star count

        // Color the stars
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
