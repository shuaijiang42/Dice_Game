const imgElements = document.querySelectorAll("img");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSource1 = "images/dice" + randomNumber1+".png";
var imgSource2 = "images/dice" + randomNumber2+".png";
imgElements[0].setAttribute("src", imgSource1);
imgElements[1].setAttribute("src", imgSource2);

function toggleTitle(n1, n2)
{
    var title = document.querySelector("h1");
    if (n1 > n2)
        title.textContent = "🚩Player1 wins!"
    else if (n1 < n2)
        title.textContent = "Player2 wins! 🚩"
    else    
        title.textContent = "Draw!"
}
toggleTitle(randomNumber1, randomNumber2);