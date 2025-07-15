let countdown;

document.getElementById('startBtn').addEventListener('click', function () {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    if (!date || !time) {
        alert('Please select both date and time.');
        return;
    }
    const target = new Date(`${date}T${time}:00`).getTime();

    if (countdown) clearInterval(countdown);

    countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = target - now;

        if (distance <= 0) {
            clearInterval(countdown);
            document.getElementById('message').textContent = "Countdown completed!";
            updateDisplay(0, 0, 0, 0);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateDisplay(days, hours, minutes, seconds);
    }, 1000);
});

function updateDisplay(days, hours, minutes, seconds) {
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
