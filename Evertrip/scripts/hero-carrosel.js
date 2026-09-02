let currentSlide = 1;

setInterval (() =>{
  currentSlide++;

  if (currentSlide > 4) {
    currentSlide = 1;
  }

  document.querySelector(`#slider${currentSlide}`).checked = true;

}, 5000)