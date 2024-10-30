document.addEventListener('DOMContentLoaded', () => {
    const lantern = document.querySelector('.lantern');
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#ff9a00', '#ff6b6b', '#feca57', '#ff9ff3', '#54a0ff'];
    let colorIndex = 0;

    function changeLanternColor() {
        if (lantern && lantern.querySelector('.body')) {
            colorIndex = (colorIndex + 1) % colors.length;
            lantern.querySelector('.body').style.background = `radial-gradient(circle at center, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
        }
    }

    // Change lantern color every 2 seconds
    setInterval(changeLanternColor, 2000);

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    function startFireworks() {
        setInterval(createFirework, 300);
    }

    startFireworks();
});