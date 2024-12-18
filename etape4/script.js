let compteur = 0;
const intensiteCorrecte = 50;

function checkGuess() {
    let userGuess = parseFloat(document.getElementById('userGuess').value);
    let message = '';
    const resultMessage = document.getElementById('resultMessage');
    const bravoDiv = document.getElementById('Bravo');
    const nextStepButton = document.getElementById('nextStepButton');

    // Affiche #Bravo après toute tentative de réponse
    bravoDiv.style.display = "block";

    if (isNaN(userGuess)) {
        message = 'Ooooh, c\'est un chiffre qu\'il nous faut !';
        compteur++;
    } else if (userGuess < intensiteCorrecte) {
        message = 'C\'est plus !';
        compteur++;
    } else if (userGuess > intensiteCorrecte) {
        message = 'C\'est moins !';
        compteur++;
    } else {
        if (compteur <= 1) {
            message = 'Félicitations, vous avez trouvé la bonne réponse : ' + intensiteCorrecte + ' A ! Vous connaissiez déjà la formule n\'est ce pas ? </br></br>Voici une ébauche de mon idée :<img src="../image/smartgrid.jpg" class="smart_grid">';
        } else {
            message = 'Félicitations, vous avez trouvé la bonne réponse : ' + intensiteCorrecte + ' A ! </br></br>Voici une ébauche de mon idée :<img src="../image/smartgrid.jpg" class="smart_grid">';
        }
        nextStepButton.style.display = "inline-block"; // Affiche le bouton pour passer à l'étape suivante
    }

    // Affiche le message de résultat avec innerHTML pour interpréter les balises HTML
    resultMessage.innerHTML = message;
}
