document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".slide");

    const next = document.querySelector(".next");

    const prev = document.querySelector(".prev");

    let current = 0;

    function showSlide(index){

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        slides[index].classList.add("active");

    }

    next.addEventListener("click", function(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    });

    prev.addEventListener("click", function(){

        current--;

        if(current < 0){

            current = slides.length - 1;

        }

        showSlide(current);

    });

    setInterval(function(){

        current++;

        if(current >= slides.length){

            current = 0;

        }

        showSlide(current);

    },5000);

});