<?php
$puissance = 10000;
$tension = 200;
$intensite_correcte = $puissance / $tension;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission Volt - Jeu du Plus ou Moins</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="..\image\favicon.png">
</head>
<body>

    <h1>Jeu du Plus ou Moins</h1>
    <p>On sait que la puissance est de 10 000 Watts et la tension est de 200 Volts. <br> Pour vous, quelle est l'intensité ?</p>
    
    <textarea id="userGuess" placeholder="Entrez votre réponse ici"></textarea>
    <br>
    <button onclick="checkGuess()">Vérifier</button>
    
    <!-- Section de résultat -->
    <div id="Bravo" class = "dialogue" style="display: none;">
        <div id="resultMessage" class="dialogue_text"></div>
        <img src="..\image\eel\eel.png" class="eel-content">
        <button id="nextStepButton" style="display: none;" onclick="window.location.href='../etape4/etape4.php'">Aller à l'étape suivante</button>
    </div>

    <!-- Valeur de l'intensité correcte transmise en JavaScript -->
    <script>
        const intensiteCorrecte = <?php echo $intensite_correcte; ?>;
    </script>
    <script src="script.js"></script>

</body>
</html>