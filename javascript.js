// Get the navbar element
const navbar = document.getElementById('navbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Define the scroll position where the background color changes
  const scrollThreshold = 200;

  // Check if the scroll position exceeds the threshold
  if (scrollPosition > scrollThreshold) {
    // Apply a new background color to the navbar
    navbar.style.backgroundColor = '#031b2d';
  } else {
    // Reset the background color of the navbar
    navbar.style.backgroundColor = 'transparent';
  }
});
