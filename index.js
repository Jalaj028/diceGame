var randomNumberOne = Math.floor(Math.random() * 6) + 1;//generating a random number between 1 and 6
//console.log(randomNumberOne)

var imageNumberOne = "dice" + randomNumberOne + ".png"; 
// console.log(imageNumber)

 document.querySelectorAll("img")[0].setAttribute("src", "images/"+imageNumberOne);


var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
//console.log(randomNumberOne)

var imageNumberTwo = "dice" + randomNumberTwo + ".png";
// console.log(imageNumber)

document.querySelectorAll("img")[1].setAttribute("src", "images/"+imageNumberTwo);


if(randomNumberOne > randomNumberTwo) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins"
}
else if(randomNumberOne < randomNumberTwo) {
    document.querySelector(".container h1").innerHTML = "Player 2 wins"
}
else {
    document.querySelector(".container h1").innerHTML = "Its a Draw"
}