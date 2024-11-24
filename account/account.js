document.addEventListener("DOMContentLoaded", () => {
  const signUpButton = document.getElementById("sign-up-btn");
  const signInButton = document.getElementById("sign-in-btn");
  const container = document.querySelector(".container");
  signUpButton.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  signInButton.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let signUpForm = document.getElementById("sign-up-form");
  let createPasswordInput = document.getElementById("create-password");
  let confirmPasswordInput = document.getElementById("confirm-password");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = signUpForm.elements["U-Name"][0].value;
    let lastName = signUpForm.elements["U-Name"][1].value;
    let email = document.getElementById("email").value;
    let createPassword = createPasswordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    let alertMessage = document.createElement("div");
    alertMessage.style.color = "red";
    alertMessage.style.marginTop = "10px";

    // Check if passwords match
    if (createPassword !== confirmPassword) {
      alertMessage.innerText = "Passwords do not match!";
      if (!signUpForm.querySelector(".alert-message")) {
        signUpForm.appendChild(alertMessage);
        alertMessage.classList.add("alert-message");
      }
      return;
    }

    // Clear alert if passwords match
    let existingAlert = signUpForm.querySelector(".alert-message");
    if (existingAlert) {
      existingAlert.remove();
    }

    // Store account in localStorage
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let newAccount = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: createPassword,
    };

    // Check if the email is already registered
    let existingAccount = accounts.find((account) => account.email === email);
    if (existingAccount) {
      alertMessage.innerText = "This email is already registered.";
      if (!signUpForm.querySelector(".alert-message")) {
        signUpForm.appendChild(alertMessage);
        alertMessage.classList.add("alert-message");
      }
      return;
    }

    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Clear form and notify success
    signUpForm.reset();
    alert("Account created successfully!");
  });
});

// Sign up functionality
let signUpForm = document.getElementById('signup-form');
let loginForm = document.getElementById('login-form');

// Handling sign up
signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    if (email && password) {
        // Store the user credentials in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert("Account created successfully!");
        // Redirect to the home page
        window.location.href = "../home/home.html";
    } else {
        alert("Please fill out all fields.");
    }
});

// Handling login
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    let message = document.getElementById('login-message'); // Alert <p> for messages

    let storedEmail = localStorage.getItem('userEmail');
    let storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        // Redirect to the home page
        window.location.href = "../home/home.html";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password. Please try again.";
    }
});
