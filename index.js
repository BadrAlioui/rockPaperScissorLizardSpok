let playerChoice = 0;
let computerChoice;

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 5) + 1;
    document
        .querySelector('#computer img')
        .setAttribute('src', './images/dice' + computerChoice + '.png');
}

function choiceSign() {

    let buttons = document.querySelectorAll('button[data-choice]');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            switch (button.getAttribute('data-choice')) {
                case 'rock':
                    playerChoice = 1;
                    break;
                case 'scissors':
                    playerChoice = 2;
                    break;
                case 'paper':
                    playerChoice = 3;
                    break;
                case 'lizard':
                    playerChoice = 4;
                    break;
                case 'spock':
                    playerChoice = 5;
                    break;
            }
            let image1 = './images/dice' + playerChoice + '.png';
            let imagePlayer = document.querySelector('#player img');
            imagePlayer.setAttribute('src', image1);
            computerPlay();
            runGame();
        });
    }
}

function runGame() {
    if (playerChoice === 1 && (computerChoice === 2 || computerChoice === 4)) {
        document.querySelector('main #result').innerHTML = '🚩 Player wins!';
        incrementScore();
    } else if (
        playerChoice === 2 &&
        (computerChoice === 3 || computerChoice === 4)
    ) {
        document.querySelector('main #result').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 3 &&
        (computerChoice === 1 || computerChoice === 5)
    ) {
        document.querySelector('main #result').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 4 &&
        (computerChoice === 5 || computerChoice === 3)
    ) {
        document.querySelector('main #result').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 5 &&
        (computerChoice === 1 || computerChoice === 2)
    ) {
        document.querySelector('main #result').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (playerChoice === computerChoice) {
        document.querySelector('main #result').innerHTML = 'Draw!';
    } else {
        document.querySelector('main #result').innerHTML =
            'Computer Wins! 🚩';
        incrementLost();
    }

    if (oldLost > oldScore) {
        document.querySelector("#time-up").innerHTML = "Time is up, Computer won!";
    } else if (oldLost < oldScore) {
        document.querySelector("#time-up").innerHTML = "Time is up, You won!";
    } else {
        document.querySelector("#time-up").innerHTML = "Time is up, it's a Draw!";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document

        .querySelector('#player img')
        .setAttribute('src', './images/dice0' + '.png');
    document

        .querySelector('#computer img')
        .setAttribute('src', './images/dice0' + '.png');

    document.querySelector(".game-area").style.display = "none";
    document.querySelector('#play').addEventListener('click', start);
    enableBtn();
    choiceSign();
});

let oldScore;
let oldLost;
function incrementScore() {
    oldScore = parseInt(document.querySelector('#score').innerHTML);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementLost() {
    oldLost = parseInt(document.querySelector('#incorrect').innerHTML);
    document.getElementById('incorrect').innerText = ++oldLost;
}

// Stack overflow
function startTimer(duration, display) {
    var timer = duration,
        minutes,
        seconds;
    let interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            var span = document.getElementsByClassName("close")[0];
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            disableBtn();
            span.onclick = function () {
                modal.style.display = "none";

                resetGame();


            }


        }
    }, 1000);
}

let isPlaying = false;


function start() {
    document.querySelector(".game-area").style.display = "block";
    document.querySelector("header h1").style.display = "none";
    document.querySelector("header #start").style.display = "none";
    if (isPlaying) {
        return;
    }
    isPlaying = true;
    var oneSecond = 5;
    display = document.querySelector('#span-time');
    startTimer(oneSecond, display);
}

function resetGame() {
    let playerChoice = 0;
    let computerChoice = 0;
    let image1 = "./images/dice" + playerChoice + ".png";
    let imagePlayer = document.querySelector("#player img");
    imagePlayer.setAttribute("src", image1);
    document
        .querySelector("#computer img")
        .setAttribute("src", "./images/dice" + computerChoice + ".png");

    document.querySelector(".game-area").style.display = "none";
    document.querySelector("header h1").style.display = "block";
    document.querySelector("header #start").style.display = "block";
    document.querySelector("#score").innerHTML = 0;
    document.querySelector("#incorrect").innerHTML = 0;
    document.querySelector("#result").textContent = "";
    document.querySelector("#span-time").textContent = "00:05";
    enableBtn();

    isPlaying = false;





}

function disableBtn() {
    let buttons = document.querySelectorAll(".btn");
    for (let button of buttons) {
        button.disabled = true;
    }
}

function enableBtn() {
    let buttons = document.querySelectorAll(".btn");
    for (let button of buttons) {
        button.disabled = false;
    } }