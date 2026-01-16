async function loadAndDisplayMOTD() {
    try {
        const response = await fetch('motd.json');
        const motds = await response.json();
        const randomMOTD = motds[Math.floor(Math.random() * motds.length)];
        
        const motdElement = document.getElementById('motd');
        motdElement.textContent = randomMOTD;
    } catch (error) {
        console.error('Error loading MOTD:', error);
        document.getElementById('motd').textContent = '✧ welcome ✧';
    }
}

function animateFooterText() {
    const footerElement = document.getElementById('footerText');
    const text = footerElement.textContent;
    
    footerElement.textContent = '';
    const words = text.split(' ');
    
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word + ' ';
        span.style.animationDelay = (index * 0.1) + 's';
        footerElement.appendChild(span);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadAndDisplayMOTD();
    animateFooterText();
});
