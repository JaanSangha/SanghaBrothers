var imageAdded = false;

$(document).on('scroll', function () {
  handleScroll();
});

function handleScroll() {
  var navbar = document.getElementById("navbar");
  var shrinkImage = document.getElementById("shrinkImage");

  // Check if the user has scrolled down a certain amount
  if ($(document).scrollTop() > 20) {
    navbar.style.top = "0";

    // Add a class to trigger the shrink effect on the image
    shrinkImage.classList.add("shrink");

    // Add the image on scroll with delay
    addImageOnScrollWithDelay();
  } else {
    navbar.style.top = "-100px";

    // Remove the class to revert the shrink effect on the image
    shrinkImage.classList.remove("shrink");

    // Reset the flag when scrolling to the top
    imageAdded = false;

    // Remove the image if it exists
    var existingImage = document.getElementById("scrolledImage");
    if (existingImage) {
      existingImage.parentNode.removeChild(existingImage);
    }
  }
}

function addImageOnScrollWithDelay() {
  if (!imageAdded) {
    imageAdded = true;

    setTimeout(function () {
      var imageElement = document.createElement("img");
      imageElement.src = 'img/SB Main Logoedited.png';
      imageElement.id = 'scrolledImage';
      imageElement.style.width = '215px'; // Start with a larger size
      imageElement.style.position = 'fixed';
      imageElement.style.left = '50%';
      imageElement.style.transform = 'translateX(-50%) scale(1)'; // Start with full scale
      imageElement.style.transition = 'transform 0.5s ease-out';

      // Get the container-fluid element
      var containerFluid = document.querySelector(".container-fluid");

      // Insert the image as the first child inside container-fluid
      containerFluid.insertBefore(imageElement, containerFluid.firstChild);

      imageElement.offsetWidth;

      // Set final transform for the transition
      imageElement.style.transform = 'translateX(-50%) scale(0.9)'; // Scale down to 200px
    }, 180); // 180 milliseconds delay
  }
}
