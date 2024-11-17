window.addEventListener("scroll",function(){
  let navbar=document.querySelector('header');
  if(this.window.scrollY>50){
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

let container = document.getElementById("container");
let signup = document.getElementById("signUp");
let signin = document.getElementById("signIn");

// Toggle panels
signup.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signin.addEventListener("click", function () {
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
passwordWarning.classList.add('confirm-password-warning'); // Add a class for specific styling
passwordWarning.style.color = 'red';
passwordWarning.style.fontSize = '0.9rem';
passwordWarning.textContent = 'Confirm password does not match the password!';
passwordWarning.style.display = 'none'; // Initially hidden
confirmPasswordInput.after(passwordWarning);


confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    passwordWarning.style.display = 'block'; // Show warning
  } else {
    passwordWarning.style.display = 'none'; // Hide warning
  }
});

// Handle form submission
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Final validation check
  if (!registerButton.disabled) {
    alert("Registration successful!"); // Optional success message
    location.reload(); // Reload the page after successful registration
  } else {
    alert("Please fill out all fields correctly."); // Optional error message
  }
});

  // Predefined user credentials
  let validCredentials = {
    email: "user@example.com",
    password: "password123"
  };

  // Get login form and inputs
  let loginForm = document.querySelector('.sign-in-container form');
  let emailInput = loginForm.querySelector('input[name="name"]');
  let loginPasswordInput = loginForm.querySelector('input[name="password"]');
  let loginButton = loginForm.querySelector('button[type="submit"]');

  // Warning messages
  let loginWarning = document.createElement('p');
  loginWarning.style.color = 'red';
  loginWarning.style.fontSize = '0.9rem';
  loginWarning.style.display = 'none'; // Initially hidden
  loginForm.appendChild(loginWarning);

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    let emailValue = emailInput.value.trim();
    let passwordValue = loginPasswordInput.value.trim();

    // Check if email or password is invalid
    if (emailValue !== validCredentials.email && passwordValue !== validCredentials.password) {
      loginWarning.textContent = 'Both email and password are incorrect!';
      loginWarning.style.display = 'block';
    } else if (emailValue !== validCredentials.email) {
      loginWarning.textContent = 'Email is incorrect!';
      loginWarning.style.display = 'block';
    } else if (passwordValue !== validCredentials.password) {
      loginWarning.textContent = 'Password is incorrect!';
      loginWarning.style.display = 'block';
    } else {
      loginWarning.style.display = 'none'; // Hide warnings
      alert('Login successful!'); // Simulate successful login
      // Add any redirect logic here if needed
    }
  });


