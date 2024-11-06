let levers = [false, false, false, false, false, false];
const resultMessage = document.getElementById('resultMessage');
const nextButton = document.getElementById('nextButton');
const resultDiv = document.getElementById('resultDiv');
let hintDisplayed = false;

function toggleLever(index) {
    levers[index] = !levers[index];
    document.getElementById(`lever${index + 1}`).classList.toggle('active');
    checkCombination();
}

function displayHint() {
    if (!hintDisplayed) {
        resultMessage.textContent = "Indice : Le nombre de tour(s) Eiffel a Paris, le premier nombre impair qui n'est pas pair après deux (qui lui est pair et non impair) et les doits d'une main (pour une main étant pourvue de six doigts) ";
        hintDisplayed = true;
    }
}

function checkCombination() {
    // Combinaison correcte : leviers 1, 3, et 6 activés, autres désactivés
    const correctCombination = levers[0] && !levers[1] && levers[2] && !levers[3] && !levers[4] && levers[5];
    const allLeversActivated = levers.every(lever => lever === true);
    const rien = levers.every(lever => lever === false); 
    let message = '';

    if (correctCombination) {
        nextButton.disabled = false;
        resultDiv.style.display = 'block';
    } else {
        nextButton.disabled = true;
        resultDiv.style.display = 'none';
    }

    if (allLeversActivated) {
        message = "C'est pas Versailles ici !";
    }

    if (rien) {
        message = "Qui a éteint la lumière ?";
    }

    resultMessage.textContent = message;
}

// Ajoutez des écouteurs pour chaque levier
for (let i = 0; i < levers.length; i++) {
    document.getElementById(`lever${i + 1}`).addEventListener('click', () => toggleLever(i));
}

setTimeout(displayHint, 180000);
