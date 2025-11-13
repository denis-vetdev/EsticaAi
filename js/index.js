    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const intervalSelect = document.getElementById('intervalSelect');

    let timerInterval;
    let endTime = null;

    function startTimer() {
      const selectedSeconds = parseInt(intervalSelect.value, 10);
      endTime = Date.now() + selectedSeconds * 1000;

      clearInterval(timerInterval);
      updateTimerDisplay();

      timerInterval = setInterval(() => {
        updateTimerDisplay();
      }, 1000);
    }

    function updateTimerDisplay() {
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));

      const hours = String(Math.floor(remaining / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, '0');
      const seconds = String(remaining % 60).padStart(2, '0');

      timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;

      if (remaining <= 0) {
        clearInterval(timerInterval);
        notifyUser();
      }
    }

    function notifyUser() {
      if (Notification.permission === "granted") {
        new Notification("⏸️ Pausa para alongar!", {
          body: "Hora de se levantar, esticar e relaxar os ombros!",
        });
      } else {
        alert("Hora de se levantar, esticar e relaxar os ombros!");
      }

      startTimer();
    }

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    startButton.addEventListener('click', startTimer);