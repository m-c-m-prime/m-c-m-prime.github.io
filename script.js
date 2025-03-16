document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        // ✅ FIX: Prevent menu from instantly closing on iOS
        hamburger.addEventListener("click", function (event) {
            event.stopPropagation();
            navLinks.classList.toggle("active");
        });

        // ✅ FIX: Only close menu if clicking outside, NOT on the menu itself
        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                navLinks.classList.remove("active");
            }
        });

        // ✅ Fix for iOS Safari Touch Events
        hamburger.addEventListener("touchstart", function (event) {
            event.stopPropagation();
            navLinks.classList.toggle("active");
        });
    }
});

    // ✅ Apply Typing Effect for Index Page
    const indexText = document.getElementById("typed-text");
    if (indexText) {
        typeText(indexText, 50);
    }

    // ✅ Apply Typing Effect for About Page
    if (window.location.pathname.includes("about.html")) {
        typeTextSequentially("#typed-paragraphs p", 15, 800);
    }

    // ✅ Initialize Matrix Effect
    initMatrixEffect();
});

// ✅ Typing Effect for Multiple Paragraphs (Sequential)
function typeTextSequentially(selector, speed, delay) {
    const paragraphs = document.querySelectorAll(selector);
    if (!paragraphs.length) return;

    let index = 0;

    function typeParagraph(paragraph, callback) {
        let text = paragraph.innerText;
        paragraph.innerHTML = "";
        let i = 0;

        function type() {
            if (i < text.length) {
                paragraph.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, delay);
            }
        }
        type();
    }

    function typeNextParagraph() {
        if (index < paragraphs.length) {
            typeParagraph(paragraphs[index], () => {
                index++;
                typeNextParagraph();
            });
        }
    }

    typeNextParagraph();
}

// ✅ Typing Effect for Single Element
function typeText(element, speed) {
    let text = element.innerText;
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function initMatrixEffect() {
    const canvas = document.getElementById("matrix");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12; // Subtle effect
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.07)"; // Softer transparency
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "rgba(41, 255, 121, 0.6)"; // Dimmer neon green
        ctx.font = `${fontSize}px VT323`;

        drops.forEach((y, i) => {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.98) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }

    setInterval(drawMatrix, 75);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ✅ Ensure Matrix runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    initMatrixEffect();
});

    setInterval(drawMatrix, 75);

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ✅ Secret Code Activation
let secretCode = "";
const triggerCode = "mcmprime";

document.addEventListener("keydown", function (e) {
    secretCode += e.key.toLowerCase();
    if (secretCode.includes(triggerCode)) {
        alert("Welcome to the hidden system.");
        secretCode = ""; // Reset
    }
});