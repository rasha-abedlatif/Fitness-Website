
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

/*-- Decleration of buttons and sections--*/ 
let showbtn1 = document.getElementById('show1');
let bsec2 = document.getElementById('breakfast-sec2');

let showbtn2 = document.getElementById('show2');
let mainsec2 = document.getElementById('mainmeal-sec2');

let showbtn3 = document.getElementById('show3');
let dessertsec2 = document.getElementById('desserts-sec2');

let showbtn4 = document.getElementById('show4');
let sidesec2 = document.getElementById('sidedishes-sec2');

let showbtn5 = document.getElementById('show5');
let drinkssec2 = document.getElementById('drinks-sec2');

let showbtn6 = document.getElementById('show6');
let snackssec2 = document.getElementById('snacks-sec2');
/*--Breakfast Show button coding--*/

showbtn1.addEventListener('click', function(){

        if( bsec2.style.display === 'none' ){
            bsec2.style.display = 'flex';
            showbtn1.innerHTML = 'Show Less ↑'; 

        if( bsec2.style.display === 'none' ){
        bsec2.style.display = 'flex';
        showbtn1.innerHTML = 'Show Less ↑'; 
        }
       if(mainsec2.style.display === 'flex'){
            mainsec2.style.display = 'none';
            showbtn2.innerHTML= 'Show More ↓';
        }

        if(dessertsec2.style.display === 'flex'){
            dessertsec2.style.display = 'none';
            showbtn3.innerHTML= 'Show More ↓';
        }


        if(sidesec2.style.display === 'flex'){
            sidesec2.style.display = 'none';
            showbtn4.innerHTML= 'Show More ↓';
        }

        if(drinkssec2.style.display === 'flex'){
            drinkssec2.style.display = 'none';
            showbtn5.innerHTML= 'Show More ↓';
        }

        if(snackssec2.style.display === 'flex'){
            snackssec2.style.display = 'none';
            showbtn6.innerHTML= 'Show More ↓';
        }} 
        else{
        bsec2.style.display = 'none';
        showbtn1.innerHTML= 'Show More ↓';
    }
   
})

/*--Main Meal Show button coding--*/

showbtn2.addEventListener('click', function(){
    if( mainsec2.style.display === 'none' ){
        mainsec2.style.display = 'flex';
        showbtn2.innerHTML = 'Show Less ↑'; 

        if(bsec2.style.display === 'flex'){
           bsec2.style.display = 'none';
            showbtn1.innerHTML= 'Show More ↓';
        }

        if(dessertsec2.style.display === 'flex'){
            dessertsec2.style.display = 'none';
            showbtn3.innerHTML= 'Show More ↓';
        }


        if(sidesec2.style.display === 'flex'){
            sidesec2.style.display = 'none';
            showbtn4.innerHTML= 'Show More ↓';
        }

        if(drinkssec2.style.display === 'flex'){
            drinkssec2.style.display = 'none';
            showbtn5.innerHTML= 'Show More ↓';
        }

        if(snackssec2.style.display === 'flex'){
            snackssec2.style.display = 'none';
            showbtn6.innerHTML= 'Show More ↓';
        }

    }
    else{
        mainsec2.style.display = 'none';
        showbtn2.innerHTML= 'Show More ↓';
    }
})

/*--Desserts Show button coding--*/



showbtn3.addEventListener('click', function(){
    if(dessertsec2.style.display === 'none' ){
        dessertsec2.style.display = 'flex';
        showbtn3.innerHTML = 'Show Less ↑';
        
        if(mainsec2.style.display === 'flex'){
            mainsec2.style.display = 'none';
            showbtn2.innerHTML= 'Show More ↓';
        }

        if(bsec2.style.display === 'flex'){
            bsec2.style.display = 'none';
            showbtn1.innerHTML= 'Show More ↓';
        }


        if(sidesec2.style.display === 'flex'){
            sidesec2.style.display = 'none';
            showbtn4.innerHTML= 'Show More ↓';
        }

        if(drinkssec2.style.display === 'flex'){
            drinkssec2.style.display = 'none';
            showbtn5.innerHTML= 'Show More ↓';
        }

        if(snackssec2.style.display === 'flex'){
            snackssec2.style.display = 'none';
            showbtn6.innerHTML= 'Show More ↓';
        }

    }
    else{
        dessertsec2.style.display = 'none';
        showbtn3.innerHTML= 'Show More ↓';
    }
})

