const button = document.getElementById('startBtn');
const timerDisplay = document.getElementById('timer');
let interval, countdown = 3600;

function updateTimerDisplay() {
    const totalSeconds = countdown;

    const remainingHours = String(Math.floor(totalSeconds/3600)).padStart(2, '0');
    const remainingMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const remainingSeconds = String(totalSeconds % 60).padStart(2, '0');

    timerDisplay.textContent = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
}

async function pedirPermissaoNotificacao() {
    if (Notification.permission !== 'granted') {
        await Notification.requestPermission();
    }
}

function enviarNotificacao() {
    if (Notification.permission === 'granted') {
        new Notification('Hora de se alongar! 🧘‍♂️', {
            body: 'Levante-se, alongue o pescoço, os ombros e respire fundo!',
            icon: 'https://cdn-icons-png.flaticon.com/512/3771/3771518.png'
        });
    } else {
        alert('Hora de se alongar! 🧘‍♂️');
    }
}

function iniciarContador() {
    clearInterval(interval);
    countdown = 3600;
    updateTimerDisplay();

    interval = setInterval(() => {
        countdown--;
        updateTimerDisplay();

        if (countdown <= 0) {
            enviarNotificacao();
            countdown = 3600;
        }
    }, 1000);
}

button.addEventListener('click', async () => {
    await pedirPermissaoNotificacao();
    iniciarContador();
    button.textContent = 'Lembrete em andamento...'
    button.disabled = true;
});