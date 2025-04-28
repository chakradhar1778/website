const getUser = async () => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No user ID found");
      return;
    }

    const response = await fetch(
      `http://localhost:3001/api/account?userId=${userId}`
    );

    const data = await response.json();

    if (data.success) {
      renderUserProfile(data.user);
    }
  } catch (error) {
    console.error(error);
  }
};

const renderUserProfile = (user) => {
  // Create avatar with random background color
  const avatar = document.getElementById("userAvatar");
  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#D4A5A5",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  avatar.style.backgroundColor = randomColor;
  avatar.textContent = user.name.charAt(0);

  // Set user info
  document.getElementById("userName").textContent = user.name;
  document.getElementById("userEmail").textContent = user.email;
  document.getElementById("userPhone").textContent = formatPhoneNumber(
    user.phone
  );
};

const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};

// Initialize the page
getUser();

const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", () => {
  localStorage.removeItem("userId");
  localStorage.setItem("cart", JSON.stringify({})); // Clear cart
  window.location.href = "home.html"; // Redirect to login page
});
