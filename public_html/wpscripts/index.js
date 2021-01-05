const mobileMenu = document.querySelector(".header-hamburguer");
const menuLinks = document.querySelector(".nav-links");

function mobileLinksToggle() {
  if (menuLinks.style.display === "flex") {
    mobileMenu.className = "header-hamburguer fa fa-bars fa-2x"
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "flex";
    menuLinks.className = "operative";
    mobileMenu.className = "header-hamburguer fa fa-times fa-2x"
  }
}

let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}

document.addEventListener("DOMContentLoaded", init(currentSlide))

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)
document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 7000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    init(i)
    currentSlide = i
  })
})






