/* =========================================================
   DETACHMENT 842 HOMEPAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

<<<<<<< Updated upstream
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

=======
    /* =====================================================
       CAROUSEL
    ===================================================== */

    const carouselElement =
        document.querySelector("#detCarousel");

    if (carouselElement) {

        const carousel =
            bootstrap.Carousel.getOrCreateInstance(
                carouselElement,
                {
                    interval: 5000,
                    ride: "carousel",
                    pause: false,
                    wrap: true,
                    touch: true
                }
            );

        /*
         * Keep the carousel moving automatically even
         * after the user manually clicks next/previous.
         */

        carouselElement.addEventListener(
            "slid.bs.carousel",
            () => {

                carousel._config.interval = 5000;

            }
        );

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".det-navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {

                navbar.classList.add("navbar-scrolled");

            } else {

                navbar.classList.remove("navbar-scrolled");

            }

        });

    }


    /* =====================================================
       CLOSE MOBILE NAV AFTER CLICK
    ===================================================== */

    const navLinks =
        document.querySelectorAll(
            ".det-navbar .nav-link:not(.dropdown-toggle)"
        );

    const navbarCollapse =
        document.querySelector("#mainNavbar");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                bootstrap.Collapse
                    .getOrCreateInstance(navbarCollapse)
                    .hide();

            }

        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElements =
        document.querySelectorAll(".current-year");

    yearElements.forEach(element => {

        element.textContent =
            new Date().getFullYear();

    });

});
>>>>>>> Stashed changes
