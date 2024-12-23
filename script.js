let countdownTimer;
const banner = document.getElementById("banner");
const countdownMins = document.getElementById("mins");
const countdownSecs = document.getElementById("secs");
const blinker = document.getElementById("blinker");
const yearDisplay = document.getElementById("year-display");
const pDisplay = document.getElementById("p-display");
const startButton = document.getElementById("start-button");

let minutes = 0;
let seconds = 0;

function startCountdown() {
    minutes = parseInt(countdownMins.value, 10); // the 10 means its a decimal

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid number of minutes!");
        return;
    }

    startButton.disabled = true;

    countdownSecs.value = "00";

    countdownTimer = setInterval(() => {
        if (seconds === 0) {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
                startButton.style.display = "none";
                
            } else {
                // Timer ends
                clearInterval(countdownTimer);
                banner.classList.add("fade-out");
                countdownMins.style.display = "none";
                countdownSecs.style.display = "none";
                blinker.style.display = "none";
                banner.style.display = "none";
                yearDisplay.style.display = "block";
                pDisplay.style.display = "block";
                    
                return;
            }
        } else {
            seconds--;
        }

        countdownMins.value = minutes.toString().padStart(2, "0");
        countdownSecs.value = seconds.toString().padStart(2, "0");
    }, 1000);
}

startButton.addEventListener("click", startCountdown);
