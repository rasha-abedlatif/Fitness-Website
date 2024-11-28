// Change background-color of nav on scroll
window.addEventListener("scroll", function() {
  let navbar = document.querySelector('header');
  if (window.scrollY > 50) { 
    navbar.classList.add("scrolled"); 
  } else {
    navbar.classList.remove("scrolled"); 
  }
});
function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  if (menuIcon && navLinks) {
    menuIcon.classList.toggle('open');
    navLinks.classList.toggle('active');
    console.log('Menu toggled:', navLinks.classList.contains('active'));
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let dropdownButton = document.querySelector(".dropdown-button");
  let dropdownWrapper = document.querySelector(".dropdown-content-wrapper");
  if (dropdownButton && dropdownWrapper) {
    dropdownButton.addEventListener("click", (e) => {
      e.stopPropagation(); 
      dropdownWrapper.classList.toggle("active"); 
    });

    document.addEventListener("click", () => {
      dropdownWrapper.classList.remove("active");
    });
  }
});
  let navLinks = document.querySelector(".nav-links .dropdown-content");
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  let userName = localStorage.getItem("userName");

  if (navLinks) { // Only modify if navLinks is found
    if (isLoggedIn === "true" && userName) {
      navLinks.innerHTML = `
        <a href="#">${userName}</a>
        <a href="#" id="logout">Log out</a>
      `;
    } else {
      navLinks.innerHTML = `
        <a href="../html/account.html#sign-in-form">Sign in</a>
        <a href="../html/account.html#sign-up-form">Sign up</a>
      `;
    }
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
