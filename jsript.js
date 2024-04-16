// Existing JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.show');
  var body = document.body;
  
  // Function to toggle the display of the .show class
  function toggleShowClass() {
    navLinks.classList.toggle('mobile-show');
  }

  // Add event listener for hamburger button click
  hamburgerBtn.addEventListener('click', function() {
    toggleShowClass();
  });

  // Add event listener for window resize
  window.addEventListener('resize', function() {
    // Check if window width is greater than 768px
    if (window.innerWidth > 768) {
      // Hide the .show class
      showClass.style.display = 'none';
    }
  });

  // New JavaScript code for food menu functionality
  const menuImage = document.getElementById('menuImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const images = ["food_one.png", "food_two.png", "food_three.png"]; // Add image URLs here
  let currentImageIndex = 0;

  // Function to show the current image
  function showCurrentImage() {
    menuImage.src = images[currentImageIndex];
  }

  // Function to show the next image
  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showCurrentImage();
  }

  // Function to show the previous image
  function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showCurrentImage();
  }

  // Event listener for next button click
  nextBtn.addEventListener('click', showNextImage);

  // Event listener for previous button click
  prevBtn.addEventListener('click', showPrevImage);

  // Show the initial image
  showCurrentImage();
});
