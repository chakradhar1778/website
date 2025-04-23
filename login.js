document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = e.target.querySelector('button[type="submit"]');
  const errorMsg = document.getElementById("errorMsg");
  submitBtn.disabled = true;
  errorMsg.textContent = "";

  try {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Submitting:", { username, password }); // Debug log

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log("Response:", data); // Debug log

    if (data.success) {
      localStorage.setItem("userId", data.userId);
      window.location.href = "page.html";
    } else {
      alert(data.error);
    }
  } catch (err) {
    errorMsg.textContent = err.message;
    console.error("Login error:", err);
  } finally {
    submitBtn.disabled = false;
  }
});
