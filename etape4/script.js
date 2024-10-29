function checkAnswer() {
    // Récupère la réponse utilisateur
    let userAnswer = parseFloat(document.getElementById('userAnswer').value.replace(',', '.'));
    let message = '';
    
    // Récupère les éléments HTML pour afficher le résultat et le bouton suivant
    const resultMessage = document.getElementById('resultMessage');
    const bravoDiv = document.getElementById('Bravo');
    const nextStepButton = document.getElementById('nextStepButton');

    // Affiche la section #Bravo après toute tentative de réponse
    bravoDiv.style.display = "block";

    // Vérifie si l'entrée est un nombre
    if (isNaN(userAnswer)) {
        message = 'Ooooh, c\'est un chiffre qu\'il nous faut !';
    } else if (userAnswer !== 6.5) {
        message = 'Non ce n\'est pas ça, réessaie encore.';
    } else {
        message = 'Félicitations, vous avez trouvé la bonne réponse !';
        nextStepButton.style.display = "inline-block"; // Affiche le bouton pour passer à l'étape suivante
    }

    // Affiche le message de résultat dans l'élément resultMessage
    resultMessage.textContent = message;
}
