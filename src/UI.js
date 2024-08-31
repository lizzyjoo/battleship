// UI.js
import carrierSVGPath from "./assets/carrier.svg";
import battleshipSVGPath from "./assets/battleship.svg";
import destroyerSVGPath from "./assets/destroyer.svg";
import patrolBoatSVGPath from "./assets/patrol.svg";
import submarineSVGPath from "./assets/submarine.svg";
import { Game } from "./Game.js";
export class UI {
  constructor(game) {
    this.game = game;
    // this.setupEventListeners();
  }

  initialize() {
    this.domElements();
    this.setupEventListeners();
  }
  domElements() {
    this.userCells = document.querySelectorAll("#player-one-board .cell");
    this.cpuCells = document.querySelectorAll("#player-two-board .cell");
  }
  setupEventListeners() {
    if (!this.cpuCells || this.cpuCells.length === 0) {
      console.error("CPU cells are not available for event listeners.");
      return;
    }

    this.cpuCells.forEach((cell) => {
      cell.addEventListener("click", (event) => this.handleAttack(event));
    });
  }

  // render player's board state
  renderBoard(board, elementId) {
    const boardElement = document.getElementById(elementId);

    boardElement.innerHTML = ""; // Clear existing content

    // create grid cells based on board 2d array
    for (let i = 0; i < 100; i++) {
      const row = parseInt(i / 10);
      const col = i % 10;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.setAttribute("id", row + "_" + col);
      boardElement.appendChild(cell);
    }

    const grid = board.grid;
    const shipHead = [];

    // display attempted attacks with appropriate color labeling
    const attacks = board.attacksMade;

    // ship placement UI
    for (let r = 0; r < board.size; r++) {
      for (let c = 0; c < board.size; c++) {
        const shipElem = grid[r][c];
        const cellDiv = document.getElementById(r + "_" + c);

        if (shipElem && !shipHead.includes(shipElem.name)) {
          shipHead.push(shipElem.name);

          const shipSVG = document.createElement("img");
          const shipTypePath = this.determineShipType(shipElem);
          const shipClassName = this.determineShipClassName(shipElem);
          if (shipTypePath) {
            shipSVG.src = shipTypePath;
            shipSVG.classList.add("ship-svg", shipClassName);

            const isHorizontal = shipElem.orientation === "x";

            const svgDiv = document.createElement("div");
            svgDiv.classList.add("svg-div");

            if (isHorizontal) {
              svgDiv.style.gridArea = `${r + 1} / ${c + 1} / span 1 / span ${
                shipElem.length
              }`;
            } else {
              shipSVG.classList.add("y");
              svgDiv.style.gridArea = `${r + 1} / ${c + 1} / span ${
                shipElem.length
              } / span 1`;
            }

            svgDiv.appendChild(shipSVG);
            boardElement.appendChild(svgDiv);
          }
        }
      }
    }
  }

  // returns ship type name
  determineShipType(ship) {
    switch (ship.name) {
      case "carrier":
        return carrierSVGPath;
      case "battleship":
        return battleshipSVGPath;
      case "destroyer":
        return destroyerSVGPath;
      case "submarine":
        return submarineSVGPath;
      case "patrolBoat":
        return patrolBoatSVGPath;
      default:
        console.error("Unknown ship type:", ship.name);
        return null;
    }
  }

  determineShipClassName(ship) {
    switch (ship.name) {
      case "carrier":
        return "carrier-svg";
      case "battleship":
        return "battleship-svg";
      case "destroyer":
        return "destroyer-svg";
      case "submarine":
        return "submarine-svg";
      case "patrolBoat":
        return "patrolBoat-svg";
      default:
        console.error("Unknown ship type:", ship.name);
        return null;
    }
  }

  // handles events after a cell is clicked for attack
  handleAttack(cell) {
    console.log("Attack made on:", cell.srcElement.id);

    const cellID = cell.srcElement.id;
    const row = cellID[0];
    const column = cellID[2];
    const cellParentBoard = cell.srcElement.closest(".gameboard"); // Ensure correct parent is selected

    if (!cellParentBoard) {
      console.error("Parent board not found.");
      return;
    }

    const attackedBoard = this.game.getBoard(cellParentBoard.id);

    if (!attackedBoard) {
      console.error("No board found for ID:", cellParentBoard.id);
      return;
    }

    const hitElem = attackedBoard.grid[row][column];

    // add css class to disable pointer events
    cell.srcElement.classList.add("clicked");
    // user hits either a ship or a blank cell
    if (hitElem !== null) {
      attackedBoard.attacksMade[row][column] = "hit";
      hitElem.hit();
      console.log(hitElem.name, " : hit count", hitElem.hits);
      if (hitElem.isSunk()) {
        const className = `${hitElem.name}-svg`;
        const shipImage = cellParentBoard.querySelector(`img.${className}`);
        shipImage.classList.add("sunk-ship");
      }
    } else {
      attackedBoard.attacksMade[row][column] = "missed";
    }

    this.updateCellUI(row, column, attackedBoard, cellParentBoard.id);

    if (this.gameOver()) {
      this.endGame();
    }
  }

  // Update only the affected cell UI
  updateCellUI(row, column, board, boardId) {
    const cellDiv = document.getElementById(`${row}_${column}`);
    const attackType = board.attacksMade[row][column];

    if (attackType === "hit") {
      cellDiv.classList.add("hit-cell"); // Add appropriate class
    } else if (attackType === "missed") {
      cellDiv.classList.add("missed-cell"); // Add appropriate class
    }
  }

  updateUI() {
    console.log("Rendering boards...");
    this.renderBoard(this.game.playerOneBoard, "player-one-board");
    this.renderBoard(this.game.playerTwoBoard, "player-two-board");
    console.log("Boards rendered.");
    this.domElements();
    //this.setupEventListeners();
  }

  gameOver() {
    const playerOneShips = Object.values(this.game.playerOne.ships);
    const playerTwoShips = Object.values(this.game.playerTwo.ships);

    const allPlayerOneShipsSunk = playerOneShips.every((ship) => ship.isSunk());
    const allPlayerTwoShipsSunk = playerTwoShips.every((ship) => ship.isSunk());

    return allPlayerOneShipsSunk || allPlayerTwoShipsSunk;
  }

  // terminate game: disable all pointer events and display button to replay the game
  endGame() {
    console.log("game over");
  }
}
