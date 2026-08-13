document.addEventListener('DOMContentLoaded', () => {

    const navContainer = document.getElementById('navbar-dropdown');

    fetch('assets/js/navbar_items.json')
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();

        })

        .then(navData => {

            let htmlContent = '';

            navData.forEach(item => {

                if (item.type === 'link') {

                    htmlContent += `
                        <li class="nav-item">
                            <a class="nav-link" href="${item.url}">
                                ${item.label}
                            </a>
                        </li>
                    `;

                }

                else if (item.type === 'dropdown') {

                    htmlContent += `
                        <li class="nav-item dropdown">

                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">

                                ${item.label}

                            </a>

                            <ul class="dropdown-menu dropdown-menu-lg-end">
                    `;

                    item.items.forEach(subItem => {

                        if (subItem.type === 'link') {

                            htmlContent += `
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="${subItem.url}">
                                        ${subItem.label}
                                    </a>
                                </li>
                            `;

                        }

                        else if (subItem.type === 'divider') {

                            htmlContent += `
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                            `;

                        }

                    });

                    htmlContent += `
                            </ul>

                        </li>
                    `;
                }

            });


            if (navContainer) {

                navContainer.innerHTML = htmlContent;

                // Initialize Bootstrap dropdowns
                const dropdowns =
                    navContainer.querySelectorAll(
                        '[data-bs-toggle="dropdown"]'
                    );

                dropdowns.forEach(dropdown => {
                    new bootstrap.Dropdown(dropdown);
                });

            }

        })

        .catch(error => {

            console.error(
                'Error loading the navbar data:',
                error
            );

        });

});