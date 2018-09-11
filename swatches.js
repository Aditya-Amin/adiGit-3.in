function theme_1(){
    var changeColor = document.getElementById("container").style;
    var clockBody = document.getElementById("clock-body").style;
    var clockHourhand = document.getElementById("hour-hand").style;
    var clockMinhand = document.getElementById("min-hand").style;
    var clockSechand = document.getElementById("sec-hand").style;

    changeColor.background = "var(--theme-1)";
    clockBody.color = "var(--clockFonts-1)";
    clockHourhand.background = "var(--hourHand-1)";
    clockMinhand.background = "var(--minHand-1)";
    clockSechand.background = "var(--secHand-1)";
}

function theme_2(){
    var changeColor = document.getElementById("container").style;
    var clockBody = document.getElementById("clock-body").style;
    var clockHourhand = document.getElementById("hour-hand").style;
    var clockMinhand = document.getElementById("min-hand").style;
    var clockSechand = document.getElementById("sec-hand").style;

    changeColor.background = "var(--theme-2)";
    clockBody.color = "var(--clockFonts-1)";
    clockHourhand.background = "radial-gradient(seagreen,yellow)";
    clockMinhand.background = "radial-gradient(white,blue)";
    clockSechand.background = "radial-gradient(red,black)";
}

function theme_3(){
    var changeColor = document.getElementById("container").style;
    var clockBody = document.getElementById("clock-body").style;
    var clockHourhand = document.getElementById("hour-hand").style;
    var clockMinhand = document.getElementById("min-hand").style;
    var clockSechand = document.getElementById("sec-hand").style;

    changeColor.background = "var(--theme-3)";
    clockBody.color = "white";
    clockHourhand.background = "white";
    clockMinhand.background = "var(--minHand-1)";
    clockSechand.background = "pink";
}