<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allumage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Allumez la centrale électrique</h1>
    <br>
    <div class="switch-container">
        <div class="switch" id="futuristicSwitch"></div>
        <div class="glow" id="futuristicGlow"></div>
    </div>

    <form method="post" id="futuristicForm" action="etape2/etape2.php">
        <button type="submit" id="submitSwitch" style="display:none;"></button>
    </form>

    <script>
        const switchElement = document.getElementById('futuristicSwitch');
        const glowElement = document.getElementById('futuristicGlow');
        const form = document.getElementById('futuristicForm');

        switchElement.addEventListener('click', (event) => {
            // Ajoute l'animation pour descendre l'interrupteur
            switchElement.classList.add('active');
            glowElement.classList.add('active');

            // Attendre l'animation avant de soumettre le formulaire
            setTimeout(() => {
                // Empêche le comportement par défaut du formulaire
                event.preventDefault(); // Ajoutez ceci

                // Envoie une requête POST
                fetch('etape2/etape2.html', {
                    method: 'POST'
                }).then(() => {
                    // Redirection vers l'étape suivante
                    window.location.href = '../etape1/etape1.html';
                });
            }, 1500); // Délai de 1,5 seconde
        });
    </script>
</body>
</html>
