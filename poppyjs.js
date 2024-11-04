let totalValue = "";

document.getElementById("subtract").onclick = function() {subtractFunc()};
document.getElementById("addition").onclick = function() {additionFunc()};
document.getElementById("multiply").onclick = function() {multiplyFunc()};
document.getElementById("division").onclick = function() {divisionFunc()};
document.getElementById("7").onclick = function() {sevenFunc()};
document.getElementById("8").onclick = function() {eightFunc()};
document.getElementById("9").onclick = function() {nineFunc()};
document.getElementById("4").onclick = function() {fourFunc()};
document.getElementById("5").onclick = function() {fiveFunc()};
document.getElementById("6").onclick = function() {sixFunc()};
document.getElementById("1").onclick = function() {oneFunc()};
document.getElementById("2").onclick = function() {twoFunc()};
document.getElementById("3").onclick = function() {threeFunc()};
document.getElementById("0").onclick = function() {zeroFunc()};

function subtractFunc() {
    if (totalValue == "") {
        totalValue = "";
    } else {
        totalValue = totalValue + "- ";
    document.getElementById("output").innerHTML = totalValue;
    }
}

function additionFunc() {
    if (totalValue == "") {
        totalValue = "";
    } else {
        totalValue = totalValue + "+ ";
    document.getElementById("output").innerHTML = totalValue;
    }
}

function multiplyFunc() {
    if (totalValue == "") {
        totalValue = "";
    } else {
        totalValue = totalValue + "* ";
    document.getElementById("output").innerHTML = totalValue;
    }
}

function divisionFunc() {
    if (totalValue == "") {
        totalValue = "";
    } else {
        totalValue = totalValue + "/ ";
    document.getElementById("output").innerHTML = totalValue;
    }
}

function sevenFunc() {
    totalValue = totalValue + "7 ";
    document.getElementById("output").innerHTML = totalValue;
}

function eightFunc() {
    totalValue = totalValue + "8 ";
    document.getElementById("output").innerHTML = totalValue;
}

function nineFunc() {
    totalValue = totalValue + "9 ";
    document.getElementById("output").innerHTML = totalValue;
}

function fourFunc() {
    totalValue = totalValue + "4 ";
    document.getElementById("output").innerHTML = totalValue;
}

function fiveFunc() {
    totalValue = totalValue + "5 ";
    document.getElementById("output").innerHTML = totalValue;
}

function sixFunc() {
    totalValue = totalValue + "6 ";
    document.getElementById("output").innerHTML = totalValue;
}

function oneFunc() {
    totalValue = totalValue + "1 ";
    document.getElementById("output").innerHTML = totalValue;
}

function twoFunc() {
    totalValue = totalValue + "2 ";
    document.getElementById("output").innerHTML = totalValue;
}

function threeFunc() {
    totalValue = totalValue + "3 ";
    document.getElementById("output").innerHTML = totalValue;
}

function zeroFunc() {
    totalValue = totalValue + "0 ";
    document.getElementById("output").innerHTML = totalValue;
}