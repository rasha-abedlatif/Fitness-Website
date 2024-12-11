
let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

//effect on meals button 
let button = document.querySelector('.meal-btn');
button.addEventListener('click', function () {
    button.classList.toggle('clicked');
});
//effect on recipes section 
document.addEventListener("DOMContentLoaded", () => {
    let elementsToAnimate = document.querySelectorAll(".top h1, .top .meal-btn, .box #meals");
    function animateOnScroll() {
        elementsToAnimate.forEach(element => {
            let rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add("appear");
            }
        });
    }
    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); 
});
// effects on workout section
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll('.card');
    let options = {
      root: null,
      threshold: 0.2
    };
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150); 
          
          observer.unobserve(entry.target);
        }
      });
    }, options);
    cards.forEach(card => {
      observer.observe(card);
    });
  });
//effect on brand slider [doing double images]:
document.addEventListener("DOMContentLoaded", function() {
  let copy = document.querySelector('.brand-slide').cloneNode(true);
  document.querySelector('.brands').appendChild(copy);
});
//effect on the FAQS:
let faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
    } else {
      faq.classList.add("active");
      faqs.forEach(otherFaq => {
        if (otherFaq != faq) {
          otherFaq.classList.remove("active");
        }
      });
    }
  });
});

