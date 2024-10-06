<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puzzle Compatible</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="pieces-container">
    <img id="piece1" src="images/piece1.png" class="selectable">
    <img id="piece2" src="images/piece2.png" class="selectable">
    <img id="piece3" src="images/piece3.png" class="selectable">
</div>

<div class="puzzle-container">
    <div id="zone1" class="drop-zone" data-piece="piece1">1</div>
    <div id="zone2" class="drop-zone" data-piece="piece2">2</div>
    <div id="zone3" class="drop-zone" data-piece="piece3">3</div>
</div>


    <div class="bottom-panel dialogue">
        <p class="dialogue_text"> *bipbip* QUOI ENCORE !   Mince une panne est signalée vers le secteur E du niveau 0. Je suis sûre que c'est Kévin qui joue à Fortnite en même temps que ses voisins de palier préparent la raclette </p>
    </div>
    <img src="..\image\eel\eel.webp" class="eel-content">
    <script src="script.js"></script>
    <a id="finish-button" class="button" style="display: none;" href = "../etape2/etape2.php">Bravo !</a>


</body>
</html>