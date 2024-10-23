// Slideshow functionality for portfolio
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("project-box");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all projects
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;  // Reset to first slide after the last one
    }
    slides[slideIndex - 1].style.display = "block";  // Display the next slide
    setTimeout(showSlides, 3000);  // Change slide every 3 seconds
}


