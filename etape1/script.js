// Suivi des zones cliquées
var clickedZones = {
    zone1: false,
    zone2: false
};

// Fonction pour gérer les clics sur les zones
function handleClick(zone) {
    // Marquer la zone comme trouvée
    clickedZones[zone] = true;

    // Masquer la zone cliquée
    document.getElementById(zone).style.display = "none";
    console.log('coucou')
    // Vérifier si toutes les zones ont été trouvées
    if (Object.values(clickedZones).every(Boolean)) {
        // Rediriger vers la prochaine page
        window.location.href = "../etape2/etape2.php.php";
    }
}