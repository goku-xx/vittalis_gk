// Existing JavaScript code
const hamburgerBtn = document.getElementsByClassName('hamburger');
const navLinks = document.querySelector('.nav-links');
const showClass = document.querySelector('.show');

// Function to toggle the display of the .show class
function toggleShowClass() {
  if (showClass.style.display === 'flex') {
    showClass.style.display = 'none';
  } else {
    showClass.style.display = 'flex';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.show');
  var body = document.body;



  // Function to toggle the display of the .show class
  function toggleShowClass() {
    navLinks.classList.toggle('mobile-show');
  }

  toggleShowClass();

  // Add event listener for hamburger button click
  hamburgerBtn.addEventListener('click', function() {
    toggleShowClass();
    
  });
});


// Add event listener for hamburger button click
// document.addEventListener('DOMContentLoaded', function() {
//   var hamburgerBtn = document.getElementsByClassName('hambuger');
//   var body = document.body;
//   console.log("classss",hamburgerBtn);

//   // Function to toggle blur class on body
  // function toggleBlur() {
  //   body.classList.toggle('blur');

  // }

//   // Toggle blur class on hamburger click
//   hamburgerBtn.addEventListener('click', function() {
//     toggleBlur();
//     hamburgerBtn.classList.toggle('mobile-show');
//   });
// });

// Add event listener for window resize
window.addEventListener('resize', function() {
  // Check if window width is greater than 768px
  if (window.innerWidth > 768) {
    // Hide the .show class
    showClass.style.display = 'none';
  }
});

// New JavaScript code for food menu functionality
function showFoodDetails(name, features, calories) {
  var foodDetails = document.getElementById('foodDetails');
  foodDetails.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Features:</strong> ${features}</p>
    <p><strong>Calories:</strong> ${calories}</p>
  `;
  foodDetails.classList.remove('hidden');
}

// document.getElementById('vegetarianBtn').addEventListener('click', function() {
//   document.getElementById('vegetarianMenu').classList.remove('hidden');
//   document.getElementById('nonVegetarianMenu').classList.add('hidden');
//   document.getElementById('foodDetails').classList.add('hidden');
// });

// document.getElementById('nonVegetarianBtn').addEventListener('click', function() {
//   document.getElementById('nonVegetarianMenu').classList.remove('hidden');
//   document.getElementById('vegetarianMenu').classList.add('hidden');
//   document.getElementById('foodDetails').classList.add('hidden');
// });
