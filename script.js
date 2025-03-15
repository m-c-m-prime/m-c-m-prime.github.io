// Simple example: Highlight active navigation link
document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.href === window.location.href){
        link.style.color = '#fff';
        link.style.textDecoration = 'underline';
    }
});
