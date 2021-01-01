console.log(2 + 2)

const mobileMenu = document.querySelector(".header-hamburguer");
const menuLinks = document.querySelector(".header-links");

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


