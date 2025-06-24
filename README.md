# Rock Paper Scissors Game

A simple console-based Rock Paper Scissors game built with HTML and JavaScript.

## How to Play

1. Open the HTML file in your web browser
2. The game will prompt you to enter your choice 5 times
3. Type one of the following options when prompted:
   - "Rock"
   - "Paper" 
   - "Scissors"
4. The computer will randomly select its choice
5. After 5 rounds, the winner will be announced

## Game Rules

- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper
- Same choices result in a draw

## How to Run

1. Save the code as an HTML file (e.g., `rock-paper-scissors.html`)
2. Open the file in any web browser
3. Check the browser console to see the game results
4. Follow the prompts to play

## Game Flow

The game consists of 5 rounds where:
- You enter your choice via browser prompt
- Computer makes a random selection
- Round result is displayed in the console
- Final winner is announced after all rounds

## Technical Details

- Uses `Math.random()` for computer choice generation
- Choices are represented as numbers (0=Rock, 1=Paper, 2=Scissors)
- Game logic is encapsulated in closures to maintain score state
- Results are logged to the browser console
