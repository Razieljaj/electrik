<?php
session_start();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeu des Compteurs</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Jeu des Compteurs</h1>
<div id="targets" class = 'dialogue'>
    <p class = "dialogue_text"> Au fait, le code est : 
    <strong>
    <span id="target1"></span>
    <span id="target2"></span>
    <span id="target3"></span></p>
    <img src="..\image\eel\eel.webp" class="eel-content">
    </strong>
</div>

<div id="game">
    <div class="counter" id="counter1">0</div>
    <div class="counter" id="counter2">0</div>
    <div class="counter" id="counter3">0</div>
</div>

<p id="message"></p>
<button id="resetButton" style="display: none;" onclick="window.location.href='../etape3/etape3.php'" class = "button">Aller à l'étape suivante</button>


<script src="script.js"></script>
</body>
</html>
