// Get the button element
const aboutBtn = document.querySelector('button:first-of-type');

// Get the target section element
const aboutSection = document.querySelector('.about-us');

// Add click event listener to the button element
aboutBtn.addEventListener('click', () => {
  // Scroll smoothly to the target section
  aboutSection.scrollIntoView({behavior: 'smooth'});
});
