let allCards = document.querySelectorAll('.item');
let container = document.querySelector('.container');
let allImg = document.querySelectorAll('img');
let title = document.querySelector('h1');
let modal = document.querySelector('.modal');

let arrayCards = [];
let nbCardFinded = 0;
let cptClickCurrent = 0;
let cardClikedId;




/*musique intro au chargement de la page */
document.addEventListener('DOMContentLoaded', () => {
  /* playSound('sound/intro.mp3', 0.3); */
});


modal.classList.add('stop');

setTimeout(() => {
  modal.classList.remove('stop');
}, 1500);


setTimeout(() => {
  modal.classList.add('stop');
}, 4000);






// TO DO LIST

// aléatoire placement carte
// début et fin de partie
//bug click 2 fois la meme carte
// bouton pour relancer une game
// animation victoire



// pour chaque carte au click -> playgame(card)
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    playGame(card);
  });
});



