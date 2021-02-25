function sliderInit() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll('.dot')
  const next = document.querySelector(".next")
  const prev = document.querySelector(".prev")

  if (slides.length > 0 && dots.length > 0) {
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

    const nextSlide = () => {
      currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
      init(currentSlide)
    }

    const prevSlide = () => {
      currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
      init(currentSlide)
    }

    init(currentSlide)

    if (next && prev) {
      next.addEventListener('click', nextSlide)
      prev.addEventListener('click', prevSlide)

    }

    setInterval(() => {
      nextSlide()
    }, 7000);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        init(i)
        currentSlide = i
      })
    })
  }
}

export default sliderInit;






