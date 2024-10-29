<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mission Volt</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="../image/favicon.png"> <!-- Correction de la balise -->
</head>
<body>
    <h1>Calcul (encore)</h1>
    <div class="dialogue">
        <p class="dialogue_text">Regardez la formule dans la boite et calculez</p>
        <img src="../image/eel/eel.png" class="eel-content">
        <div id="resultMessage" class="dialogue_text"></div> <!-- Élément pour afficher le message de résultat -->
    </div>
    <textarea id="userAnswer" placeholder="Entrez votre réponse ici"></textarea>
    
    <button onclick="checkAnswer()">Vérifier</button> <!-- Lien vers la fonction checkAnswer -->
    
    <div id="Bravo" class="dialogue" style="display: none;"> <!-- Section Bravo -->
        <button id="nextStepButton" style="display: none;" onclick="window.location.href='../etape5/etape5.php'">Aller à l'étape suivante</button>
    </div>

    <script src="script.js"></script> <!-- Correction du chemin -->
</body>
</html>