# General Assembly Project 1:  Connect 4 (Front-end game in Vanilla JavaScript)

## Overview

Connect 4 grid-based game using Vanilla JavaScript. 

## Timeframe

7 days

## Technologies Used

* JavaScript 
* HTML5 with HTML5 audio
* CSS
* Git + GitHub 

## Play a deployed version

* https://crigrande.github.io/sei-project-1/

## Installation

* Clone or download the repo
* Open the index file in your browser

## Game Overview

<img src="http://res.cloudinary.com/dbc3fejob/image/upload/v1628678773/Readme%20project%201/screencapture-crigrande-github-io-sei-project-1-2021-08-04-17_57_36_pf5xm1.png">

## Brief

* To create a functioning browser-based game using Vanilla JavaScript, HTML, and CSS. I chose Connect 4 because it is a game that I really like and I wanted to challenge myself, in fact, one of the most difficult aspects of this game is the win condition, since to determine if the player won the entire grid needs to be checked. 

## Approach

The first step was spending some time designing the game and so I created the grid and added the disc in order to test the move.

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1630496169/Readme%20project%201/Screenshot_2021-09-01_at_12.13.33_tbdnja.png">

I then have to find a way to send the disc in the last available space of the selected column. In order to do this, I assigned a value to each cell and an array for each column. Hence after clicking on the cell it was possible to check its position in the array and using the math method getting the biggest value available which corresponds to the latest cell available in the column.

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1630508300/Readme%20project%201/Screenshot_2021-09-01_at_15.57.03_fc2opn.png">

The second part was focused on verifying the win condition, styling and adding some extra features like the audio for each movement or the alert message to state the winner.

<img src="http://res.cloudinary.com/dbc3fejob/image/upload/v1630511072/Readme%20project%201/Screenshot_2021-09-01_at_16.40.38_jxowzz.png">

<img src="https://res.cloudinary.com/dbc3fejob/image/upload/v1630510893/Readme%20project%201/Screenshot_2021-09-01_at_16.40.07_mdwybe.png">

**Controls**

* Using the cursor, click to select the column where you want to insert the disc.

**Play mode**

* Single-player mode with the computer making moves.
* The disc will always occupy the lowest available space in the grid.
* The first player making 4 discs with the same color in a row wins.
* The 4 discs can be horizontal, vertical, or diagonal.

## Challenges

* The win condition, as the entire grid needs to be checked after each move in order to verify if the choice made was a winning move.
* Occupy the last cell available on the selected column.

## Wins

* Verify the win condition on the whole grid.
* Restart the page after verifying the winning move.
* Make the disc occupy the last available space beside which cell was selected in the column.

## Key Learnings/Takeaway

This was my first project using Javascript, HTML, and CSS. I really enjoyed building the logic behind the game and I am looking forward to using these technologies in new projects. Also, I had the opportunity to apply what I have learned about flex, becoming more confident using pure CSS to styling.

## Bugs
* After verifying the win condition for the “computer player” the alert showed up only after clicking on the grid.
* The styling needs to be improved and make it fully responsive.

## Future features

* Button to restart the game.
* Adding additional sounds based on winning or losing the game.
* Fix the bug.
