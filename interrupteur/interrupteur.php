<?php
// interrupteur_futuriste.php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Redirection vers une nouvelle page après l'animation
    header('Location: ../etape1/etape1.php');
    exit();
}
?>

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
</br>
    <div class="switch-container">
        <div class="switch" id="futuristicSwitch"></div>
        <div class="glow" id="futuristicGlow"></div>
    </div>

    <form method="post" id="futuristicForm">
        <button type="submit" id="submitSwitch"></button>
    </form>

    <script>
        const switchElement = document.getElementById('futuristicSwitch');
        const glowElement = document.getElementById('futuristicGlow');
        const form = document.getElementById('futuristicForm');
        const submitSwitch = document.getElementById('submitSwitch');

        switchElement.addEventListener('click', () => {
            // Ajoute l'animation pour descendre l'interrupteur
            switchElement.classList.add('active');
            glowElement.classList.add('active');

            // Attendre l'animation avant de soumettre le formulaire
            setTimeout(() => {
                submitSwitch.click(); // Soumet le formulaire après 1.5s
            }, 1500); // 1,5 secondes pour terminer l'animation
        });
    </script>
</body>
</html>
