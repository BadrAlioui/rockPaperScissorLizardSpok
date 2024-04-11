# Game: Rock, Paper, Scissors, Lizard, Spock

![Game Interface](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/b22bfaf6-5cad-4526-85e5-24308610bd17)

### [Live Site](https://badraliouui.github.io/rockPaperScissorLizardSpok/)

## Contents

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

A web-based version of "Rock, Paper, Scissors, Lizard, Spock" introduces two additional choices to the traditional game. This enhancement increases the strategy and fun, allowing players to compete against the computer and test their decision-making skills in this updated classic.

## Design of the Website

### Fonts and Colours

The website employs "Lobster" for headings and "Indie Flower" for body text, creating a playful yet engaging aesthetic. The background color is #240A34, with text and other elements in colors like #EABE6C and #FFEDD8 to grab attention.

![Colour Scheme](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/fec7bba4-c63c-4187-a332-8b047a9fb3b5)

Distinctive, appealing game icons and instructions image enhance the game's visual appeal and user experience.

- ![Paper Icon](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/fc81ad50-8a96-4632-9f9d-a3f572c782fb)
- ![Rock Icon](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/5f8694a6-786e-42ba-8e4f-cd242f2a3151)
- ![Scissors Icon](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/52db58bc-fa22-4368-85c9-8f74c274d919)
- ![Lizard Icon](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/d46fcdb9-90fd-4c8a-a54c-b264f7194b12)
- ![Spock Icon](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/fadb0cd7-2b2b-4528-9131-9693ebf6b099)
- ![Instructions Image](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/assets/96729182/194d0e3c-33d4-49dc-a855-461e70889a81)

## Game Flow

The game logic and user interaction are designed to provide an intuitive and engaging experience, from the initial choice to the final outcome.

## Technologies Used

### Languages

- **HTML5**
- **CSS3**
- **JavaScript**

### Frameworks, Libraries & Programs Used

- Google Fonts for "Lobster" and "Indie Flower"
- Git for version control
- GitHub Pages for deployment

## Testing

### Validation

HTML and CSS files have been validated without significant issues.

#### HTML Validation

![HTML Validation](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/documentation/validatorHtml.PNG)

#### CSS Validation

![CSS Validation](https://github.com/BadrAlioui/rockPaperScissorLizardSpok/documentation/validatorCSS.PNG)

### Browser Compatibility

Confirmed consistent and error-free user experience across Chrome, Firefox, and Edge.

### Responsiveness

Full responsiveness confirmed across devices of various sizes.

### Manual Testing

| Test Case                                 | Expected Outcome                                                  | Result |
|-------------------------------------------|-------------------------------------------------------------------|--------|
| Click on the "Play!" button               | The game area becomes visible, and the countdown starts.          | Pass   |
| Select a game choice (rock, paper, etc.)  | Player's choice is displayed; the computer makes a random choice; the game outcome is calculated. | Pass   |
| Game timer runs out                       | A modal appears indicating the game's outcome based on the scores and allows the game to be restarted. | Pass   |
| Restart the game after the game ends      | The game resets to the initial state with scores cleared, ready for a new session. | Pass   |

### Functional Testing

Functional testing verified the game logic for determining wins, losses, and draws according to the rules of "Rock, Paper, Scissors, Lizard, Spock":

| Player's Choice | Computer's Choice       | Expected Outcome | Result |
|-----------------|-------------------------|------------------|--------|
| Rock            | Scissors, Lizard        | Player Wins      | Pass   |
| Paper           | Rock, Spock             | Player Wins      | Pass   |
| Scissors        | Paper, Lizard           | Player Wins      | Pass   |
| Lizard          | Spock, Paper            | Player Wins      | Pass   |
| Spock           | Scissors, Rock          | Player Wins      | Pass   |
| Any             | Same as Player's Choice | Draw             | Pass   |
| Any             | Not covered by rules    | Computer Wins    | Pass   |

### Bugs & Fixes

During development and testing, a few issues were encountered and resolved:

1. **Issue:** Choice buttons remained active after game completion, allowing additional selections.
   - **Fix:** Deactivated choice buttons after the game ends until it is restarted.

2. **Issue:** Game did not properly reset scores and UI elements for a new game session.
   - **Fix:** Implemented a `resetGame()` function that properly resets all relevant game state and UI elements.

3. **Issue:** Timer continued running into negative numbers if not stopped manually.
   - **Fix:** Ensured the timer stops at 0 and triggers the end-of-game logic automatically.

## Deployment

The game is hosted on GitHub Pages. To deploy your own version:
1. Upload all necessary files to your GitHub repository.
2. Go to the repository's settings, navigate to the "Pages" section.
3. In the "Source" dropdown, select the main branch containing your project files.

The game is hosted on GitHub Pages. You can access the live site via the following link:https://badralioui.github.io/rockPaperScissorLizardSpok/

Your site should now be live on GitHub Pages!

## Credits

All game design elements, including icons and gameplay logic, were created by the author, providing a unique and engaging user experience.

## Acknowledgements
- My Mentor Rahul for his ongoing support and feedback
- The Code Institute's Tutor Support
