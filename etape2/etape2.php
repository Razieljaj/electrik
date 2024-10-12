<?php
session_start();

// Réinitialiser le jeu
if (isset($_POST['reset'])) {
    header("Location: etape2.php");
    exit;
}
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
<div id="targets">
    <p> Au fait, le code est : <span id="target1"></span>
    <span id="target2"></span>
    <span id="target3"></span></p>
</div>

<div id="game">
    <div class="counter" id="counter1">0</div>
    <div class="counter" id="counter2">0</div>
    <div class="counter" id="counter3">0</div>
</div>

<p id="message"></p>
<button id="resetButton" style="display: none;" onclick="window.location.href='../etape3/etape3.php'">Aller à l'étape suivante</button>

<form method="POST">
    <input type="hidden" name="reset" value="true">
    <button type="submit">Change le code, anguille.</button>
</form>

<script src="script.js"></script>
</body>
</html>
