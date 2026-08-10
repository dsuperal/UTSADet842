/* =========================================================
   ODT OPPORTUNITIES PAGE
   UTSA DETACHMENT 842
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ELEMENTS
     ========================================================= */

  const opportunityCards = document.querySelectorAll(".odt-card");
  const filterButtons = document.querySelectorAll(".odt-filter-btn");
  const searchInput = document.querySelector("#odt-search");
  const noResults = document.querySelector(".no-results");

  /* =========================================================
     OPPORTUNITY CARD DROPDOWNS
     ========================================================= */

  opportunityCards.forEach(card => {

    const header = card.querySelector(".odt-card-header");
    const content = card.querySelector(".odt-card-content");
    const toggle = card.querySelector(".odt-toggle");

    if (!header || !content) return;

    header.addEventListener("click", () => {

      const isOpen = card.classList.contains("open");

      /* Close all other cards */
      opportunityCards.forEach(otherCard => {

        if (otherCard !== card) {

          otherCard.classList.remove("open");

          const otherContent =
            otherCard.querySelector(".odt-card-content");

          const otherToggle =
            otherCard.querySelector(".odt-toggle");

          if (otherContent) {
            otherContent.style.maxHeight = "0px";
          }

          if (otherToggle) {
            otherToggle.textContent = "+";
          }
        }

      });

      /* Open selected card */
      if (!isOpen) {

        card.classList.add("open");

        content.style.maxHeight =
          content.scrollHeight + "px";

        if (toggle) {
          toggle.textContent = "−";
        }

      } else {

        card.classList.remove("open");

        content.style.maxHeight = "0px";

        if (toggle) {
          toggle.textContent = "+";
        }

      }

    });

  });


  /* =========================================================
     FILTER BUTTONS
     ========================================================= */

  let currentFilter = "all";

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      /* Remove active state */
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      /* Add active state */
      button.classList.add("active");

      /* Get filter */
      currentFilter =
        button.dataset.filter || "all";

      applyFilters();

    });

  });


  /* =========================================================
     SEARCH
     ========================================================= */

  if (searchInput) {

    searchInput.addEventListener("input", () => {

      applyFilters();

    });

  }


  /* =========================================================
     FILTER FUNCTION
     ========================================================= */

  function applyFilters() {

    const searchTerm =
      searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    let visibleCards = 0;

    opportunityCards.forEach(card => {

      const category =
        card.dataset.category
          ? card.dataset.category.toLowerCase()
          : "";

      const title =
        card.querySelector(".odt-title")
          ? card.querySelector(".odt-title")
              .textContent
              .toLowerCase()
          : "";

      const description =
        card.querySelector(".odt-description")
          ? card.querySelector(".odt-description")
              .textContent
              .toLowerCase()
          : "";

      const cadets =
        card.querySelector(".cadet-names")
          ? card.querySelector(".cadet-names")
              .textContent
              .toLowerCase()
          : "";

      /* Check category */
      const matchesCategory =
        currentFilter === "all" ||
        category.includes(currentFilter);

      /* Check search */
      const searchableText =
        `${title} ${description} ${cadets}`;

      const matchesSearch =
        searchTerm === "" ||
        searchableText.includes(searchTerm);

      /* Show / hide */
      if (matchesCategory && matchesSearch) {

        card.style.display = "";

        /* Small animation */
        requestAnimationFrame(() => {
          card.classList.add("visible");
        });

        visibleCards++;

      } else {

        card.classList.remove("visible");

        card.style.display = "none";

      }

    });

    /* No results message */
    if (noResults) {

      if (visibleCards === 0) {
        noResults.style.display = "block";
      } else {
        noResults.style.display = "none";
      }

    }

  }


  /* =========================================================
     RESET SEARCH WHEN FILTER CHANGES
     ========================================================= */

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      if (searchInput) {
        searchInput.value = "";
      }

    });

  });


  /* =========================================================
     VIEW OPPORTUNITY BUTTONS
     ========================================================= */

  const opportunityLinks =
    document.querySelectorAll(".view-opportunity");

  opportunityLinks.forEach(link => {

    link.addEventListener("click", event => {

      const targetID =
        link.getAttribute("href");

      if (!targetID || !targetID.startsWith("#")) {
        return;
      }

      const target =
        document.querySelector(targetID);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      /* Highlight card */
      target.classList.add("highlight");

      setTimeout(() => {
        target.classList.remove("highlight");
      }, 1800);

    });

  });


  /* =========================================================
     BACK TO TOP BUTTON
     ========================================================= */

  const backToTop =
    document.querySelector("#back-to-top");

  if (backToTop) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }

    });

    backToTop.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* =========================================================
     INTERSECTION OBSERVER
     Creates subtle entrance animation
     ========================================================= */

  const observerOptions = {
    threshold: 0.12
  };

  const cardObserver =
    new IntersectionObserver((entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    }, observerOptions);


  opportunityCards.forEach(card => {

    card.classList.add("animate");

    cardObserver.observe(card);

  });


  /* =========================================================
     UPDATE OPEN CARD HEIGHT ON WINDOW RESIZE
     ========================================================= */

  window.addEventListener("resize", () => {

    const openCard =
      document.querySelector(".odt-card.open");

    if (!openCard) return;

    const content =
      openCard.querySelector(".odt-card-content");

    if (!content) return;

    content.style.maxHeight =
      content.scrollHeight + "px";

  });


  /* =========================================================
     KEYBOARD ACCESSIBILITY
     ========================================================= */

  opportunityCards.forEach(card => {

    const header =
      card.querySelector(".odt-card-header");

    if (!header) return;

    header.setAttribute("tabindex", "0");

    header.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        header.click();

      }

    });

  });


  /* =========================================================
     INITIALIZE
     ========================================================= */

  applyFilters();

});