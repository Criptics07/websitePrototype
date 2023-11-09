// Add any JavaScript functionality here if needed.
// For example, handling form submissions or implementing animations.
// Add any JavaScript functionality here if needed.
// For example, handling form submissions or implementing animations.
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeButtons = document.querySelectorAll('.close');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
  signupModal.style.display = 'block';
});

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal || event.target === signupModal) {
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  }
});


const profileModal = document.getElementById('profileModal');
const closeProfile = document.getElementById('closeProfile');
const userNameSpan = document.getElementById('userName');
const userPhoneNumberSpan = document.getElementById('userPhoneNumber');
const userPointsSpan = document.getElementById('userPoints');

let currentUser = null;

function showProfileModal() {
  profileModal.style.display = 'block';
  userNameSpan.textContent = currentUser.phoneNumber; // For demonstration purposes, showing the phoneNumber as the username
  userPhoneNumberSpan.textContent = currentUser.phoneNumber;
  userPointsSpan.textContent = currentUser.points;
}

function login() {
  const phoneNumber = document.getElementById('phoneNumber').value;
  // Perform validation here (e.g., check if the phone number exists in the database)

  // For this example, we'll set a mock user with a phone number and points upon login
  currentUser = {
    phoneNumber: phoneNumber,
    points: 100 // Set the initial points to 100 for demonstration purposes
  };

  loginModal.style.display = 'none';
  showProfileModal();
}

function signup() {
  const phoneNumber = document.getElementById('phoneNumberSignup').value;
  // Perform validation here and add the new user to the database
  // For this example, we'll set a mock user with a phone number and points upon signup

  currentUser = {
    phoneNumber: phoneNumber,
    points: 100 // Set the initial points to 100 for demonstration purposes
  };

  signupModal.style.display = 'none';
  showProfileModal();
}

// ... (remaining code remains the same) ...

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});

document.getElementById('signupForm').addEventListener('submit', (event) => {
  event.preventDefault();
  signup();
});

// ... (remaining code remains the same) ...
// Add this JavaScript code to your existing script.js file or include it in a <script> tag at the end of your HTML file.
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menuButton');
  const menuSection = document.getElementById('menu');

  menuButton.addEventListener('click', function () {
    // Smoothly scroll to the menu section when the button is clicked
    menuSection.scrollIntoView({ behavior: 'smooth' });
  });
});


// Function to display user profile information
function showUserProfile() {
  if (currentUser) {
    document.getElementById('userName').textContent = currentUser.username;
    document.getElementById('userPoints').textContent = currentUser.points;

    // Example of displaying the last three orders (replace with your data)
    const lastThreeOrders = currentUser.orders.slice(-3); // Assuming currentUser has an 'orders' property
    const userOrdersList = document.getElementById('userOrders');
    
    // Clear any existing orders
    userOrdersList.innerHTML = '';

    // Display the last three orders
    lastThreeOrders.forEach(order => {
      const listItem = document.createElement('li');
      listItem.textContent = order;
      userOrdersList.appendChild(listItem);
    });

    // Show the profile modal
    document.getElementById('profileModal').style.display = 'block';
  }
}

// ... (your existing event listeners and functions) ...

// Event listener for a button that would trigger showing the user profile
document.getElementById('showUserProfileBtn').addEventListener('click', showUserProfile);

// ... (your existing JavaScript code) ...
