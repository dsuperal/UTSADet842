document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('navbar-dropdown');

    // 1. Fetch the JSON file
    fetch('assets/js/navbar_items.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(navData => {
            // 2. The data is ready, now build the HTML
            let htmlContent = '';

            navData.forEach(item => {
                if (item.type === 'link') {
                    htmlContent += `
                        <li class="nav-item">
                            <a class="nav-link" href="${item.url}">${item.label}</a>
                        </li>`;
                        
                } else if (item.type === 'dropdown') {
                    htmlContent += `
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${item.label}</a>
                            <ul class="dropdown-menu dropdown-menu-lg-end">`;

                    item.items.forEach(subItem => {
                        if (subItem.type === 'link') {
                            htmlContent += `<li><a class="dropdown-item" href="${subItem.url}">${subItem.label}</a></li>`;
                        } else if (subItem.type === 'divider') {
                            htmlContent += `<li><hr class="dropdown-divider"></li>`;
                        }
                    });

                    htmlContent += `
                            </ul>
                        </li>`;
                }
            });

            // 3. Inject the generated HTML into the container
            if (navContainer) {
                navContainer.innerHTML = htmlContent;
            }
        })
        .catch(error => {
            console.error('Error loading the navbar data:', error);
        });
});