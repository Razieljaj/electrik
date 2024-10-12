let targets = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
let clickedCounters = [false, false, false];
let counters = [document.getElementById('counter1'), document.getElementById('counter2'), document.getElementById('counter3')];
let intervals = [];
let gameWon = false;

// Afficher les objectifs pour chaque compteur
document.getElementById('target1').textContent = targets[0];
document.getElementById('target2').textContent = targets[1];
document.getElementById('target3').textContent = targets[2];

function startGame() {
    counters.forEach((counter, index) => {
        // Définir des intervalles pour chaque compteur
        intervals[index] = setInterval(() => {
            if (!clickedCounters[index]) {
                let newValue = Math.floor(Math.random() * 10);
                counter.textContent = newValue;

                // Vérifier si le chiffre est le bon
                if (newValue === targets[index]) {
                    counter.classList.add('correct');
                } else {
                    counter.classList.remove('correct');
                }
            }
        }, 450); // Les compteurs changent toutes les secondes

        // Ajouter un écouteur d'événements pour cliquer
        counter.addEventListener('click', () => {
            if (!clickedCounters[index] && parseInt(counter.textContent) === targets[index]) {
                clickedCounters[index] = true;
                counter.classList.remove('correct');
                counter.classList.add('clicked');
                checkWinCondition();
            }
        });
    });
}

function checkWinCondition() {
    if (clickedCounters.every(Boolean) && !gameWon) {
        gameWon = true;
        clearIntervals();
        document.getElementById('message').textContent = 'Félicitations, vous avez gagné !';
        document.getElementById('resetButton').style.display = 'block';
    }
}

function clearIntervals() {
    intervals.forEach(interval => clearInterval(interval));
}

window.onload = startGame;
