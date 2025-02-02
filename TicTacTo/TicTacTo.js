let xTurn = true;

function changeMark(buttonId) {
let currentMark = document.getElementById(buttonId).innerHTML;

if (!currentMark){
 if (xTurn) {
    document.getElementById(buttonId).innerHTML = "X";
    document.getElementById(buttonId).style.color = "#fa2505";
    document.getElementById(buttonId).style.fontSize = "24px";
    document.getElementById(buttonId).style.fontWeight = "bold";
// TODO: Set X color
} else {
document.getElementById(buttonId).innerHTML = "O";
document.getElementById(buttonId).style.color = "#fa05db";
document.getElementById(buttonId).style.fontSize = "24px";
document.getElementById(buttonId).style.fontWeight = "bold";
// TODO: Set O color
}
xTurn = !xTurn;
 checkWin();
  }
}

function resetGame() {

document.getElementById("a1").innerHTML = "";
document.getElementById("b1").innerHTML = "";
document.getElementById("c1").innerHTML = "";

document.getElementById("a2").innerHTML = "";
document.getElementById("b2").innerHTML = "";
document.getElementById("c2").innerHTML = "";

document.getElementById("a3").innerHTML = "";
document.getElementById("b3").innerHTML = "";
document.getElementById("c3").innerHTML = "";

document.getElementById("winnerStatement").innerHTML= "";

// TODO: Clear the remaining buttons
}

function checkWin() {

let a1 = document.getElementById("a1").innerHTML;
let b1 = document.getElementById("b1").innerHTML;
let c1 = document.getElementById("c1").innerHTML;
// TODO: Retrieve the marks from the remaining buttons
let a2 = document.getElementById("a2").innerHTML;
let b2 = document.getElementById("b2").innerHTML;
let c2 = document.getElementById("c2").innerHTML;

let a3= document.getElementById("a3").innerHTML;
let b3 = document.getElementById("b3").innerHTML;
let c3 = document.getElementById("c3").innerHTML;

if ((a1 == b1 && b1 == c1 && a1 == "X")
    || (a2 == b2 && b2 == c2 &&  a2 == "X")
    || (a3 == b3 && b3 == c3 &&  a3 == "X")
    || (a1 == a2 && a2 == a3 &&  a1 == "X")
    || (b1 == b2 && b2 == b3 &&  b1 == "X")
    || (c1 == c2 && c2 == c3 &&  c1 == "X")
    || (a1 == b2 && b2 == c3 &&  a1 == "X")
    || (c1 == b2 && b2 == a3 &&  c1 == "X")) {
        document.getElementById("winnerStatement").innerHTML= "X wins!!";
        }
if ((a1 == b1 && b1 == c1 && a1 == "O")
    || (a2 == b2 && b2 == c2 &&  a2 == "O")
    || (a3 == b3 && b3 == c3 &&  a3 == "O")
    || (a1 == a2 && a2 == a3 &&  a1 == "O")
    || (b1 == b2 && b2 == b3 &&  b1 == "O")
    || (c1 == c2 && c2 == c3 &&  c1 == "O")
    || (a1 == b2 && b2 == c3 &&  a1 == "O")
    || (c1 == b2 && b2 == a3 &&  c1 == "O")) {
    document.getElementById("winnerStatement").innerHTML = "O wins!!";
    }
}

// TODO: Inform the player that X wins on the page }

// TODO: Complete the logic for the remaining win possibilities }
// a1 b1 c1 a2 b2 c2 a3 b3 c3

// © Copyright 2015-2025 Lance P. Rhodes, Ph.D. All rights reserved.

// LAB: HUMAN-PLAY