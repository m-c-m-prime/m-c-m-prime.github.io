document.addEventListener("DOMContentLoaded", function () {

    // ✅ Highlight Active Navigation Link
    document.querySelectorAll("nav ul li a").forEach((link) => {
        if (link.href === window.location.href) {
            link.style.color = "#fff";
            link.style.textDecoration = "underline";
        }
    });

    // ✅ Fix Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                navLinks.classList.remove("active");
            }
        });
    }

    // ✅ Apply Typing Effect for the Index Page
    if (document.getElementById("typed-text")) {
        typeText(document.getElementById("typed-text"), 50);
    }

    // ✅ Apply Typing Effect for the About Page (PARAGRAPHS NOW WORK)
    if (window.location.pathname.includes("about.html")) {
        typeTextSequentially("#typed-paragraphs p", 15, 1000);
    }

    // ✅ Initialize Matrix Effect
    initMatrixEffect();
});

// ✅ Typing Effect for **Multiple Paragraphs**
function typeTextSequentially(selector, speed, delay) {
    const paragraphs = document.querySelectorAll(selector);
    if (!paragraphs.length) return;

    let index = 0; // Start at first paragraph

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

// ✅ Matrix Code Rain Effect (Subtle)
function initMatrixEffect() {
    const canvas = document.getElementById("matrix");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "rgba(41, 255, 121, 0.7)";
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

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

let secretCode = "";
const triggerCode = "mcmprime";

document.addEventListener("keydown", function (e) {
    secretCode += e.key.toLowerCase();
    if (secretCode.includes(triggerCode)) {
        alert("Welcome to the hidden system.");
        secretCode = ""; // Reset
    }
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
    }, 2000); // Delay of 2 seconds
});