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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('h1, h2').forEach((heading) => {
        scrambleTextEffect(heading);
    });
});

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
