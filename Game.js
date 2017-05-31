function startGame(){
  var deck = makeDeck();
  alert();

  /*for(var i = 0; i < 52; i++){
    console.log(deck[i].getInfo());
  }*/

  deck = shuffle(deck);

  var cards = $('.card');

  for(var i = 0; i < cards.length; i++){
    cards[i].setAttribute('src', deck[i].getImgSrc());
  }

}
