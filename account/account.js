function toggleMenu() {
  let menuIcon = document.querySelector('.menu-icon');
  let navLinks = document.querySelector('.nav-links');
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active'); 
}
document.addEventListener("DOMContentLoaded", () => {
  let signUpButton = document.getElementById("sign-up-btn");
  let signInButton = document.getElementById("sign-in-btn");
  let container = document.querySelector(".container");

  // Handle navigation based on the URL hash (e.g., #sign-up-form)
  if (window.location.hash === "#sign-up-form") {
    container.classList.add("sign-up-mode");
  } else if (window.location.hash === "#sign-in-form") {
    container.classList.remove("sign-up-mode");
  }

  // Event listeners for buttons
  signUpButton.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });
  signInButton.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const signInForm = document.getElementById("sign-in-form");
  const signUpForm = document.getElementById("sign-up-form");

  // Handle Sign In
  signInForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Check localStorage for existing accounts
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const userAccount = accounts.find(
      (account) => account.email === email && account.password === password
    );

    if (userAccount) {
      // Set login state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", userAccount.firstName);
      alert("Login successful!");
      window.location.href = "../index.html";
    } else {
      alert("Invalid email or password.");
    }
  });

  // Handle Sign Up
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = signUpForm.elements["U-Name"][0].value;
    const lastName = signUpForm.elements["U-Name"][1].value;
    const email = document.getElementById("email").value;
    const createPassword = document.getElementById("create-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (createPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    if (accounts.some((account) => account.email === email)) {
      alert("Email is already registered.");
      return;
    }

    const newAccount = {
      firstName,
      lastName,
      email,
      password: createPassword,
    };
    accounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    alert("Sign-up successful!");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", firstName);
    window.location.href = "../index.html";
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
    window.location.href = "../index.html";
  });

  // Sign up functionality
  // let signUpForm = document.getElementById('signup-form');
  let loginForm = document.getElementById("sign-in-form");

  // Handling login
  loginForm.addEventListener("submit", function (e) {
    console.log("here");
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let message = document.getElementById("login-message"); // Alert <p> for messages

    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    let curUser=accounts.find((user)=>user.email==email);


    if (curUser && password === curUser.password) {
      message.style.color = "green";
      message.textContent = "Login successful!";
      // Redirect to the home page
      window.location.href = "../index.html";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password. Please try again.";
    }
  });
});
