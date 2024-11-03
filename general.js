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