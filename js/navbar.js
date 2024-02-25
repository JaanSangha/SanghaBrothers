window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var navImg = document.getElementById('nav-img');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollTop > 0) {
      navbar.classList.add('nav-scrolled');
      navImg.classList.add('nav-img-scrolled');
  } else {
      navbar.classList.remove('nav-scrolled');
      navImg.classList.remove('nav-img-scrolled');
  }
});
