// toutes les cartes
let allCards = document.querySelectorAll('.item');
// pour chaque carte au click
allCards.forEach((card) => {
  card.addEventListener('click', () => {
    // si elle a la classe hidden je la supprime
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    } else { // sinon je l ajoute
      card.classList.add('hidden');
    } 
  });
});
