document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {
    window.electron.ipcRenderer.send('navigate-to-home'); // Notify main process to navigate to home page
  } else {
    alert('Invalid credentials');
  }
});