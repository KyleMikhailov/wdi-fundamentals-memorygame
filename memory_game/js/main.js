var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
var score = 0;
var cardsInPlay = [];
document.getElementById('score').textContent = "Score : " + score;

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		score += 1;
		document.getElementById('score').textContent = "Score : " + score;
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function (){
	var cardId = this.getAttribute("data-id");
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	
if (cardsInPlay.length === 2) {
	checkForMatch ();
	}	
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function() {
	document.getElementById('game-board').innerHTML = "";
	cardsInPlay = [];
	createBoard ();
}

document.getElementById("button").addEventListener('click', resetBoard)

createBoard();