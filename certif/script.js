document.addEventListener("DOMContentLoaded", function () {
    var timer = 60; // Durée du compte à rebours en secondes
    var countdown = setInterval(function () {
        timer--;
        document.getElementById('timer').textContent = timer; // Mettre à jour l'affichage du timer

        if (timer <= 0) {
            clearInterval(countdown); // Arrêter le timer une fois qu'il atteint zéro
            document.getElementById('button').style.display = 'block'; // Afficher le bouton "Vérifier"
        }
    }, 1000); // Compte à rebours en millisecondes (1 seconde = 1000 ms)

    // Action à exécuter lorsque le bouton "Vérifier" est cliqué
    document.getElementById('button').onclick = function () {
        const felicitationSection = document.getElementById('felicitation');
        const felicitationButton = document.getElementById('felicitationButton');

        // Afficher les félicitations et le bouton "Continuer"
        felicitationSection.style.display = "block";
        felicitationButton.style.display = "block";

        // Faire défiler la page jusqu'à la section Félicitation
        felicitationSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };
});