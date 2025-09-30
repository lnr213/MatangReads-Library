document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent page reload

  let user = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let error = document.getElementById("errorMsg");

  // check if empty
  if (user === "" || pass === "") {
    error.textContent = "Please fill in both fields.";
    error.style.color = "red";
    return;
  }

  // contoh login betul (username: admin, password: 1234)
  if (user === "admin" && pass === "1234") {
    error.style.color = "green";
    error.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "homepage.html";
    }, 1500);
  } else {
    error.style.color = "red";
    error.textContent = "Invalid username or password.";
  }
})

