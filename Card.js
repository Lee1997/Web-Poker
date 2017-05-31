function Card (suit, value, imgSrc){
  this.suit = suit;
  this.value = value;
  this.imgSrc = imgSrc;
}

Card.prototype.getInfo = function () {
    return this.suit + ' ' + this.value + ' ' + this.imgSrc;
};

Card.prototype.getString = function () {
  return this.value + " of " + this.suit;
}

Card.prototype.getSuit = function () {
    return this.suit;
};

Card.prototype.getValue = function () {
    return this.value;
};

Card.prototype.getImgSrc = function () {
    return this.imgSrc;
};

// Global functions

function makeDeck() {
  var deck = [];

  for(var i = 0; i < 4; i++){
    var suit ="";
    switch(i){
      case 0 : suit = "Hearts"; break;
      case 1 : suit = "Diamonds"; break;
      case 2 : suit = "Clubs"; break;
      case 3 : suit = "Spades"; break;
      default : suit = "Blank"; break;
    }
    for(var j = 0; j < 13; j++){
      var name = "";
      if(j < 9){
        name = String(j + 2);
      }
      else{
        switch(j){
          case 9 : name = "Jack"; break;
          case 10 : name = "Queen"; break;
          case 11 : name = "King"; break;
          case 12 : name = "Ace"; break;
          default : name = "Blank"; break;
        }
      }
      var src = "CardImages/" + name.toLowerCase() + "_of_" + suit.toLowerCase() + ".png";
      deck[(13*i) + j] = new Card(suit, name, src);
    }
  }

  return deck;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
