var randomNumber1 = (Math.floor(Math.random() * 6)) + 1 ;
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1 ;

var baseUrl = "images/dice";
var newImageSrc1 = baseUrl + randomNumber1 + ".png" ;
var newImageSrc2 = baseUrl + randomNumber2 + ".png" ;


function runDiceGame() {
	document.querySelector(".img1").setAttribute("src", newImageSrc1);
	document.querySelector(".img2").setAttribute("src", newImageSrc2);

	if (randomNumber1 === randomNumber2) {
	document.querySelector("h1").textContent = "Draw!!";
	} else if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").textContent = "🚩 Player 1 Wins";
	} else {
		document.querySelector("h1").textContent = "🚩 Player 2 Wins";
	}
}

runDiceGame();


