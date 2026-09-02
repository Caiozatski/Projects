const carousel = document.querySelector(".hero_backgrounds");
const slides = document.querySelectorAll(".hero_backgrounds > div");
const buttons = document.querySelectorAll(".labels label");

let currentSlide = 0;
let autoPlay;


function startAutoPlay() {
  autoPlay = setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    moveCarousel();
    updateButtons();
  }, 5000);
}

startAutoPlay();

function moveCarousel() {

  let position = -currentSlide * 20;
  carousel.style.transform = `translateX(${position}%)`
}

carousel.addEventListener("transitionend", () => {
  if (currentSlide === 4) {
    carousel.style.transition = "none";
    currentSlide = 0;
    carousel.style.transform = "translateX(0%)";
    updateButtons();

    setTimeout(() => {
      carousel.style.transition = "all .5s linear";
    }, 0);
  }
});

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    clearInterval(autoPlay);
    currentSlide = index;
    moveCarousel();
    updateButtons();
    startAutoPlay();
  })
})

function updateButtons() {
  buttons.forEach((button, index) => {
    button.classList.remove("active");
    if (index == currentSlide) {
      button.classList.add("active");
    }
  });
}