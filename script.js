console.log("Hello world");

let currentIndex = 0;
const images = [
  { src: "forestpic.jpg", alt: "A view of a forest from on high" },
  { src: "citypic.jpg", alt: "A stunning view of a city" },
];

//function changeBG() {}

var gallery = document.getElementById("gallery");

gallery.addEventListener("mouseover", function () {
  gallery.style.opacity = 0.6;
});

gallery.addEventListener("mouseout", function () {
  gallery.style.opacity = 0.1;
});

var previous = document.getElementById("nav1");

previous.addEventListener("mouseover", function () {
  previous.style.opacity = 0.6;
});

previous.addEventListener("mouseout", function () {
  previous.style.opacity = 0.3;
});

var next = document.getElementById("nav2");

next.addEventListener("mouseover", function () {
  next.style.opacity = 0.6;
});

next.addEventListener("mouseout", function () {
  next.style.opacity = 0.3;
});

// Need to implement currentindex and currentindex ++ and -- so buttons change the pictures
// also need to implement the device screen size stuff
