"use strict";
var box1 = document.getElementById("1");
var box2 = document.getElementById("2");
var box3 = document.getElementById("3");
var box4 = document.getElementById("4");
var box5 = document.getElementById("5");
var box6 = document.getElementById("6");
var box7 = document.getElementById("7");
var box8 = document.getElementById("8");
var box9 = document.getElementById("9");
var x = "<img src='./x.png' />";
var o = "<img src='./o.png' />";
function gamestart() {
    var check = Math.floor(Math.random() * 2);
    if (check == 1) {
        alert("Computer goes first!");
        computerturn();
    }
    else {
        alert("You go first!");
    }
}
function reset() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
}
function checkwinner() {
    if (box1.innerHTML == box2.innerHTML &&
        box2.innerHTML == box3.innerHTML &&
        box1.innerHTML != "") {
        return true;
    }
    else if (box4.innerHTML == box5.innerHTML &&
        box5.innerHTML == box6.innerHTML &&
        box4.innerHTML != "") {
        return true;
    }
    else if (box7.innerHTML == box8.innerHTML &&
        box8.innerHTML == box9.innerHTML &&
        box7.innerHTML != "") {
        return true;
    }
    else if (box1.innerHTML == box4.innerHTML &&
        box4.innerHTML == box7.innerHTML &&
        box1.innerHTML != "") {
        return true;
    }
    else if (box2.innerHTML == box5.innerHTML &&
        box5.innerHTML == box8.innerHTML &&
        box2.innerHTML != "") {
        return true;
    }
    else if (box3.innerHTML == box6.innerHTML &&
        box6.innerHTML == box9.innerHTML &&
        box3.innerHTML != "") {
        return true;
    }
    else if (box1.innerHTML == box5.innerHTML &&
        box5.innerHTML == box9.innerHTML &&
        box1.innerHTML != "") {
        return true;
    }
    else if (box3.innerHTML == box5.innerHTML &&
        box5.innerHTML == box7.innerHTML &&
        box3.innerHTML != "") {
        return true;
    }
    else {
        return false;
    }
}
function playerturn(box) {
    var clicked = document.getElementById(box);
    if (clicked.innerHTML != "") {
        return alert("You can't fill that square. Choose an empty one.");
    }
    clicked.innerHTML = x;
    if (checkwinner() == true) {
        alert("You win!");
    }
    else {
        computerturn();
    }
}
function computerturn() {
    var num = Math.floor(Math.random() * 8) + 1;
    var place = num.toString();
    console.log(place);
    var box = document.getElementById(place);
    if (box.innerHTML != "") {
        return computerturn();
    }
    box.innerHTML = o;
    if (checkwinner() == true) {
        alert("You lose...");
    }
}
