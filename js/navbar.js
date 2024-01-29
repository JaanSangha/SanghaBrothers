$(document).on('scroll', function () {
  handleScroll();
});

function handleScroll() {
  var navbar = document.getElementById("navbar");
  var isNavbarExpanded = $(".navbar-collapse").hasClass("show");

  // Check if the user has scrolled down a certain amount
  if ($(document).scrollTop() > 20) {
    navbar.style.top = "0";

   

  } else {
    navbar.style.top = "-100px";
     // If the navbar is expanded, collapse it
     if (isNavbarExpanded) {
      $(".navbar-toggler").click();
    }
  }
}