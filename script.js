console.log("Hello world");

const mainImage = document.getElementById("main-image");

const images = ["roadpic.jpg", "citypic.jpg", "forestpic.jpg"];
let currentIndex = 0;

function nextImage() {
  currentIndex++;
  mainImage.src = images[currentIndex];
}

function prevImage() {
  currentIndex--;
  mainImage.src = images[currentIndex];
}

const gallery = document.getElementById("gallery");

gallery.addEventListener("mouseover", function () {
  gallery.style.opacity = 0.6;
});

gallery.addEventListener("mouseout", function () {
  gallery.style.opacity = 0.1;
});

const previous = document.getElementById("nav1");

previous.addEventListener("mouseover", function () {
  previous.style.opacity = 0.6;
});

previous.addEventListener("mouseout", function () {
  previous.style.opacity = 0.3;
});

previous.addEventListener("click", prevImage);

const next = document.getElementById("nav2");

next.addEventListener("mouseover", function () {
  next.style.opacity = 0.6;
});

next.addEventListener("mouseout", function () {
  next.style.opacity = 0.3;
});

next.addEventListener("click", nextImage);

function setforest() {
  mainImage.src = images[2];
}

function setroad() {
  mainImage.src = images[0];
}

function setcity() {
  mainImage.src = images[1];
}
// also need to implement the device screen size stuff
