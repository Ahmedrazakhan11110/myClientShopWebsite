// Simulate page loading with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  // Set a delay for the loading effect
  setTimeout(function () {

      document.body.style.transition = "opacity 1s ease-out";
      document.body.style.opacity = "1";
  }, 500); 

  document.body.style.opacity = "0";
});

// Slider functionality
window.addEventListener("load", function () {

  let slideIndex = 0;
  let slides = document.querySelectorAll(".slider img");  
  let totalSlides = slides.length;

  function showSlides() {

      for (let i = 0; i < totalSlides; i++) {
          slides[i].style.display = "none";  
      }

      slideIndex++;
      if (slideIndex > totalSlides) {
          slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";  
  }

  setInterval(showSlides, 3000);
});
