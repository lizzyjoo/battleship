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
    this.userTurn = true;
  }

  initialize() {
    this.setDOMElements();
    this.updateUI();
    this.domElements();
    this.setupEventListeners();
  }

  setDOMElements() {
    const container = document.querySelector(".container");
    console.log("does container exist?", container);
    const pageContent = document.createElement("div");
    pageContent.className = "page-content";

    // game message
    const gameMsg = document.createElement("div");
    gameMsg.classList.add("gameMsg");
    pageContent.appendChild(gameMsg);

    // div for user & cpu board
    const boards = document.createElement("div");
    boards.classList.add("boards");

    // user div
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    const userBoard = document.createElement("div");
    userBoard.classList.add("gameboard");
    userBoard.id = "player-one-board";
    userDiv.appendChild(userBoard);
    userDiv;
    boards.appendChild(userDiv);
    // cpu div
    const cpuDiv = document.createElement("div");
    cpuDiv.classList.add("cpu");
    const cpuBoard = document.createElement("div");
    cpuBoard.classList.add("gameboard");
    cpuBoard.id = "player-two-board";
    cpuDiv.appendChild(cpuBoard);
    boards.appendChild(cpuDiv);

    pageContent.appendChild(boards);
    container.appendChild(pageContent);
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
    console.log("does board element exist", boardElement);

    boardElement.innerHTML = ""; // Clear existing content

    // create grid cells based on board 2d array
    for (let i = 0; i < 100; i++) {
      const row = parseInt(i / 10);
      const col = i % 10;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (elementId === "player-two-board") {
        cell.setAttribute("id", "c" + row + "-" + col);
      } else {
        cell.setAttribute("id", "u" + row + "-" + col);
      }

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
        const cellDiv = document.getElementById(r + "-" + c);

        if (shipElem && !shipHead.includes(shipElem.name)) {
          shipHead.push(shipElem.name);

          const shipSVG = document.createElement("img");
          const shipTypePath = this.determineShipType(shipElem);
          const shipClassName = this.determineShipClassName(shipElem);
          if (shipTypePath) {
            shipSVG.src = shipTypePath;
            shipSVG.classList.add("ship-svg", shipClassName);

            const isHorizontal = shipElem.orientation === "X";

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

  cpuAttack() {
    const randomCoordinates = this.game.randomAttack();

    const attackedRow = randomCoordinates.randomRow;
    const attackedColumn = randomCoordinates.randomColumn;
    //call handle Attack method?
    console.log(randomCoordinates);
    // get the corresponding cell on the user's board
    const cellId = `${attackedRow}-${attackedColumn}`;
    console.log("cell id check:", cellId);
    const playerOneBoard = document.getElementById("player-one-board");
    console.log(playerOneBoard);
    const attackedCell = document.getElementById(`u${cellId}`);

    this.handleAttack(attackedCell);
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

  // Update game turn; toggle true/false
  updateTurn() {
    this.userTurn = !this.userTurn;
    // user's turn
    // Cpu's turn
    if (!this.userTurn) {
      // computer can make an attack on the user's board
      // display cpu attack message
      console.log("CPU makes an attack");
      this.cpuAttack();
    }
  }

  // handles events after a cell is clicked for attack
  handleAttack(cell) {
    let cellID, cellParentBoard;

    // Check if 'cell' is an Event (from an event listener) or a DOM element
    if (cell instanceof Event) {
      const targetCell = cell.target; // Event target
      cellID = targetCell.id;
      cellParentBoard = targetCell.closest(".gameboard");
      targetCell.classList.add("clicked"); // Add 'clicked' class to the event target
    } else if (cell instanceof HTMLElement) {
      cellID = cell.id; // Direct DOM element
      cellParentBoard = cell.closest(".gameboard");
      cell.classList.add("clicked"); // Add 'clicked' class to the element directly
    }

    const row = cellID[1];
    const column = cellID[3];
    const attackedBoard = this.game.getBoard(cellParentBoard.id);
    const hitElem = attackedBoard.grid[row][column];

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
      attackedBoard.storeMissed(row, column);
    }

    this.updateCellUI(row, column, attackedBoard, cellParentBoard.id);
    if (this.gameOver()) {
      this.endGame();
    }
    this.updateTurn();
  }

  // Update only the affected cell UI
  updateCellUI(row, column, board, boardId) {
    let cellDiv;
    if (boardId === "player-one-board") {
      cellDiv = document.getElementById(`u${row}-${column}`);
    } else {
      cellDiv = document.getElementById(`c${row}-${column}`);
    }

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
