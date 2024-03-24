let randomNumber2 = 0;
let image2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector("#computer img").setAttribute("src", image2);

let number;

function choiceSign() {
  let buttons = document.querySelectorAll("button[data-choice]");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      let choice = this.getAttribute("data-choice");
      let number;
      switch (choice) {
        case "rock":
          number = 1;
          break;
        case "scissors":
          number = 2;
          break;
        case "paper":
          number = 3;
          break;
        case "lizard":
          number = 4;
          break;
        case "spock":
          number = 5;
          break;
        default:
          number = 0;
      }
      let image1 = "./images/dice" + number + ".png";
      document.querySelector("#player1 img").setAttribute("src", image1);
    });
  }
}

function runGame() {
  if (number === 1 && (randomNumber2 === 2 || randomNumber2 === 4)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (number === 2 && (randomNumber2 === 3 || randomNumber2 === 4)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (number === 3 && (randomNumber2 === 1 || randomNumber2 === 5)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (number === 4 && (randomNumber2 === 5 || randomNumber2 === 3)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (number === 5 && (randomNumber2 === 1 || randomNumber2 === 2)) {
    document.querySelector("h1").innerHTML = "Player1 wins!";
  } else if (number === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Computer wins!";
  }
}

function generateChoiceComputer() {
  let randomNumber2 = Math.floor(Math.random() * 5) + 1;
  let image2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector("#computer img").setAttribute("src", image2);
}

function submitChoice() {
  let Submission = document.querySelector(".button-submit button");
  Submission.addEventListener("click", function () {
    generateChoiceComputer();
    runGame();
  });
}
choiceSign();
submitChoice();

// function incrementScore(){

// }
