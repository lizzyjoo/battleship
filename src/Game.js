import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";
import { Ship } from "./Ship.js";

export class Game {
  constructor() {
    this.playerOneBoard = new Gameboard(10);
    this.playerTwoBoard = new Gameboard(10);

    // Create ships for player one
    this.playerOneShips = {
      carrier: new Ship("carrier", 5, "x"),
      battleship: new Ship("battleship", 4, "x"),
      destroyer: new Ship("destroyer", 3, "x"),
      submarine: new Ship("submarine", 3, "x"),
      patrolBoat: new Ship("patrolBoat", 2, "x"),
    };

    // Create ships for player two
    this.playerTwoShips = {
      carrier: new Ship("carrier", 5, "y"),
      battleship: new Ship("battleship", 4, "x"),
      destroyer: new Ship("destroyer", 3, "x"),
      submarine: new Ship("submarine", 3, "x"),
      patrolBoat: new Ship("patrolBoat", 2, "x"),
    };

    // Create players
    this.playerOne = new Player(
      "person",
      this.playerOneBoard,
      this.playerOneShips
    );
    this.playerTwo = new Player(
      "computer",
      this.playerTwoBoard,
      this.playerTwoShips
    );

    // Predetermined placement for player one
    this.predetermined(this.playerOneBoard, this.playerOneShips, {
      carrier: [0, 0], // Place carrier horizontally starting at (0, 0)
      battleship: [1, 0], // Place battleship horizontally starting at (1, 0)
      destroyer: [2, 0], // Place destroyer horizontally starting at (2, 0)
      submarine: [3, 0], // Place submarine horizontally starting at (3, 0)
      patrolBoat: [4, 0], // Place patrolBoat horizontally starting at (4, 0)
    });

    // Predetermined placement for player two
    this.predetermined(this.playerTwoBoard, this.playerTwoShips, {
      carrier: [0, 8], // Place carrier horizontally starting at (0, 0)
      battleship: [1, 0], // Place battleship horizontally starting at (1, 0)
      destroyer: [2, 0], // Place destroyer horizontally starting at (2, 0)
      submarine: [3, 0], // Place submarine horizontally starting at (3, 0)
      patrolBoat: [4, 0], // Place patrolBoat horizontally starting at (4, 0)
    });

    // game's turn: whether it is the user's turn or not. true = user's turn ; false: cpu's turn
    this.userTurn = true;
  }

  getBoard(elemID) {
    if (elemID === "player-one-board") {
      return this.playerOneBoard;
    } else if (elemID === "player-two-board") {
      return this.playerTwoBoard;
    }
  }
  // Method for predetermined placement of ships
  predetermined(board, ships, placements) {
    // Iterate over each ship and its coordinates
    for (const [shipName, [x, y]] of Object.entries(placements)) {
      const ship = ships[shipName];
      if (ship) {
        board.placeShip(ship, x, y, ship.orientation === "y"); // false indicates horizontal placement
      }
    }
  }

  // update game turn; toggle true-false
  updateTurn() {
    this.userTurn = !this.userTurn;
  }

  checkAllShipsSunk(player) {
    if (!player.ships || !Array.isArray(player.ships)) {
      console.error("Player's ships are not properly initialized.");
      return false;
    }
    return player.ships.every((ship) => ship.isSunk());
  }

  // Static method to initialize the game
  static initialize() {
    return new Game();
  }
}
