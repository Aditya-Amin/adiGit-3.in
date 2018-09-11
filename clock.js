
var clock = document.getElementById("container").getElementsByTagName("div")[0];

var clockNumbers;
var i;

var time = new Date();
var sec = time.getSeconds();
var secHand = document.getElementsByClassName("sec-hand");

for(i=0; i<=11; i++){
  clockNumbers = document.createElement("div");
  clock.appendChild(clockNumbers);
  clockNumbers.setAttribute("class","num");
  clockNumbers.setAttribute("id","num-"+(i+1));
}

for(i=0; i<=11; i++){
  var clockNumDiv = document.getElementById("clock-body").getElementsByClassName("num")[i];
  var div = document.createElement("div");
  
  clockNumDiv.appendChild(div);
  div.innerHTML = i+1;
}

setInterval(function(){
  var time = new Date();
  updateClock(time);
},1000);

function updateClock(time){
  var secHand = document.getElementById("sec-hand").style;
  secHand.transform = "rotateZ("+time.getSeconds()*6+"deg)";

  var minHand = document.getElementById("min-hand").style;
  minHand.transform = "rotateZ("+time.getMinutes()*6+"deg)";

  var hourHand = document.getElementById("hour-hand").style;
  hourHand.transform = "rotateZ("+(0.5*(60*time.getHours()+time.getMinutes()))+"deg)";
}

