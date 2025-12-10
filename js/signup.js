document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  clearErrors();

  // Get form values
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  let isValid = true;

  // Validate username
  if (username === '') {
    displayError('username', 'Username is required');
    isValid = false;
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    displayError('email', 'Please enter a valid email');
    isValid = false;
  }

  // Validate password
  if (password === '') {
    displayError('password', 'Password is required');
    isValid = false;
  }

  // Validate confirm password
  if (confirmPassword !== password) {
    displayError('confirm-password', 'Passwords do not match');
    isValid = false;
  }

  // If everything is valid, you can submit the form or send data to the server
  if (isValid) {
    alert('Form submitted successfully');
    // You can proceed with sending the form data to the server here.
  }
});

// Function to display error messages
function displayError(field, message) {
  const errorElement = document.getElementById(`${field}-error`);
  errorElement.textContent = message;
}

// Function to clear error messages
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(error => error.textContent = '');
}
