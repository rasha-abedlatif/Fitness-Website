window.addEventListener("scroll", function () {
    let navbar = document.querySelector('header');
    if (this.window.scrollY > 50) {
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
let carouselTrack = document.querySelector('.carousel-track');
let items = Array.from(document.querySelectorAll('.carousel-item'));
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let currentIndex = 0;

function updateActiveItem() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
    let offset = currentIndex * (items[0].offsetWidth + 10); // Adjust 10 for margin
    carouselTrack.style.transform = `translateX(-${offset}px)`;
}

function previous() {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateActiveItem();
}

function next() {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateActiveItem();
}
function moveToCenter(item) {
    currentIndex = items.indexOf(item);
    updateActiveItem();
}
updateActiveItem();  
prevButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);

