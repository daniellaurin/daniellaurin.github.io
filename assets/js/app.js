// Name effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function startGlitchEffect(event) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 50);
}

document.querySelector("h1").onmouseover = startGlitchEffect;
startGlitchEffect({ target: document.querySelector("h1") });

// Adding refresh functionality when clicking on the name
document.querySelector("h1").addEventListener("click", function (event) {
    // Optional: Stop glitch effect if it's still running when clicked
    clearInterval(interval);
    // Refresh the page
    location.reload();
});

// Nav hamburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

// Scroll to top functionality
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