/*--Side Dishes Show button coding--*/



showbtn4.addEventListener('click', function(){
    if( sidesec2.style.display === 'none' ){
        sidesec2.style.display = 'flex';
        showbtn4.innerHTML = 'Show Less ↑'; 

        if(mainsec2.style.display === 'flex'){
            mainsec2.style.display = 'none';
            showbtn2.innerHTML= 'Show More ↓';
        }

        if(dessertsec2.style.display === 'flex'){
            dessertsec2.style.display = 'none';
            showbtn3.innerHTML= 'Show More ↓';
        }


        if(bsec2.style.display === 'flex'){
            bsec2.style.display = 'none';
            showbtn1.innerHTML= 'Show More ↓';
        }

        if(drinkssec2.style.display === 'flex'){
            drinkssec2.style.display = 'none';
            showbtn5.innerHTML= 'Show More ↓';
        }

        if(snackssec2.style.display === 'flex'){
            snackssec2.style.display = 'none';
            showbtn6.innerHTML= 'Show More ↓';
        }

    }
    else{
        sidesec2.style.display = 'none';
        showbtn4.innerHTML= 'Show More ↓';
    }
})

/*--Drinks Show button coding--*/



showbtn5.addEventListener('click', function(){
    if( drinkssec2.style.display === 'none' ){
        drinkssec2.style.display = 'flex';
        showbtn5.innerHTML = 'Show Less ↑'; 

        if(mainsec2.style.display === 'flex'){
            mainsec2.style.display = 'none';
            showbtn2.innerHTML= 'Show More ↓';
        }

        if(dessertsec2.style.display === 'flex'){
            dessertsec2.style.display = 'none';
            showbtn3.innerHTML= 'Show More ↓';
        }


        if(sidesec2.style.display === 'flex'){
            sidesec2.style.display = 'none';
            showbtn4.innerHTML= 'Show More ↓';
        }

        if(bsec2.style.display === 'flex'){
            bsec2.style.display = 'none';
            showbtn1.innerHTML= 'Show More ↓';
        }

        if(snackssec2.style.display === 'flex'){
            snackssec2.style.display = 'none';
            showbtn6.innerHTML= 'Show More ↓';
        }

    }
    else{
        drinkssec2.style.display = 'none';
        showbtn5.innerHTML= 'Show More ↓';
    }
})

/*--Snacks Show button coding--*/



showbtn6.addEventListener('click', function(){
    if( snackssec2.style.display === 'none' ){
        snackssec2.style.display = 'flex';
        showbtn6.innerHTML = 'Show Less ↑'; 

        if(mainsec2.style.display === 'flex'){
            mainsec2.style.display = 'none';
            showbtn2.innerHTML= 'Show More ↓';
        }

        if(dessertsec2.style.display === 'flex'){
            dessertsec2.style.display = 'none';
            showbtn3.innerHTML= 'Show More ↓';
        }


        if(sidesec2.style.display === 'flex'){
            sidesec2.style.display = 'none';
            showbtn4.innerHTML= 'Show More ↓';
        }

        if(drinkssec2.style.display === 'flex'){
            drinkssec2.style.display = 'none';
            showbtn5.innerHTML= 'Show More ↓';
        }

        if(bsec2.style.display === 'flex'){
           bsec2.style.display = 'none';
            showbtn1.innerHTML= 'Show More ↓';
        }

    }
    else{
        snackssec2.style.display = 'none';
        showbtn6.innerHTML= 'Show More ↓';
    }
})


