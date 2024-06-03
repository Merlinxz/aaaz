document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');

    function calculateCountdown() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const targetDate = new Date(nextYear, 1, 16, 16, 24, 13); // February is month 1 (0-indexed)

        const totalSeconds = Math.max(0, (targetDate - now) / 1000);

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        return { days, hours, minutes, seconds };
    }

    function updateCountdown() {
        const { days, hours, minutes, seconds } = calculateCountdown();

        countdownElement.innerHTML = `
            <div>${days.toString().padStart(2, '0')}D</div>
            <div>${hours.toString().padStart(2, '0')}Hr</div>
            <div>${minutes.toString().padStart(2, '0')}Min</div>
            <div>${seconds.toString().padStart(2, '0')}Sec</div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});