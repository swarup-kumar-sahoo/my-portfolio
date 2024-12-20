// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle menu when hamburger icon is clicked
hamburger.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('open');
});

// Search Functionality
function searchProjects() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {
        const title = card.getAttribute("data-title").toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Filter Functionality
function filterProjects(category) {
    const cards = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".filter-btn");

    // Update active button
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    // Filter projects
    cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

