// FIXED SCROLL NAVIGATION:
window.addEventListener('scroll',function(){
    var header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);   
}); 
function toggle(){
    var header=document.getElementById('header');
    header.classList.toggle('active');
};

//change of background-color of nav
window.addEventListener("scroll",function(){
    const navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

//effect on meals button
const button = document.querySelector('.meal-btn');

button.addEventListener('click', function () {
    button.classList.toggle('clicked');
});

//effect on recipes section 
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".top h1, .top .meal-btn, .box #meals");
    
    function animateOnScroll() {
        elementsToAnimate.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add("appear");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once in case elements are already in view
});

window.addEventListener("scroll", function() {
    const header = document.querySelector(".work-btn");
    if (window.scrollY > 50) { // Adjust scroll value as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const workoutsSection = document.querySelector('.workout');
    if (workoutsSection) {
        console.log('Workouts section is loaded and exists on the page.');
    } else {
        console.warn('Workouts section not found. Check if HTML is correct.');
    }
});