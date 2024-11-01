document.addEventListener('DOMContentLoaded', function () {
    let selectedPiece = null;
    let totalPieces = 3; // Remplacez ce chiffre par le nombre total de pièces
    let piecesPlaced = 0; // Compteur pour les pièces placées

    // Fonction pour sélectionner une pièce
    function selectPiece(piece) {
        if (selectedPiece) {
            selectedPiece.classList.remove('selected');
        }
        selectedPiece = piece;
        piece.classList.add('selected');
    }

    // Fonction pour vérifier si toutes les pièces sont placées
    function checkAllPiecesPlaced() {
        if (piecesPlaced === totalPieces) {
            document.getElementById('finish-button').style.display = 'block'; // Afficher le bouton
        }
    }

    // Fonction pour placer une pièce sur une zone
    function placePiece(zone) {
        if (selectedPiece && selectedPiece.id === zone.getAttribute('data-piece')) {
            // Enlever la pièce de son emplacement précédent
            if (selectedPiece.parentElement.classList.contains('drop-zone')) {
                selectedPiece.parentElement.innerHTML = ''; // Vider l'ancienne zone
            }
            // Vider l'indicateur de la zone
            zone.innerHTML = ''; 
            // Placer la pièce sélectionnée dans la zone
            zone.appendChild(selectedPiece);
            selectedPiece.classList.remove('selected');
            selectedPiece = null;
            piecesPlaced++; // Incrémenter le compteur de pièces placées
            checkAllPiecesPlaced(); // Vérifier si toutes les pièces sont placées
        }
    }

    // Ajouter les événements de clic pour les pièces
    var pieces = document.querySelectorAll('.selectable');
    pieces.forEach(function (piece) {
        piece.addEventListener('click', function () {
            selectPiece(piece);
        });
    });

    // Ajouter les événements de clic pour les zones
    var zones = document.querySelectorAll('.drop-zone');
    zones.forEach(function (zone) {
        zone.addEventListener('click', function () {
            placePiece(zone);
        });
    });

// Ajouter l'événement de clic pour le bouton play
document.getElementById('playButton').addEventListener('click', function() {
    const audio = document.getElementById('myAudio');
    audio.play();
})});

document.addEventListener('DOMContentLoaded', function () {
    // Récupérer tous les éléments à désactiver
    const selectableImages = document.querySelectorAll('.selectable');
    const dropZones = document.querySelectorAll('.drop-zone');
    const dialogues = document.querySelectorAll('.dialogue'); // Corriger ici

    // Fonction pour activer/désactiver des éléments
    function setElementsDisabled(disabled) {
        selectableImages.forEach(image => {
            image.style.pointerEvents = disabled ? 'none' : 'auto';
            image.style.opacity = disabled ? '0.5' : '1'; // Change l'opacité pour montrer qu'ils sont désactivés
        });
        dropZones.forEach(zone => {
            zone.style.pointerEvents = disabled ? 'none' : 'auto';
            zone.style.opacity = disabled ? '0.5' : '1'; // Change l'opacité pour montrer qu'ils sont désactivés
        });
        dialogues.forEach(dialogue => {
            dialogue.style.pointerEvents = disabled ? 'none' : 'auto'; // Désactiver l'interaction
            dialogue.style.opacity = disabled ? '0.01' : '1'; // Réduire l'opacité pour les rendre illisibles
        });
    }

    // Désactiver tous les éléments au début
    setElementsDisabled(true);

    // Ajouter l'événement de clic pour le bouton play
    document.getElementById('playButton').addEventListener('click', function() {
        const audio = document.getElementById('myAudio');
        audio.play();
        
        // Masquer le bouton après le clic
        this.style.display = 'none';

        // Activer les éléments interactifs maintenant que le bouton a été cliqué
        setElementsDisabled(false);
    });
});
