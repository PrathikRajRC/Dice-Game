

var randomNumber1 = (Math.floor((Math.random())*6)+1)
var simage = ("./images/dice"+randomNumber1+".png")
var randomNumber2 = (Math.floor((Math.random())*6)+1)
var simage2 = ("./images/dice"+randomNumber2+".png")


document.querySelector(".img1").setAttribute("src", simage);
document.querySelector(".img2").setAttribute("src", simage2);
if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = ("Player 1 Wins")
    document.querySelector("footer").innerHTML=("Player 1 won with a score of "+ randomNumber1)
    document.querySelector("footer").setAttribute("style","font-size:2rem;font-weight:600;")
}
else if(randomNumber1 < randomNumber2){
    document.querySelector(".container h1").innerHTML = ("Player 2 Wins")
    document.querySelector("footer").innerHTML=("Player 2 won with a score of "+ randomNumber2)
    document.querySelector("footer").setAttribute("style","font-size:2rem;font-weight:600;")
}
else{
    document.querySelector(".container h1").innerHTML = ("Draw")
    document.querySelector("footer").innerHTML=("Draw with a scoire of "+ randomNumber1+ " and "+randomNumber2)
    document.querySelector("footer").setAttribute("style","font-size:2rem;font-weight:600;")
}