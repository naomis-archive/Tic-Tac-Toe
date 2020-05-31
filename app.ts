const box1: HTMLElement | any = document.getElementById("1");
const box2: HTMLElement | any = document.getElementById("2");
const box3: HTMLElement | any = document.getElementById("3");
const box4: HTMLElement | any = document.getElementById("4");
const box5: HTMLElement | any = document.getElementById("5");
const box6: HTMLElement | any = document.getElementById("6");
const box7: HTMLElement | any = document.getElementById("7");
const box8: HTMLElement | any = document.getElementById("8");
const box9: HTMLElement | any = document.getElementById("9");

const x: string = "<img src='./x.png' />";
const o: string = "<img src='./o.png' />";

function gamestart(): any {
  const check: number = Math.floor(Math.random() * 2);
  if (check == 1) {
    alert("Computer goes first!");
    computerturn();
  } else {
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
function checkwinner(): boolean {
  if (
    box1.innerHTML == box2.innerHTML &&
    box2.innerHTML == box3.innerHTML &&
    box1.innerHTML != ""
  ) {
    return true;
  } else if (
    box4.innerHTML == box5.innerHTML &&
    box5.innerHTML == box6.innerHTML &&
    box4.innerHTML != ""
  ) {
    return true;
  } else if (
    box7.innerHTML == box8.innerHTML &&
    box8.innerHTML == box9.innerHTML &&
    box7.innerHTML != ""
  ) {
    return true;
  } else if (
    box1.innerHTML == box4.innerHTML &&
    box4.innerHTML == box7.innerHTML &&
    box1.innerHTML != ""
  ) {
    return true;
  } else if (
    box2.innerHTML == box5.innerHTML &&
    box5.innerHTML == box8.innerHTML &&
    box2.innerHTML != ""
  ) {
    return true;
  } else if (
    box3.innerHTML == box6.innerHTML &&
    box6.innerHTML == box9.innerHTML &&
    box3.innerHTML != ""
  ) {
    return true;
  } else if (
    box1.innerHTML == box5.innerHTML &&
    box5.innerHTML == box9.innerHTML &&
    box1.innerHTML != ""
  ) {
    return true;
  } else if (
    box3.innerHTML == box5.innerHTML &&
    box5.innerHTML == box7.innerHTML &&
    box3.innerHTML != ""
  ) {
    return true;
  } else {
    return false;
  }
}

function checktie(): boolean {
  if (
    box1.innerHTML != "" &&
    box2.innerHTML != "" &&
    box3.innerHTML != "" &&
    box4.innerHTML != "" &&
    box5.innerHTML != "" &&
    box6.innerHTML != "" &&
    box7.innerHTML != "" &&
    box8.innerHTML != "" &&
    box9.innerHTML != ""
  ) {
    return true;
  } else {
    return false;
  }
}

function playerturn(box: string) {
  const clicked: HTMLElement | any = document.getElementById(box);
  if (clicked.innerHTML != "") {
    return alert("You can't fill that square. Choose an empty one.");
  }
  clicked.innerHTML = x;
  if (checkwinner() == true) {
    alert("You win!");
  } else if (checktie() == true) {
    alert("It's a tie!");
  } else {
    computerturn();
  }
}

function computerturn() {
  const num: number = Math.floor(Math.random() * 8) + 1;
  const place: string = num.toString();
  console.log(place);
  const box: HTMLElement | any = document.getElementById(place);
  if (box.innerHTML != "") {
    return computerturn();
  }
  box.innerHTML = o;
  if (checkwinner() == true) {
    alert("You lose...");
  }
  if (checktie() == true) {
    alert("It's a tie!");
  }
}
