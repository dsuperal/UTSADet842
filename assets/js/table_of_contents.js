document.addEventListener("DOMContentLoaded", function () {

    const tocToggle = document.getElementById("tocToggle");
    const tocSidebar = document.getElementById("tocSidebar");
    const tocClose = document.getElementById("tocClose");

    const tocLinks = document.querySelectorAll(".toc-sidebar a");


    // Open sidebar
    tocToggle.addEventListener("click", function () {

        tocSidebar.classList.add("open");

        // Hide button
        tocToggle.style.display = "none";

    });


    // Close sidebar with X button
    tocClose.addEventListener("click", function () {

        tocSidebar.classList.remove("open");

        // Show button again
        tocToggle.style.display = "flex";

    });


    // Close after selecting a section
    tocLinks.forEach(link => {

        link.addEventListener("click", function () {

            tocSidebar.classList.remove("open");

            tocToggle.style.display = "flex";

        });

    });


    // Close when clicking outside
    document.addEventListener("click", function (event) {

        if (
            tocSidebar.classList.contains("open") &&
            !tocSidebar.contains(event.target) &&
            !tocToggle.contains(event.target)
        ) {

            tocSidebar.classList.remove("open");

            tocToggle.style.display = "flex";

        }

    });

});