const mobileMenu = document.querySelector(".header-hamburguer");
const menuLinks = document.querySelector(".nav-links");
const slideshow = document.querySelector('.slide-wrap');

function mobileLinksToggle() {
  if (menuLinks.style.display === "flex") {
    mobileMenu.className = "header-hamburguer fa fa-bars fa-4x"
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "flex";
    menuLinks.className = "active";
    mobileMenu.className = "header-hamburguer fa fa-times fa-4x"
  }
}

if (slideshow != null) {

  let slides = document.querySelectorAll('.slide-entry'),
    slideCount = slides.length,
    currentSlide = 0,
    slideHeight = null,
    initialHeight = slides[0].clientHeight;


  slides[0].classList.add('active'); //on load, activate the 1st slide

  function moveToSlide(n) { // set up slide navigation functionality
    slides[currentSlide].className = 'slide-entry';
    currentSlide = (n + slideCount) % slideCount;
    slides[currentSlide].className = 'slide-entry active';
    slideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = slideHeight + 'px';
    window.addEventListener('resize', function () {
      resizedSlideHeight = slides[currentSlide].clientHeight;
      slideshow.style.height = resizedSlideHeight + 'px';
    });
  }

  function nextSlide(e) {
    moveToSlide(currentSlide + 1);
    let code = e.keyCode;
    if (code == 39) {
      moveToSlide(currentSlide + 1);
    }
  };
  function prevSlide(e) {
    moveToSlide(currentSlide + -1);
    let code = e.keyCode;
    if (code == 37) {
      moveToSlide(currentSlide + -1);
    }
  };

  const slideHandlers = {
    nextSlide: function (element) {
      document.querySelector(element).addEventListener('click', nextSlide);
      document.body.addEventListener('keydown', nextSlide, false);
    },
    prevSlide: function (element) {
      document.querySelector(element).addEventListener('click', prevSlide);
      document.body.addEventListener('keydown', prevSlide, false);
    }
  }

  slideHandlers.nextSlide('#next-slide');
  slideHandlers.prevSlide('#prev-slide');

  setInterval(function () { // Automatic slideshow
    nextSlide();
  }, 8000);

  // Dynamic slideshow height
  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

  window.addEventListener('resize', function () { // adjust the height of the slidehow as the browser is resized
    let resizedHeight = slides[0].clientHeight;
    slideshow.style.height = resizedHeight + 'px';
  });
}




