// toutes les cartes
let allCards = document.querySelectorAll('.item');

let cptClickCurrent = 0;
let dataImageShowed;

// pour chaque carte au click -> playgame(card)
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    playGame(card);
  });
});

function playGame(card) {
  cptClickCurrent++;

  // -------------------------------------------- 1er click
  if (cptClickCurrent === 1) {
    // parcours les cartes
    allCards.forEach((card) => {
      // cache les images non trouvées
      if (!card.classList.contains('finded')) {
        card.classList.add('hidden');
      }
    });
    // montre image cliquée
    card.classList.remove('hidden');
    // stock reponse (grace a l attribut data-image des div)
    dataImageShowed = card.dataset.image;

    // --------------------------------------- 2eme click
  } else if (cptClickCurrent === 2) {
    // montre image cliquée
    card.classList.remove('hidden');
    // ================ gagné===================
    if (card.dataset.image === dataImageShowed) {
      // pour toutes les cartes
      allCards.forEach((card) => {
        // si trouvé
        if (!card.classList.contains('hidden')) {
          // ajoute classe finded
          card.classList.add('finded');
        }
      });
    }
    cptClickCurrent = 0;
    dataImageShowed = '';
  }
}
