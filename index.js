var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var random= "dice" +randomNumber1+ ".png";
var ran="images/" +random;
var res1=document.querySelectorAll("img")[0];
res1.setAttribute("src",ran);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var k= "dice" +randomNumber2+".png";
var x="images/"+k;
var i=document.querySelectorAll("img")[1];
i.setAttribute("src",x);

if(randomNumber1>randomNumber2){
   document.querySelector("h1").textContent="🚩 Player 1 is winner";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="🚩Player 2 is winner";
}

else{
    document.querySelector("h1").textContent="Draw!";
}
