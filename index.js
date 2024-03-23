


let randomNumber2 = Math.floor(Math.random() * 5) + 1;
let image2 = "./images/dice" + randomNumber2 + ".png";

let player2 = document
  .querySelector("#computer img")
  .setAttribute("src", image2);
console.log(player2);

let buttons = document.querySelectorAll("button[data-choice]");

for (let button of buttons) {
  button.addEventListener("click", function () {
    let choice = this.getAttribute("data-choice");
    let randomNumber1;
    switch (choice) {
      case "rock":
        randomNumber1 = 1;
        break;
      case "scissors":
        randomNumber1 = 2;
        break;
      case "paper":
        randomNumber1 = 3;
        break;
      case "lizard":
        randomNumber1 = 4;
        break;
      case "spock":
        randomNumber1 = 5;
        break;
      default:
        randomNumber1 = 1;
    }
    let image1 = "./images/dice" + randomNumber1 + ".png";
    document
  .querySelector("#player1 img")
  .setAttribute("src", image1);
  
    
  });
  
}

function runGame() {
  if (randomNumber1 === 1 && (randomNumber2 === 2 || randomNumber2 === 4)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (
    randomNumber1 === 2 &&
    (randomNumber2 === 3 || randomNumber2 === 4)
  ) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (
    randomNumber1 === 3 &&
    (randomNumber2 === 1 || randomNumber2 === 5)
  ) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (
    randomNumber1 === 4 &&
    (randomNumber2 === 5 || randomNumber2 === 3)
  ) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (
    randomNumber1 === 5 &&
    (randomNumber2 === 1 || randomNumber2 === 2)
  ) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Computer wins!";
  }
}
