const slider = document.querySelector('.clients .slider');
let scrollAmount = 0;

function autoScroll() {
  scrollAmount += window.innerWidth; // scroll by screen width

  if (scrollAmount >= slider.scrollWidth) {
    scrollAmount = 0; // restart from beginning
  }

  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}


setInterval(autoScroll, 3000); // scroll every 3 seconds