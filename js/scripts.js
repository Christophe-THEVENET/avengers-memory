/************* au chargement de la page ***************/


//popup des règles
popRulesOnStart();




// créé les paires d'avengers dans le tableau
let arrayAvengers = makeArrayWithPair(arrayAvengersSimple);
// melange le tableau des avengers
shuffleArray(arrayAvengers);

// TO DO LIST

// aléatoire placement carte
// début et fin de partie
//bug click 2 fois la meme carte
// bouton pour relancer une game
// animation victoire


// ********* ajout html en dynamique *****************
createHtmlCard(arrayAvengers);



let allCards = document.querySelectorAll('.item');
let allImg = document.querySelectorAll('img');



/**************** au click d'une carte ***************/
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    clickOnCardEvent(card);
  });
});
