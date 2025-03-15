// Simple example: Highlight active navigation link
document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.href === window.location.href){
        link.style.color = '#fff';
        link.style.textDecoration = 'underline';
    }
});

// Dynamic text scrambling effect
function scrambleText(element, speed = 50) {
    const originalText = element.textContent;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = originalText
            .split('')
            .map((char, idx) => {
                if (iterations > idx) {
                    return originalText[idx];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('');

        iterations += 1;
        if (iterations > originalText.length) clearInterval(interval);
    }, speed);
}

document.addEventListener("DOMContentLoaded", function () {
    // ✅ Scramble Effect for H1 and H2
    document.querySelectorAll("h1, h2").forEach((heading) => {
        scrambleTextEffect(heading);
    });

    // ✅ Hamburger Menu Functionality
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

// ✅ Scramble Text Effect Function (Keep this working)
function scrambleTextEffect(element) {
    const originalText = element.textContent;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    
    element.addEventListener("mouseover", () => {
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

// ✅ Scramble Text Effect Function (Ensure it stays intact)
function scrambleTextEffect(element) {
    const originalText = element.textContent;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    
    element.addEventListener("mouseover", () => {
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
}s

function scrambleTextEffect(element) {
    element.addEventListener('mouseover', () => scramble(element));
}

function scramble(element) {
    const text = element.textContent;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
    let iterations = 0;

    const interval = setInterval(() => {
        element.textContent = element.textContent
            .split('')
            .map((_, index) => {
                if (index < iterations) {
                    return original[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join('');

        if (iterations >= original.length) clearInterval(interval);
        iterations += 1;
    }, 50);
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
