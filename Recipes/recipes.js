/* Nav section scrolling */ 
window.addEventListener("scroll",function(){
    const navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', () => {
        document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
        container.classList.add('active');
    });
});


//effect on recipes section 
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".box #meals");
    
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




