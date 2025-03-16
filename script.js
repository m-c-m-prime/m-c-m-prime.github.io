// ✅ Run script after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    
    // ✅ Highlight Active Navigation Link
    document.querySelectorAll("nav ul li a").forEach((link) => {
        if (link.href === window.location.href) {
            link.style.color = "#fff";
            link.style.textDecoration = "underline";
        }
    });

    // ✅ Apply Scramble Effect to all H1 and H2 elements
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

    // ✅ Apply Typing Effect for the Index Page
    if (document.getElementById("typed-text")) {
        typeText("typed-text", 50);
    }

    // ✅ Apply Sequential Typing Effect for the About Page
    if (window.location.pathname.includes("about.html")) {
        typeTextSequentially(".about-content", 30);
    }

    // ✅ Initialize Matrix Effect
    initMatrixEffect();
});

// ✅ Scramble Text Effect (on Hover)
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

// ✅ Sequential Typing Effect for Multiple Paragraphs (Fixed)
function typeTextSequentially(containerSelector, speed) {
    const container = document.querySelector(containerSelector);
    if (!container) return; // Ensure container exists

    const paragraphs = container.querySelectorAll("p");
    let index = 0;

    function typeParagraph(paragraph, callback) {
        let text = paragraph.innerText;
        paragraph.innerHTML = ""; // Clear before typing
        let i = 0;

        function type() {
            if (i < text.length) {
                paragraph.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                setTimeout(callback, 600); // Delay before next paragraph
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

    typeNextParagraph(); // Start typing first paragraph
}

// ✅ Single Element Typing Effect
function typeText(elementId, speed) {
    const element = document.getElementById(elementId);
    if (!element) return; // Ensure element exists

    let text = element.innerText;
    element.innerHTML = ""; // Clear before typing
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

// ✅ Matrix Code Rain Effect (Subtle Version)
function initMatrixEffect() {
    const canvas = document.getElementById("matrix");
    if (!canvas) return; // Ensure canvas exists before running

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 12; // ✅ Smaller font size for subtle effect
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function drawMatrix() {
        // ✅ More transparency to soften effect
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "rgba(41, 255, 121, 0.7)"; // ✅ Dimmer neon green
        ctx.font = `${fontSize}px VT323`;

        drops.forEach((y, i) => {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.98) { // ✅ Less frequent character resets
                drops[i] = 0;
            }
            drops[i]++;
        });
    }

    setInterval(drawMatrix, 75); // ✅ Slower update rate for a calmer effect

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ✅ Glitch Click Effect for Links
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

// ✅ Bandcamp Play Button (for future custom integrations)
function playBandcamp() {
    window.open("https://m-c-mprime.bandcamp.com/album/origins", "_blank");
}