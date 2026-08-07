const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Move to current slide
function updateCarousel() {
    const width = carouselItems[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${width * currentIndex}px)`;
}

// Next button
nextButton.addEventListener('click', () => {
    currentIndex++;

    // Loop back to first slide
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }

    updateCarousel();
});

// Previous button
prevButton.addEventListener('click', () => {
    currentIndex--;

    // Loop to last slide
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }

    updateCarousel();
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex++;

    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }

    updateCarousel();
}, 5000);

// Keep carousel aligned if window is resized
window.addEventListener('resize', updateCarousel);