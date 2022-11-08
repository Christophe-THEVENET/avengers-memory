

/************* au chargement de la page ***************/
document.addEventListener('DOMContentLoaded', () => {
  //musique intro
  /* playSound('sound/intro.mp3', 0.3); */
  //popup des règles
  popRulesOnStart();
});

// TO DO LIST

// aléatoire placement carte
// début et fin de partie
//bug click 2 fois la meme carte
// bouton pour relancer une game
// animation victoire



/************* au click d'une carte ***************/
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    clickOnCardEvent(card);
  });
});

