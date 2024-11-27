
//change of background-color of nav
window.addEventListener("scroll",function(){
    let navbar=document.querySelector('header');
    if(this.window.scrollY>50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
let menuIcon = document.querySelector('.menu-icon');
let navLinks = document.querySelector('.nav-links');
// Toggle menu visibility on click
menuIcon.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    console.log('Menu toggled:', navLinks.classList.contains('active'));
});
menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('open');
  navLinks.classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.querySelector(".dropdown-button");
  const dropdownContentWrapper = document.querySelector(".dropdown-content-wrapper");

  if (dropdownButton) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent closing the dropdown if clicked inside
      dropdownContentWrapper.classList.toggle("active");
    });

    // Close the dropdown if clicked outside
    document.addEventListener("click", () => {
      dropdownContentWrapper.classList.remove("active");
    });
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    let navLinks = document.querySelector(".nav-links .dropdown-content");
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let userName = localStorage.getItem("userName");

    if (isLoggedIn === "true" && userName) {
      navLinks.innerHTML = `
        <a href="#">${userName}</a>
        <a href="#" id="logout">Log out</a>
      `;
    } else {
      navLinks.innerHTML = `
        <a href="../account/account.html#sign-in-form">Sign in</a>
        <a href="../account/account.html#sign-up-form">Sign up</a>
      `;
    }

    // Log out functionality
    let logoutLink = document.getElementById("logout");
    if (logoutLink) {
      logoutLink.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        window.location.reload(); // Reload to update navigation
      });
    }
  });

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

