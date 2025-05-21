window.addEventListener("scroll", function() {
  let navbar = document.querySelector('header');
  if (this.window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});

let container = document.getElementById("container");
let signup = document.getElementById("signUp");
let signin = document.getElementById("signIn");

// Part 1: Toggle panels
signup.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signin.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

//Part 2: by clicking on the drop down menu bar on sign in / sign up it takes u to the right panel
// Check the URL fragment on page load
window.addEventListener("load", function () {
  let container = document.getElementById("container");

  // Show the sign-up form if the URL contains #sign-up
  if (window.location.hash === "#sign-up") {
      container.classList.add("right-panel-active");
  }

  // Show the sign-in form if the URL contains #sign-in
  if (window.location.hash === "#sign-in") {
      container.classList.remove("right-panel-active");
  }
});

// Handle nav Sign Up click
let navSignUp = document.getElementById("navSignUp");
navSignUp.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.hash = "#sign-up"; 
  let container = document.getElementById("container");
  container.classList.add("right-panel-active"); 
});

// Handle nav Sign In click
let navSignIn = document.getElementById("navSignIn");
navSignIn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.hash = "#sign-in";
  let container = document.getElementById("container");
  container.classList.remove("right-panel-active");
});


// Select the signup form and inputs
let signupForm = document.querySelector('.sign-up-container form');
let registerButton = document.getElementById('registerButton');
let inputs = signupForm.querySelectorAll('input[required]');

// Validate all required fields
function checkInputs() {
  let allValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      allValid = false;
    }
    if (input.type === 'checkbox' && !input.checked) {
      allValid = false;
    }
  });

  // Enable or disable the button based on input validation
  registerButton.disabled = !allValid;
}

// Event listeners for input validation
inputs.forEach(input => {
  input.addEventListener('input', checkInputs);
  if (input.type === 'radio' || input.type === 'checkbox') {
    input.addEventListener('change', checkInputs);
  }
});

// Initial check when the page loads
checkInputs();

// Password and Confirm Password validation
let passwordInput = signupForm.querySelector('input[name="password"]');
let confirmPasswordInput = signupForm.querySelector('input[name="confirmPassword"]');

// Create the warning message element
let passwordWarning = document.createElement('p');
passwordWarning.classList.add('confirm-password-warning');
passwordWarning.style.color = 'red';
passwordWarning.style.fontSize = '0.9rem';
passwordWarning.textContent = 'Confirm password does not match the password!';
passwordWarning.style.display = 'none';
confirmPasswordInput.after(passwordWarning);

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordWarning.style.display = 'block';
  } else {
    passwordWarning.style.display = 'none';
  }
});

// Handle form submission for sign-up
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  if (!registerButton.disabled) {
    // Save email and password to localStorage
    let email = signupForm.querySelector('input[name="email"]').value;
    let password = signupForm.querySelector('input[name="password"]').value;
    
    // Save user data in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    // Redirect to the home page after successful registration
    window.location.href = '../home/home.html'; 
  } else {
    alert("Please fill out all fields correctly.");
  }
});

// Handle form submission for sign-in
let loginForm = document.querySelector('.sign-in-container form');
let emailInput = loginForm.querySelector('input[name="name"]');
let loginPasswordInput = loginForm.querySelector('input[name="password"]');
let loginButton = loginForm.querySelector('button[type="submit"]');

// Warning messages for login
let loginWarning = document.createElement('p');
loginWarning.style.color = 'red';
loginWarning.style.fontSize = '0.9rem';
loginWarning.style.display = 'none';
loginForm.appendChild(loginWarning);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  let emailValue = emailInput.value.trim();
  let passwordValue = loginPasswordInput.value.trim();

  // Retrieve stored email and password from localStorage
  let storedEmail = localStorage.getItem('userEmail');
  let storedPassword = localStorage.getItem('userPassword');

  // Check if email or password is invalid
  if (!storedEmail || !storedPassword) {
    loginWarning.textContent = 'No account found. Please register first!';
    loginWarning.style.display = 'block';
  } else if (emailValue !== storedEmail && passwordValue !== storedPassword) {
    loginWarning.textContent = 'Both email and password are incorrect!';
    loginWarning.style.display = 'block';
  } else if (emailValue !== storedEmail) {
    loginWarning.textContent = 'Email is incorrect!';
    loginWarning.style.display = 'block';
  } else if (passwordValue !== storedPassword) {
    loginWarning.textContent = 'Password is incorrect!';
    loginWarning.style.display = 'block';
  } else {
    loginWarning.style.display = 'none'; 
    // Redirect to the home page
    window.location.href = '../home/home.html'; 
  }
});
