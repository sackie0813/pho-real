function animateMenu(x) {
    x.classList.toggle("change");
  }

let navMenu = document.getElementById("nav-menu");
let navButton = document.getElementById("sidebar");
let navOpen = false;
navButton.addEventListener("click" , function() {
  if (navOpen == false) {
    navMenu.classList.add("open");
    navOpen = true;
  } else if (navOpen == true) {
    navMenu.classList.remove("open");
    navOpen = false;
  }
});
