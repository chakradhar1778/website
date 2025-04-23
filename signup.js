document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  
  try {
    const response = await fetch('http://localhost:3001/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value
      })
    });

    const data = await response.json();
    
    if (data.success) {
      window.location.href = data.redirect; // Will always redirect to login.html
    } else {
      throw new Error(data.error || 'Signup failed');
    }
  } catch (err) {
    document.getElementById('error-message').textContent = err.message;
  } finally {
    submitBtn.disabled = false;
  }
});