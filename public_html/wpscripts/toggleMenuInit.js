const openCloseIcon = document.getElementById('icon');
const navLinks = document.querySelector(".nav-links");

function changeIcon() {
  navLinks.classList.toggle('on')
  navLinks.classList.contains('on') ?
    openCloseIcon.classList.replace('fa-bars', 'fa-times') :
    openCloseIcon.classList.replace('fa-times', 'fa-bars')
}

function toggleMenuInit() {
  openCloseIcon.addEventListener('click', changeIcon)
}

export default toggleMenuInit;