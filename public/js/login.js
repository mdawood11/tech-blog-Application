// login
const loginForm = async function (event) {
  event.preventDefault();

  const username = document.getElementById("username-login").value.trim();
  const password = document.getElementById("login-pass").value.trim();

  if (username && password) {
    const loinResponse = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (loinResponse.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(loinResponse.statusText);
    }
  }
};

// Signup
const signupForm = async function (event) {
  event.preventDefault();

  const username = document.getElementById("user-signup").value.trim();
  const password = document.getElementById("pass-signup").value.trim();

  if (username && password) {
    const loinResponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (loinResponse.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(loinResponse.statusText);
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginForm);

document.querySelector(".signup-form").addEventListener("submit", signupForm);
