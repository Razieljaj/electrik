let compteur = 0;

function checkGuess() {
    let userGuess = parseFloat(document.getElementById('userGuess').value);
    let message = '';

    if (isNaN(userGuess)) {
        message = 'Veuillez entrer un nombre valide.';
        compteur++;
    } else if (userGuess < intensiteCorrecte) {
        message = 'C\'est plus !';
        compteur++;
    } else if (userGuess > intensiteCorrecte) {
        message = 'C\'est moins !';
        compteur++;
    } else {
        // Lorsque la réponse est correcte
        if (compteur <= 1) {
            message = 'Félicitations, vous avez trouvé la bonne réponse : ' + intensiteCorrecte + ' A ! Vous connaissiez déjà la formule, petits malins.';
        } else {
            message = 'Félicitations, vous avez trouvé la bonne réponse : ' + intensiteCorrecte + ' A !';
        }
        // Affiche le bouton pour passer à l'étape suivante
        document.querySelector("#Bravo button").style.display = "inline-block";
    }

    // Affiche le message et l'image
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('eelImage').style.display = "block";
}
