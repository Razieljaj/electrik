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
});
