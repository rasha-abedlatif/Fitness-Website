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
const carouselTrack = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
let visibleItems = 5;
let currentindex = 0;

function updateActiveItem() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentindex) {
            item.classList.add('active');
        }
    });

    // Center the active item
    const offset = currentindex * (items[0].offsetWidth + 20); // 20 is the margin
    carouselTrack.style.transform = `translateX(-${offset}px)`;
}

function scrollLeft() {
    currentindex = (currentindex === 0) ? items.length - 1 : currentindex - 1;
    updateActiveItem();
}

function scrollRight() {
    currentindex = (currentindex === items.length - 1) ? 0 : currentindex + 1;
    updateActiveItem();
}

function moveToCenter(item) {
    currentindex = items.indexOf(item);
    updateActiveItem();
}

// Initialize the first item as active
updateActiveItem();