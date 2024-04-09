# Game: Rock, Paper, Scissors, Lizard, Spock

<img width="946" alt="Capture" src="https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/b22bfaf6-5cad-4526-85e5-24308610bd17">


### [Live Site](https://badraliouui.github.io/rockPaperScissorLizardSpok/)

## Contents:

- [Introduction](#introduction)
- [Design of the Website](#design)
    - [Fonts and Colours](#fonts)
- [Game Flow](#flow)
- [Technologies Used](#technologies)
    - [Languages](#languages)
    - [Frameworks, Libraries & Programs Used](#frameworks)
- [Testing](#testing)
    - [Validation](#validation)
    - [Browser Compatibility](#browser)
    - [Responsiveness](#responsiveness)
    - [Manual Testing](#manual_testing)
    - [Functional Testing](#functional_testing)
    - [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)       

## Introduction

A web-based version of "Rock, Paper, Scissors, Lizard, Spock" adds a twist to the traditional game by including two more choices, increasing the strategy and fun. Play against the computer and test your decision-making skills in this enhanced game.

## Design of the Website

### Fonts and Colours

The website uses **Roboto** for its clean and modern feel. A contrast color scheme has been chosen to enhance readability and user engagement.

![Colour palette](documentation/color_palette.png)

Adobe Illustrator was used to design distinctive and appealing game icons.

![Mockup](documentation/mockup.png)

### Game Flow

The game logic and user interaction were carefully planned to provide an intuitive and engaging experience.

![Flowchart](documentation/flowchart.png)

## Technologies Used

### Languages

- HTML5
- CSS3
- JavaScript

### Frameworks, Libraries & Programs Used

Google Fonts for typography, Git for version control, and GitHub Pages for deployment.

## Testing

### Validation

The HTML, CSS, and JavaScript files have been validated with no significant issues found.

### Browser Compatibility

Tested across multiple browsers including Chrome, Firefox, and Edge for compatibility.

### Responsiveness

Ensured the game is fully responsive across devices of various sizes, providing a great user experience on mobiles, tablets, and desktops.

### Manual Testing

Manual testing confirmed the game's mechanics, UI elements, and outcomes work as intended.

### Functional Testing

Each possible game outcome was tested to ensure the correct results are displayed to the user.

### Bugs & Hiccups

Alright, let’s talk about some of the bumps on the road I hit while making this game. It wasn’t all smooth sailing, and here’s a bit of the behind-the-scenes on the challenges and how I tackled them:

1. **Unresponsive Buttons**: Ever had that moment when you press something and nothing happens? Yep, that was happening here after finishing a round. The game buttons just decided to take a nap.

   - **Fix**: I had to dive back in and make sure those buttons knew their job, attaching those click events back every time the game refreshed. Wake-up call delivered!

2. **Wonky Layout After Reset**: Imagine setting everything up neatly and then, poof, it looks like a mess when you try to start over. The game area was throwing a tantrum and not staying put.

   - **Fix**: I played around with the CSS and made sure JavaScript was strict about keeping everything in line, especially when hitting that reset button. No more layout tantrums.

3. **Scoreboard Getting Creative**: Scores should go up when you win, right? Well, mine had other ideas and liked to keep the suspense by not updating correctly.

   - **Fix**: Had to have a serious chat with the score logic, ensuring it knew simple math and could keep up with who's winning and who's not. Problem solved.

4. **Shy Modal on Game End**: You know, the pop-up that’s supposed to tell you all about your victory or, ahem, the other outcome... It was playing hide and seek on smaller screens.

   - **Fix**: Gave the modal a makeover with some CSS tweaks and a bit of JavaScript magic so it could shine on all screens, shy no more!

5. **Old Browser Blues**: Turns out, not all web browsers wanted to play my game right, especially the older ones with a grudge against modern layout styles and JavaScript.

   - **Fix**: I had to go old school, bringing in some polyfills for the new JavaScript stuff and giving CSS some fallback options. Everyone’s invited to the party now.

6. **Sticky Past Game States**: Imagine moving on to a new game, but your past keeps haunting you... That was happening here, old game states creeping into new games.

   - **Fix**: Rolled up my sleeves and made sure that when we say reset, we mean it. Everything gets a fresh start now, no ghosts allowed.

Going through these issues was like a rollercoaster, but hey, it made the game better and taught me a ton. Every bug squashed was a little victory dance moment. Hope you enjoy playing it as much as I enjoyed making it (and fixing it)!

## Deployment

The project is deployed on GitHub Pages, allowing easy access for players to try the game online.

## Credits

All game design elements were created by the author, providing a unique look and feel to the game.

## Acknowledgements

Gratitude to the open-source community for resources and tutorials which have been invaluable for this project.
