<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Cliquable avec Zones Visibles</title>
    <link rel="stylesheet" href="etape1/style.css">
    <script src="script.js"></script>

</head>
<body>
    <h1>Choisissez toutes les zones de l'image</h1>
    <div style="position: relative;">
        <!-- Image cliquable -->
        <img src="..\image\background\les images superficielles.png" alt="Image Cliquable" width="100%" height="auto">
        
        <!-- Les zones cliquables visibles -->
        <div id="zone1" class="zone" onclick="handleClick('zone1')"></div>
        <div id="zone2" class="zone" onclick="handleClick('zone2')"></div>
    </div>

    <script>
        
    </script>
</body>
</html>