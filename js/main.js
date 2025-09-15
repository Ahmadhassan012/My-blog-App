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

// Parallax effect for hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-section').forEach(section => {
  scrollObserver.observe(section);
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterInput = newsletterForm.querySelector('input[type="email"]');
const newsletterButton = newsletterForm.querySelector('button');

newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = newsletterInput.value;
  if (validateEmail(email)) {
    newsletterInput.style.display = 'none';
    newsletterButton.style.display = 'none';

    const confirmationMessage = document.createElement('p');
    confirmationMessage.textContent = 'Thank you for subscribing!';
    newsletterForm.appendChild(confirmationMessage);
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
