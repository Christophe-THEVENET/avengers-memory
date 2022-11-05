/*-----  JOUER UN SON AVEC REGLAGE VOLUME --------*/
const playSound = (src, vol) => {
  let sound = new Audio(src);
  sound.play();
  sound.volume = vol;
};
/*musique intro au chargement de la page */
document.addEventListener('DOMContentLoaded', () => {
  playSound('sound/intro.mp3', 0.3);
});

// TO DO LIST

// aléatoire placement carte
// début et fin de partie
//bug click 2 fois la meme carte
// bouton pour relancer une game
// animation victoire

// toutes les cartes
let allCards = document.querySelectorAll('.item');

let container = document.querySelector('.container');

let allImg = document.querySelectorAll('img');
let modal = document.querySelector('.modal');


/* allImg.forEach((img) => {
  // cache les images non trouvées
  
    img.classList.remove('win');
  
}); */

// déclarer tableau de toutes les cartes
let arrayCards = [];

let nbCardFinded = 0;

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
      // --------------------------------- 2 cartes trouvée
      if (cardClickedBefore.dataset.image === card.dataset.image) {
        playSound('sound/foundCard2.wav', 0.05);
        // nb carte trouvées
        nbCardFinded += 2;
        // pour toutes les cartes
        allCards.forEach((card) => {
          // si trouvé
          if (!card.classList.contains('hidden')) {
            // ajoute classe finded
            card.classList.add('finded');
          }
        });







      
        modal.classList.remove('hidden')

setTimeout(() => {
modal.classList.add('hidden')
 
}, 500); 










        // ------------------------------------- partie gangnés
        if (nbCardFinded === 20) {
          playSound('sound/win.mp3', 0.05);
          // effet continer win
          container.classList.add('win');
          // effet img win
          allImg.forEach((img) => {
            img.classList.add('win');
          });
        }
      } else {
        playSound('sound/lose.wav', 0.05);
      }
      cptClickCurrent = 0;
      cardClikedId = '';

      // compter les cartes pas trouvées
      // si 0 alors gagné, jeu fini
    }
  }
}



function flashName(modal) {

}
