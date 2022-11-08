/*===================  JOUER UN SON AVEC REGLAGE VOLUME ====================*/
const playSound = (src, vol) => {
  let sound = new Audio(src);
  sound.play();
  sound.volume = vol;
};

/*===================  AFFICHE REGLES AU DEPART ====================*/
function popRulesOnStart() {
  //cache popup regle
  modal.classList.add('stop');
  setTimeout(() => {
    //affiche popup regle apres 1500s
    modal.classList.remove('stop');
  }, 1500);
  setTimeout(() => {
    //cache popup regle apres 4000s
    modal.classList.add('stop');
  }, 4000);
}

/*-================================  CLICK SUR UNE CARTE =================================*/
function clickOnCardEvent(card) {
  // s iclick sur carte trouvé sortie de la fonction
  if (card.classList.contains('finded')) {
    return;
  }

  cptClickCurrent++;

  // ---------------------------------------------------- 1er click
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

    // --------------------------------------------------- 2eme click
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
      // --------------------------------------------- 2 cartes trouvée
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

        title.classList.add('title-found');
        /*---------------------------------------------- Nom du héros*/
        title.textContent = card.dataset.image;
        setTimeout(() => {
          title.textContent = 'avengers memory';
          title.classList.remove('title-found');
        }, 2000);

        // ---------------------------------------------- partie gangnés
        if (nbCardFinded === 20) {
          playSound('sound/win.mp3', 0.05);
          // effet container win
          container.classList.add('win');
          // effet img win
          allImg.forEach((img) => {
            img.classList.add('win');
          });
        }
        // -------------------------------------------- 2 cartes pas trouvées
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

