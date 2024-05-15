const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (usernameInput.value === '' || passwordInput.value === '') {
    errorMessage.textContent = 'Please enter both username and password.';
    return;
  }
  alert('Login successful!');
  window.location.href = 'home.html';
});