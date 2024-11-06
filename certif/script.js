document.addEventListener("DOMContentLoaded", function () {
    var timer = 60;
    var countdown = setInterval(function () {
        timer--;
        document.getElementById('timer').textContent = timer;

        if (timer <= 0) {
            clearInterval(countdown);  // Arrêter le timer une fois qu'il atteint zéro
            document.getElementById('button').style.display = 'block';  // Afficher le bouton "Vérifier"
        }
    }, 1100);

    // Lorsque le bouton "Vérifier" est cliqué
    document.getElementById('button').onclick = function () {
        document.getElementById('felicitation').style.display = "block";  // Afficher le message de félicitations
        document.getElementById('felicitationButton').style.display = "block";  // Afficher le bouton "Continuer"
    };
});
