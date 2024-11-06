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

const carouselTrack = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let visibleItems = calculateVisibleItems(); // Dynamically set the initial visible items based on screen width
let currentIndex = 0;

function calculateVisibleItems() {
    const screenWidth = window.innerWidth;
    
    return 1; // Default to 2 items on smaller screens
}

function updateActiveItems() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index >= currentIndex && index < currentIndex + visibleItems) {
            item.classList.add('active');
        }
    });

    const offset = currentIndex * (items[0].offsetWidth + 20); // Adjust for margin
    carouselTrack.style.transform = `translateX(-${offset}px)`;
}

function scrollLeft() {
    if (currentIndex > 0) {
        currentIndex -= visibleItems;
        if (currentIndex < 0) currentIndex = 0;
    } else {
        currentIndex = Math.max(items.length - visibleItems, 0);
    }
    updateActiveItems();
}

function scrollRight() {
    if (currentIndex < items.length - visibleItems) {
        currentIndex += visibleItems;
        if (currentIndex >= items.length) currentIndex = items.length - visibleItems;
    } else {
        currentIndex = 0;
    }
    updateActiveItems();
}

function handleResize() {
    visibleItems = calculateVisibleItems();
    updateActiveItems();
}

// Initialize the first set of visible items and handle resize
updateActiveItems();
window.addEventListener('resize', handleResize);

// Add event listeners for the buttons
prevButton.addEventListener('click', scrollLeft);
nextButton.addEventListener('click', scrollRight);

document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
        container.classList.add('active');
    });
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