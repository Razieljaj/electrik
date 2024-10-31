let levers = [false, false, false, false];
const resultMessage = document.getElementById('resultMessage');
const nextButton = document.getElementById('nextButton');
const resultDiv = document.getElementById('resultDiv');
let hintDisplayed = false; // Variable pour suivre si l'indice a été affiché

function toggleLever(index) {
    levers[index] = !levers[index]; // Inverser l'état du levier
    document.getElementById(`lever${index + 1}`).classList.toggle('active');
    checkCombination(); // Vérifie la combinaison après chaque changement
}

// Fonction pour afficher un indice
function displayHint() {
    if (!hintDisplayed) {
        resultMessage.textContent = "Indice : Le nombre de tour(s) Eiffel a Paris et le premier nombre impair qui n'est pas pair après deux (qui lui est pair et non impair)"; // Indice à afficher
        hintDisplayed = true;
    }
}

function checkCombination() {
    // Vérifiez la combinaison correcte (par exemple: levier 1 et 3 activés)
    const correctCombination = levers[0] && !levers[1] && levers[2] && !levers[3]; // 1 et 3 activés
    const allLeversActivated = levers.every(lever => lever === true);
    const rien = levers.every(lever => lever === false); 
    let message = ''; // Réinitialisez le message à chaque vérification

    // Affichez les messages appropriés
    if (correctCombination) {
        nextButton.disabled = false; // Active le bouton
        resultDiv.style.display = 'block'; // Affiche le div résultat
    } else {
        nextButton.disabled = true; // Désactive le bouton
        resultDiv.style.display = 'none'; // Cache le div résultat
    }

    if (allLeversActivated) {
        message = "C'est pas Versailles ici !"; // Message si tous les leviers sont activés
    }

    if (rien){
        message = "Qui a éteint la lumière ?"
    }

    resultMessage.textContent = message; // Mettez à jour le message affiché
}

for (let i = 0; i < levers.length; i++) {
    document.getElementById(`lever${i + 1}`).addEventListener('click', () => toggleLever(i));
}

setTimeout(displayHint, 180000);
