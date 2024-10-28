
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
    navMenu.style.overflowX="hidden";
    document.body.style.overflow = "hidden";
    barOne.style.backgroundColor = "white";
    barTwo.style.backgroundColor="white";
    barThree.style.backgroundColor="white";
  } else {
    navMenu.style.width = "0%";
    navMenu.style.overflowX="";
    barOne.style.backgroundColor="#333";
    barTwo.style.backgroundColor="#333";
    barThree.style.backgroundColor="#333";
  }
});


/* Function to increment and change slides in clickable slide window*/
let slideIndex = 1;
showSlides(slideIndex);

/* Function to increase incrememnt slide #*/
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Checks current slide */
function currentSlide(n) {
    showSlides(slideIndex = n);
}


/* Function to show current slide, & caption, & demo image*/
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}