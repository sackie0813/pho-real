
/* Function to give hamburger functionality and animation */
function animateMenu(x) {
    x.classList.toggle("change");
  }

/* Function to display sidebar when clicked */
const navMenu = document.getElementById("overlay");
const navButton = document.getElementById("hamburger");
const barOne = document.getElementById("bar1");
const barTwo = document.getElementById("bar2");
const barThree = document.getElementById("bar3");
let overlayOpen = false;
navButton.addEventListener("click" , function() {
  overlayOpen = !overlayOpen;
  if (overlayOpen) {
    navMenu.style.width = "100%";
    barOne.style.backgroundColor = "white";
    barTwo.style.backgroundColor="white";
    barThree.style.backgroundColor="white";
  } else {
    navMenu.style.width = "0%";
    barOne.style.backgroundColor="#333";
    barTwo.style.backgroundColor="#333";
    barThree.style.backgroundColor="#333";
  }
});
