const openCloseIcon = document.getElementById('icon');
const navLinks = document.querySelector(".nav-links");

function changeIcon() {
  navLinks.classList.contains('on') ?
    openCloseIcon.classList.replace('fa-bars', 'fa-times') :
    openCloseIcon.classList.replace('fa-times', 'fa-bars')
}

openCloseIcon.addEventListener('click', toggleMenuInit)

function toggleMenuInit() {
  navLinks.classList.toggle("on");
  changeIcon();
}

export default toggleMenuInit;