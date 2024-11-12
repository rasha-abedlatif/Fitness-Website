window.addEventListener('scroll',function(){
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);   
}); 
function toggle(){
    let header=document.getElementById('header');
    header.classList.toggle('active');
};
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
    const exercises = document.querySelectorAll('.container');
    const randomButton = document.getElementById('randomButton');
    
    randomButton.addEventListener('click', () => {
        // Remove highlight from any previously selected exercise
        exercises.forEach(exercise => exercise.classList.remove('highlight'));

        // Select a random exercise
        const randomIndex = Math.floor(Math.random() * exercises.length);
        const selectedExercise = exercises[randomIndex];
        
        // Add highlight class to the selected exercise
        selectedExercise.classList.add('highlight');
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const leftButton = document.querySelector('#prev');
    const rightButton = document.querySelector('#next');

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
        let rating = parseFloat(ratingText); // Convert rating text to a number
        let stars = app.querySelector(".star");

        // Set number of filled stars based on the rating
        const filledStars = Math.round(rating); // Round rating to nearest whole number for star count

        // Color the stars
        stars.innerHTML = "";
        for (let i = 1; i <= 5; i++) {
            let star = document.createElement("span");
            star.innerHTML = "&#9733;"; // Star symbol
            star.classList.add("star");
            if (i <= filledStars) {
                star.classList.add("filled"); // Add filled class based on rating
            }
            stars.appendChild(star);
        }
    });
});