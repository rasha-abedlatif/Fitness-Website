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



