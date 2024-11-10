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


/*--Breakfast Show button coding--*/
let showbtn1 = document.getElementById('show1');
let bsec2 = document.getElementById('breakfast-sec2');

showbtn1.addEventListener('click', function(){
    if( bsec2.style.display === 'none' ){
        bsec2.style.display = 'grid';
        showbtn1.innerHTML = 'Show Less ↑'; 
    }
    else{
        bsec2.style.display = 'none';
        showbtn1.innerHTML= 'Show More ↓';
    }
})

/*--Main Meal Show button coding--*/

let showbtn2 = document.getElementById('show2');
let mainsec2 = document.getElementById('mainmeal-sec2');

showbtn2.addEventListener('click', function(){
    if( mainsec2.style.display === 'none' ){
        mainsec2.style.display = 'grid';
        showbtn2.innerHTML = 'Show Less ↑'; 
    }
    else{
        mainsec2.style.display = 'none';
        showbtn2.innerHTML= 'Show More ↓';
    }
})