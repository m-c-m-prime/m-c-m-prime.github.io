// ✅ Highlight active navigation link
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("nav ul li a").forEach((link) => {
        if (link.href === window.location.href) {
            link.style.color = "#fff";
            link.style.textDecoration = "underline";
        }
    });

    // ✅ Apply scramble effect to all H1 and H2 elements
    document.querySelectorAll("h1, h2").forEach((heading) => {
        scrambleTextEffect(heading);
    });

    // ✅ Fix Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        // ✅ Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                navLinks.classList.remove("active");
            }
        });
    }
});

// ✅ Scramble Text Effect Function (Now fixed)
function scrambleTextEffect(element) {
    const originalText = element.textContent;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

    element.addEventListener("mouseover", function () {
        let iterations = 0;

        const interval = setInterval(() => {
            element.textContent = originalText
                .split("")
                .map((char, index) =>
                    index < iterations ? originalText[index] : letters[Math.floor(Math.random() * letters.length)]
                )
                .join("");

            if (iterations >= originalText.length) clearInterval(interval);
            iterations++;
        }, 50);
    });
}

function playBandcamp() {
    window.open("https://m-c-mprime.bandcamp.com/album/origins", "_blank");
}

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#29ff79"; // Neon green
    ctx.font = `${fontSize}px VT323`;

    drops.forEach((y, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    });
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function typeText(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    element.innerHTML = ""; // Clear text before typing starts
    type();
}

document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("typed-text");
    const paragraph = document.getElementById("typed-paragraph");

    typeText(title, "M–C–M'", 100);
    setTimeout(() => {
        typeText(paragraph, "A visual, sonic, and literary exploration of technocapital, swarm theory, and hyperstition.", 50);
    }, 1200);
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent instant navigation
        const url = this.href;

        this.classList.add("glitch-click");
        setTimeout(() => {
            window.location.href = url; // Navigate after effect
        }, 500); // Delay navigation
    });
});