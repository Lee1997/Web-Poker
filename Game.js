startGame = function(){
  var deck = makeDeck();

  /*for(var i = 0; i < 52; i++){
    console.log(deck[i].getInfo());
  }*/

  deck = shuffle(deck);

  var myCards = $('.myCard');

  for(var i = 0; i < myCards.length; i++){
    myCards[i].setAttribute('src', deck[i].getImgSrc());
    myCards[i].setAttribute('onclick', 'selectCard(this)');
  }
}

function selectCard(card){
  card.setAttribute("style", "opacity: 0.4");
  card.setAttribute("onclick", "deselectCard(this)");
}

function deselectCard(card){
  card.setAttribute("style", "");
  card.setAttribute("onclick", "selectCard(this)");
}

function rand(min, max) {
  return Math.floor(Math.random()*(max-min)+min);
}

function exchangeCards(){
  var myCards = $('.myCard');

  for(var i = 0; i < myCards.length; i++){
    if(myCards[i].style.cssText != ""){
      alert(myCards[i].style.cssText);
    }
  }
}
