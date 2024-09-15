# Project: Battleship

In this project, I implement the classic game "Battleship" using Javascript and HTML/CSS. This project was inspired by The Odin Project open-source course (https://www.theodinproject.com/lessons/node-path-javascript-battleship).

An explanation of Battleship, in which I used to implement the game flow logic, can be found here: https://en.wikipedia.org/wiki/Battleship_(game)

## Project Description

This project allows the user to play a game of Battleship with the computer. The game continues until one player's ships have all sunk, in which case the user is asked whether to replay the game.

The most central aim of this project was to implement object-oriented programming to facilitate the game and to create a more complex UI via CSS properties, in particular, CSS animation-transition properties.
Another important goal was to practice Test Driven Development. As of now (09/15/2024), I used Jest to test for the setName module.

## How to play

1. The user will be prompted to enter a name.
   ![Set-name Page Screenshot](./src/assets/name-input-page.png)

2. Then, the user will be able to place ships on the board either horizontally or vertically.
   ![Set-name Page Screenshot](./src/assets/set-ship-page.png)

3. Finally, the game begins, with the user and the cpu taking turns to attack each other.
   ![Set-name Page Screenshot](./src/assets/game-play-page.png)

## credits

### fonts

- Logo font: Rubik Pixel
  https://fonts.google.com/share?selection.family=Rubik+Pixels
- Body font: Handjet
  https://fonts.google.com/share?selection.family=Handjet:wght@100..900

### assets: svgs, battleship illustration

- submarine art, found on the 'set name' page:
  https://www.freepik.com/free-vector/hand-drawn-retro-submarine_2783078.htm#fromView=search&page=1&position=28&uuid=2cf158bf-c18e-47f1-b34b-284020cfa226

- ship icons:
  https://www.freepik.com/icon/cruiser_11434227#fromView=families&page=1&position=0&uuid=5555eca2-7ee1-4986-a03f-9119eeb7bf90

## Bug fix plans

- the svg formatting on the board is not as ideal; some of them cross the grid.
- currently (9/15/24), the computer is only capable of making random attacks, but I plan to make the attack logic more sophisticated, letting it attack consecutive cells from if it had made a successful attack to a user's ship..
