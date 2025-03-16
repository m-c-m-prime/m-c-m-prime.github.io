document.addEventListener("DOMContentLoaded", function () {
    const gameText = document.getElementById("game-text");
    const gameInput = document.getElementById("game-input");

    const gameData = {
        start: {
            text: "You wake up in a neon void. The circuits of capital hum beneath your feet. A voice whispers: 'M-C-M’ – Where do you go?\n\n 1. Follow the hum\n 2. Walk against the current\n 3. Stay still",
            choices: {
                "1": "hum",
                "2": "against",
                "3": "still"
            }
        },
        hum: {
            text: "The hum intensifies. You see fractalized transactions accelerating infinitely. A shadow figure appears: 'What do you seek?'\n\n 1. Control \n 2. Liberation \n 3. To accelerate beyond form",
            choices: {
                "1": "control",
                "2": "liberation",
                "3": "acceleration"
            }
        },
        against: {
            text: "You fight against the current, but the structure resists. The walls begin to close in. Choose:\n\n 1. Surrender \n 2. Hack the system \n 3. Break reality",
            choices: {
                "1": "surrender",
                "2": "hack",
                "3": "break"
            }
        },
        still: {
            text: "You remain motionless. The system does not notice you. Time folds. Choose:\n\n 1. Disappear \n 2. Recode yourself \n 3. Disrupt the feedback loop",
            choices: {
                "1": "disappear",
                "2": "recode",
                "3": "disrupt"
            }
        },
        acceleration: {
            text: "Your form dissolves into pure data. You become capital’s final echo. END.",
            choices: {}
        },
        liberation: {
            text: "You break the circuit and escape into an unknown space. END.",
            choices: {}
        },
        control: {
            text: "You take over the system, but the loops begin again. There is no escape. END.",
            choices: {}
        }
    };

    let currentNode = "start";

    function updateGame() {
        gameText.innerHTML += `<br><br> <strong>${gameData[currentNode].text}</strong>`;
    }

    gameInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let input = gameInput.value.trim();
            gameInput.value = "";

            if (gameData[currentNode].choices[input]) {
                currentNode = gameData[currentNode].choices[input];
                updateGame();
            } else {
                gameText.innerHTML += "<br><br> Invalid choice. Try again.";
            }
        }
    });

    // ✅ Ensure the first prompt appears on page load
    updateGame();
});
