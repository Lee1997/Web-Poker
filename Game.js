function startGame(){
  var deck = makeDeck();


  /*for(var i = 0; i < 52; i++){
    console.log(deck[i].getInfo());
  }*/

  document.getElementById('testCard').src = deck[5].getImgSrc();

}
