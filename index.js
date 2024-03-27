let computerChoice = 0;
let playerChoice = 0;

function resetComputer() {
    computerChoice = 0;
    displayChoice('computer');
}

function displayChoice(actor) {
    if (actor === 'player') {
        let image1 = './images/dice' + playerChoice + '.png';
        document
            .querySelector('#' + actor + ' img')
            .setAttribute('src', image1);
    } else {
        const image2 = './images/dice' + computerChoice + '.png';
        document
            .querySelector('#' + actor + ' img')
            .setAttribute('src', image2);
    }
}
// let image1 = './images/dice' + number + '.png';
// document.querySelector('#player img').setAttribute('src', image1);

function choiceSign() {
    let choice = this.getAttribute('data-choice');

    switch (choice) {
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
        default:
            playerChoice = 0;
    }
    displayChoice('player');
    resetComputer();
}

function runGame() {
    if (playerChoice === 1 && (computerChoice === 2 || computerChoice === 4)) {
        document.querySelector('h1').innerHTML = '🚩 Player wins!';
        incrementScore();
    } else if (
        playerChoice === 2 &&
        (computerChoice === 3 || computerChoice === 4)
    ) {
        document.querySelector('h1').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 3 &&
        (computerChoice === 1 || computerChoice === 5)
    ) {
        document.querySelector('h1').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 4 &&
        (computerChoice === 5 || computerChoice === 3)
    ) {
        document.querySelector('h1').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (
        playerChoice === 5 &&
        (computerChoice === 1 || computerChoice === 2)
    ) {
        document.querySelector('h1').innerHTML = '🚩 Player Wins!';
        incrementScore();
    } else if (playerChoice === computerChoice) {
        document.querySelector('h1').innerHTML = 'Draw!';
    } else {
        document.querySelector('h1').innerHTML = 'Computer Wins! 🚩';
        incrementLost();
    }
}

function generateChoiceComputer() {
    computerChoice = Math.floor(Math.random() * 5) + 1;
    displayChoice('computer');
}

function submitChoice() {
    generateChoiceComputer();
    runGame();
}

document.addEventListener('DOMContentLoaded', function () {
    resetComputer();
    let buttons = document.querySelectorAll('button[data-choice]');
    for (let button of buttons) {
        button.addEventListener('click', choiceSign);
    }

    document
        .querySelector('#gameForm')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            submitChoice();
        });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitChoice();
    }
});
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
    if (oldScore === 3) {
        document.querySelector('h1').innerHTML = 'You win!';
        alert('Hey! You got it!Congratualtions!');
        resetScore();
    }
}
function incrementLost() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
    if (oldScore === 3) {
        document.querySelector('h1').innerHTML = 'Game Over!';
        alert(
            'Awwww.... you lost three times!Sorry It is the end of the game!'
        );
        resetScore();
    }
}

function resetScore() {
    document.getElementById('score').innerText = 0;
    document.getElementById('incorrect').innerText = 0;
}
