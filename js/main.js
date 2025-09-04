const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to set the theme
const setTheme = (theme) => {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️'; // Sun icon for light mode
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
};

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
  let currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
});
