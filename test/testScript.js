var today= new Date();
var bg = document.getElementById("dark-mode");
var words = document.getElementsByClassName("dark-mode-word");


// ---------------------------- Header -----------------------------------
function animateMenu(x) {
    x.classList.toggle("change");
  }
//-----------------------------Image gallery fn's ----------------------
var imagesContainer = document.querySelector('.scrollable-images');
var images = document.querySelectorAll('.scrollable-images img');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modalImage');
var captionText = document.getElementById('caption');

var scrollPosition = 0;
var imageIndex = 0; 
function openModal(src, alt) {
  modal.style.display = 'block';
  modalImg.src = src;
  captionText.innerHTML = alt;
}

function closeModal() {
  modal.style.display = 'none';
}

images.forEach(function (img, index) {
  img.onload = function () { 
    updateImagePositions(); 
  };

  img.onclick = function () {
    openModal(this.src, this.alt);
    imageIndex = index;
  };
});

imagesContainer.addEventListener('wheel', function (e) {
  scrollPosition += e.deltaY;
  scrollPosition = Math.min(imagesContainer.scrollWidth - imagesContainer.clientWidth, Math.max(0, scrollPosition));
  imagesContainer.scrollLeft = scrollPosition;
  imageIndex = Math.round(scrollPosition / images[0].offsetWidth);
  e.preventDefault();
});

imagesContainer.addEventListener('mousewheel', function (e) {
  scrollPosition += e.deltaY;
  scrollPosition = Math.min(imagesContainer.scrollWidth - imagesContainer.clientWidth, Math.max(0, scrollPosition));
  imagesContainer.scrollLeft = scrollPosition;
  imageIndex = Math.round(scrollPosition / images[0].offsetWidth);
  e.preventDefault();
});

window.addEventListener('resize', updateImagePositions);

function updateImagePositions() {
  const centerIndex = Math.floor(images.length / 2);
  scrollPosition = centerIndex * images[0].offsetWidth - imagesContainer.offsetWidth / 2;
  scrollPosition = Math.min(imagesContainer.scrollWidth - imagesContainer.clientWidth, Math.max(0, scrollPosition));
  imagesContainer.scrollLeft = scrollPosition;
  imageIndex = centerIndex;
}
updateImagePositions();

const dockContainer = document.querySelector('.scrollable-images');
const dockItems = document.querySelectorAll('.scrollable-images img');
const defaultItemScale = 1;
const hoverItemScale = 1.3; 
const defaultMargin = "5px";
const expandMargin = "10px";

const updateDockItems = (hoveredItemIndex) => {
  dockItems.forEach((item, index) => {
    let scale = defaultItemScale;
    let margin = defaultMargin;

    if (index === hoveredItemIndex) {
      scale = hoverItemScale;
      margin = expandMargin;
    } 

    item.style.transform = `scale(${scale})`;
    item.style.margin = `0 ${margin}`;
  });
};
dockItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    updateDockItems(index);
  });
});
dockContainer.addEventListener("mouseleave", () => {
  resetDockItems();
});
const resetDockItems = () => {
  dockItems.forEach((item) => {
    item.style.transform = "";
    item.style.margin = "";
  });
};
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    closeModal(); 
  }
});