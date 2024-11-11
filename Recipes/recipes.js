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

/*--Desserts Show button coding--*/

let showbtn3 = document.getElementById('show3');
let dessertsec2 = document.getElementById('desserts-sec2');

showbtn3.addEventListener('click', function(){
    if(dessertsec2.style.display === 'none' ){
        dessertsec2.style.display = 'grid';
        showbtn3.innerHTML = 'Show Less ↑'; 
    }
    else{
        dessertsec2.style.display = 'none';
        showbtn3.innerHTML= 'Show More ↓';
    }
})

/*--Side Dishes Show button coding--*/

let showbtn4 = document.getElementById('show4');
let sidesec2 = document.getElementById('sidedishes-sec2');

showbtn4.addEventListener('click', function(){
    if( sidesec2.style.display === 'none' ){
        sidesec2.style.display = 'grid';
        showbtn4.innerHTML = 'Show Less ↑'; 
    }
    else{
        sidesec2.style.display = 'none';
        showbtn4.innerHTML= 'Show More ↓';
    }
})

/*--Drinks Show button coding--*/

let showbtn5 = document.getElementById('show4');
let drinkssec2 = document.getElementById('drinks-sec2');

showbtn5.addEventListener('click', function(){
    if( drinkssec2.style.display === 'none' ){
        drinkssec2.style.display = 'grid';
        showbtn5.innerHTML = 'Show Less ↑'; 
    }
    else{
        drinkssec2.style.display = 'none';
        showbtn5.innerHTML= 'Show More ↓';
    }
})