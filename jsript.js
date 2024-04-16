document.addEventListener('DOMContentLoaded', function() {
  // Food menu functionality
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

  // Function to open modal and show enlarged image on mobile
  menuImage.addEventListener('click', function() {
      if (window.innerWidth <= 767) { // Check for mobile view
          // Show enlarged image
          const modal = document.createElement('div');
          modal.classList.add('modal');
          modal.innerHTML = `
              <div class="modal-content">
                  <span class="close">&times;</span>
                  <img src="${images[currentImageIndex]}" class="enlarged-image">
              </div>
          `;
          document.body.appendChild(modal);

          // Close modal when clicking on close button
          const closeButton = modal.querySelector('.close');
          closeButton.addEventListener('click', function() {
              document.body.removeChild(modal);
          });
      }
  });
});

// JavaScript function to open default email client
function openEmailClient() {
  window.location.href = "mailto:vitalis@gmail.com"; // Replace with your email address
}
