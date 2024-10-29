function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('userAnswer').value); // Récupère la réponse utilisateur
    let message = ''; // Variable pour le message de résultat
    const resultMessage = document.getElementById('resultMessage'); // Élément pour afficher le message
    const bravoDiv = document.getElementById('Bravo'); // Élément pour la section Bravo
    const nextStepButton = document.getElementById('nextStepButton'); // Élément pour le bouton de l'étape suivante

    // Affiche #Bravo après toute tentative de réponse
    bravoDiv.style.display = "block"; // Afficher la section Bravo

    if (isNaN(userAnswer)) {
        message = 'Ooooh, c\'est un chiffre qu\'il nous faut !'; // Message pour une entrée non numérique
    } else if (userAnswer !== 6.5) {
        message = 'Non ce n\'est pas ça, Réessaie a nouveau encore.'; // Message pour une réponse incorrecte
    } else {
        message = 'Félicitations, vous avez trouvé la bonne réponse'; // Message pour la bonne réponse
        nextStepButton.style.display = "inline-block"; // Affiche le bouton pour passer à l'étape suivante
    }

    // Affiche le message de résultat
    resultMessage.textContent = message; // Affiche le message dans l'élément resultMessage
}
