const slides = document.querySelectorAll(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const stop = document.querySelector("#stop");
var automatic = true;
const interval = 5000;
let slideInterval;

//
const slide1 = document.querySelector(".slide-1");
const slide8 = document.querySelector(".slide-8");
const last = document.querySelector(".last");

const prevSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active !== slide1) {
    active.previousElementSibling.classList.add("active");
  } else {
    slide8.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

const nextSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active.nextElementSibling !== last) {
    active.nextElementSibling.classList.add("active");
  } else {
    slide1.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

prev.addEventListener("click", e => {
  prevSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

next.addEventListener("click", e => {
  nextSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

if (automatic) {
  slideInterval = setInterval(nextSlide, interval);
}

stop.onclick = function() {
  if (automatic) {
    automatic = false;
    stop.innerHTML = "play";
    clearInterval(slideInterval);
  } else {
    automatic = true;
    stop.innerHTML = "stop";
    slideInterval = setInterval(nextSlide, interval);
  }
};
