const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const width = carouselItems[0].getBoundingClientRect().width;
    carouselTrack.style.transform = `translateX(-${width * currentIndex}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Auto-slide every 5 seconds
setInterval(() => {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back to first slide
    }
    updateCarousel();
}, 4000);

