/*-----  toggle bouton son (on/off)--------*/

let soundOn = true;
/* for (let btnSound of btnSoundAll) {
    btnSound.addEventListener('click', () => {
        if (soundOn === true) {
            soundOn = false;
            btnSound.textContent = 'son (off)';
        } else {
            soundOn = true;
            btnSound.textContent = 'son (on)';
        }
        return;
    });
} */

/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/

const playSound = (src, vol) => {
  let sound = new Audio(src);
  if (soundOn === true) {
    sound.play();
    sound.volume = vol;
  } else {
    sound.pause();
  }
};

window.onload = function () {
  playSound('./sound/intro.mp3', 0.5);
};

// TO DO LIST

// aléatoire placement carte
// début et fin de partie
//bug click 2 fois la meme carte
// bouton pour relancer une game
// animation victoire

// toutes les cartes
let allCards = document.querySelectorAll('.item');

// déclarer tableau de toutes les cartes
let arrayCards = [];

// effet a l intro
allCards.forEach((card) => {
  card.classList.add('intro');
});

let cptClickCurrent = 0;
let cardClikedId;

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
    // stock id de l'image
    cardClikedId = card.id;

    // --------------------------------------- 2eme click
  } else if (cptClickCurrent === 2) {
    // si la carte que j'ai clické = carte déja cliqué stop
    if (cardClikedId === card.id) {
      // j annule le click
      cptClickCurrent = 1;
      // sinon je continu
    } else {
      // montre image cliquée
      card.classList.remove('hidden');
      // recup la carte cliqué
      let cardClickedBefore = document.getElementById(cardClikedId);
      // ================ gagné===================
      if (cardClickedBefore.dataset.image === card.dataset.image) {
        playSound('./sound/foundCard.mp3', 0.3);
        // pour toutes les cartes
        allCards.forEach((card) => {
          // si trouvé
          if (!card.classList.contains('hidden')) {
            // ajoute classe finded
            card.classList.add('finded');
          }
        });
      } else {
        playSound('./sound/lose.mp3', 0.2);
      }
      cptClickCurrent = 0;
      cardClikedId = '';

      // compter les cartes pas trouvées
      // si 0 alors gagné, jeu fini
    }
  }
}
