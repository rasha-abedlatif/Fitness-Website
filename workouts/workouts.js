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
    let slides = document.querySelectorAll('.slide');
    let slideInterval = 3000; // 3 seconds
    function showSlide(index) {
        slides.forEach((slide, i) => {
            let slideContent = slide.querySelector('.slide-content');
            if (i === index) {
                slide.classList.add('active'); 
            } else {
                slide.classList.remove('active');
            }
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    showSlide(currentSlide);
    setInterval(nextSlide, slideInterval);
    function toggleMenu() {
        let menuIcon = document.querySelector('.menu-icon');
        let navLinks = document.querySelector('.nav-links');
        menuIcon.classList.toggle('active');
        navLinks.classList.toggle('active'); 
      }
      
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector('.section1')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
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
            if (starValue <= rating) {
                star.classList.add('filled'); 
            } else {
                star.classList.remove('filled'); 
            }
        });
    }    
    let exercises = document.querySelectorAll('.container');
    let randomButton = document.getElementById('randomButton');

    randomButton.addEventListener('click', () => {
        exercises.forEach(exercise => exercise.classList.remove('highlight'));
        let randomIndex = Math.floor(Math.random() * exercises.length);
        let selectedExercise = exercises[randomIndex];
        selectedExercise.classList.add('highlight');
    });
        let currentIndex = 0;
        const carouselTrack = document.querySelector('.carousel-track');
        const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
        const leftButton = document.querySelector('#prev');
        const rightButton = document.querySelector('#next');
        const itemWidth = carouselItems[0].getBoundingClientRect().width + 20; 
        const firstClone = carouselItems.slice(0, 3).map(item => item.cloneNode(true));
        const lastClone = carouselItems.slice(-3).map(item => item.cloneNode(true));
        firstClone.forEach(clone => carouselTrack.appendChild(clone));
        lastClone.forEach(clone => carouselTrack.insertBefore(clone, carouselTrack.firstChild));
        currentIndex += lastClone.length;
        function updateTrackPosition() {
            const offset = -currentIndex * itemWidth;
            carouselTrack.style.transform = `translateX(${offset}px)`;
        }
        function moveToNext() {
            currentIndex++;
            carouselTrack.style.transition = 'transform 0.3s ease-in-out';
            updateTrackPosition();
            if (currentIndex === carouselItems.length + lastClone.length) {
                setTimeout(() => {
                    currentIndex = lastClone.length; 
                    carouselTrack.style.transition = 'none'; 
                    updateTrackPosition();
                }, 300); 
            }
        }
        function moveToPrevious() {
            currentIndex--;
            carouselTrack.style.transition = 'transform 0.3s ease-in-out';
            updateTrackPosition();
            if (currentIndex < lastClone.length) {
                setTimeout(() => {
                    currentIndex = carouselItems.length + lastClone.length - 1; // Reset index
                    carouselTrack.style.transition = 'none'; // Disable transition
                    updateTrackPosition();
                }, 300); 
            }
        }
        rightButton.addEventListener('click', moveToNext);
        leftButton.addEventListener('click', moveToPrevious);
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
