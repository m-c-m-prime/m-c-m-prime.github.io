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
