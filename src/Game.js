import { Gameboard } from "./Gameboard.js";
import { Player } from "./Player.js";
import { Ship } from "./Ship.js";

export class Game {
  constructor(ships, userName) {
    this.userName = userName;
    this.ships = ships;
    this.playerOneBoard = new Gameboard(10);
    this.playerTwoBoard = new Gameboard(10);

    // Create ships for player one based on imported `ships` object
    this.playerOneShips = {};
    for (const name in this.ships) {
      if (this.ships.hasOwnProperty(name)) {
        const shipData = this.ships[name];
        this.playerOneShips[name] = new Ship(
          shipData.name,
          shipData.length,
          shipData.orientation,
          false,
          shipData.start
        );
      }
    }

    // Create ships for player two: random for computer
    this.playerTwoShips = {
      carrier: new Ship("carrier", 5),
      battleship: new Ship("battleship", 4),
      destroyer: new Ship("destroyer", 3),
      submarine: new Ship("submarine", 3),
      patrolBoat: new Ship("patrolBoat", 2),
    };

    for (const key in this.playerTwoShips) {
      if (this.playerTwoShips.hasOwnProperty(key)) {
        const ship = this.playerTwoShips[key];
        const { x, y, compOrientation } =
          this.getRandomCoordinatesAndOrientation(
            this.playerTwoBoard.size,
            ship.length
          );
        ship.orientation = compOrientation;
        ship.sunk = false;
        ship.start = [x, y];
      }
    }

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

    // Use the updated ship positions for player one
    this.loadShipsForPlacement(this.playerOneBoard, this.playerOneShips);

    // Randomized placement for player two
    this.loadShipsForPlacement(this.playerTwoBoard, this.playerTwoShips);
  }

  getBoard(elemID) {
    if (elemID === "player-one-board") {
      return this.playerOneBoard;
    } else if (elemID === "player-two-board") {
      return this.playerTwoBoard;
    }
  }

  // prepare ship for placement on board
  loadShipsForPlacement(board, ships) {
    for (const shipName in ships) {
      const ship = ships[shipName];
      if (ship && ship.start) {
        const [x, y] = ship.start;
        board.placeShip(ship, x, y, ship.orientation === "Y");
      }
    }
  }

  checkAllShipsSunk(player) {
    if (!player.ships || typeof player.ships !== "object") {
      console.error("Player's ships are not properly initialized.");
      return false;
    }

    const shipsArray = Object.values(player.ships);
    return shipsArray.every((ship) => ship.isSunk());
  }
  getRandomCoordinatesAndOrientation(boardSize, shipLength) {
    let isValid = false;
    let x, y, compOrientation;

    while (!isValid) {
      const arr = ["X", "Y"];
      const randomIndex = Math.floor(Math.random() * arr.length);
      compOrientation = arr[randomIndex];

      // Generate random coordinates within the grid
      const maxX =
        compOrientation === "X" ? boardSize - 1 : boardSize - shipLength;
      const maxY =
        compOrientation === "Y" ? boardSize - 1 : boardSize - shipLength;

      x = Math.floor(Math.random() * (maxX + 1));
      y = Math.floor(Math.random() * (maxY + 1));

      // Attempt to place the ship on the board
      const isVertical = compOrientation === "Y";
      isValid = this.playerTwoBoard.checkCPUShipPlacement(
        new Ship("temp", shipLength, compOrientation, false, [x, y], 0), // Create a temporary ship object
        x,
        y,
        isVertical
      );
    }

    return { x, y, compOrientation };
  }

  randomAttack() {
    let isValid = false;
    // pick a random coordinate
    let randomRow, randomColumn;

    while (!isValid) {
      randomRow = Math.floor(Math.random() * this.playerOneBoard.size);
      randomColumn = Math.floor(Math.random() * this.playerOneBoard.size);

      const playerOneAttacksMadeGrid = this.playerOneBoard.attacksMade;
      isValid = playerOneAttacksMadeGrid[randomRow][randomColumn] === null;
    }
    return { randomRow, randomColumn };
  }

  // Static method to initialize the game
  static initialize() {
    return new Game();
  }
}
