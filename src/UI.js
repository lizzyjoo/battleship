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
    this.userName = this.game.userName;
    // this.setupEventListeners();
    this.userTurn = true;
    this.gameEnded = false;
  }

  initialize() {
    this.setDOMElements();
    this.updateUI();
    this.domElements();
    this.setupEventListeners();
  }

  setDOMElements() {
    const container = document.querySelector(".container");
    container.id = "game-container";
    const pageContent = document.createElement("div");
    pageContent.className = "page-content";
    pageContent.id = "game-page";

    // game message
    const gameMsg = document.createElement("div");
    gameMsg.classList.add("gameMsg");
    gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;
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

    // user name label
    const userBoardName = document.createElement("div");
    userBoardName.classList.add("board-label");
    userBoardName.textContent = `${this.userName}`;
    userDiv.appendChild(userBoardName);

    boards.appendChild(userDiv);
    // cpu div
    const cpuDiv = document.createElement("div");
    cpuDiv.classList.add("cpu");
    const cpuBoard = document.createElement("div");
    cpuBoard.classList.add("gameboard");
    cpuBoard.id = "player-two-board";
    cpuDiv.appendChild(cpuBoard);

    const cpuBoardName = document.createElement("div");
    cpuBoardName.classList.add("board-label");
    cpuBoardName.textContent = "CPU";
    cpuDiv.appendChild(cpuBoardName);
    boards.appendChild(cpuDiv);

    pageContent.appendChild(boards);
    container.appendChild(pageContent);
  }
  domElements() {
    this.cpuBoard = document.getElementById("player-two-board");
    this.userCells = document.querySelectorAll("#player-one-board .cell");
    this.cpuCells = document.querySelectorAll("#player-two-board .cell");
    this.gameMsg = document.querySelector(".gameMsg");
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
      if (elementId === "player-two-board") {
        cell.setAttribute("id", "c" + row + "-" + col);
      } else {
        cell.setAttribute("id", "u" + row + "-" + col);
      }

      boardElement.appendChild(cell);
    }

    const grid = board.grid;
    const shipHead = [];
    // ship placement UI: only initially display SVGs for the user, not CPU
    for (let r = 0; r < board.size; r++) {
      for (let c = 0; c < board.size; c++) {
        const shipElem = grid[r][c];

        if (shipElem && !shipHead.includes(shipElem.name)) {
          shipHead.push(shipElem.name);

          const shipSVG = document.createElement("img");
          const shipTypePath = this.determineShipType(shipElem);
          const shipClassName = this.determineShipClassName(shipElem);
          // make sure cpu elements are hidden unless ship sinks
          if (elementId === "player-two-board") {
            if (!shipSVG.classList.contains("sunk-ship")) {
              shipSVG.classList.add("cpu-hidden");
            }
          }
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
    if (this.gameOver()) {
      this.endGame();
      return;
    }
    setTimeout(() => {
      const randomCoordinates = this.game.randomAttack();
      const attackedRow = randomCoordinates.randomRow;
      const attackedColumn = randomCoordinates.randomColumn;

      // Get the corresponding cell on the user's board
      const cellId = `${attackedRow}-${attackedColumn}`;
      const attackedCell = document.getElementById(`u${cellId}`);

      // Execute the attack after another brief delay (e.g., 1 second)
      setTimeout(() => {
        this.handleAttack(attackedCell);
      }, 1000); // Additional delay for attack execution
    }, 1500); // Initial delay before showing the attack
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
    if (this.gameOver()) {
      this.endGame();
      return;
    }

    this.userTurn = !this.userTurn;
    this.toggleUserTurn(this.userTurn);

    if (this.userTurn) {
      // Delay the message update for the player's turn
      setTimeout(() => {
        this.gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;
        this.resetAnimation(this.gameMsg);
      }, 1500);
    } else {
      // Delay CPU attack
      setTimeout(() => {
        this.cpuAttack();
      }, 1000);
    }
  }

  toggleUserTurn() {
    if (this.userTurn) {
      this.cpuBoard.classList.remove("disabled");
    } else {
      this.cpuBoard.classList.add("disabled");
    }
  }

  // handles events after a cell is clicked for attack
  handleAttack(cell) {
    if (this.gameEnded) return;

    let cellID, cellParentBoard;
    if (this.userTurn) {
      this.gameMsg.textContent = `Awaiting orders, Admiral ${this.userName}.`;
      this.resetAnimation(this.gameMsg);
    }

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

    // Clear previous message and set new game message
    if (cell instanceof Event) {
      this.gameMsg.textContent = "Launching attack...";
    } else if (cell instanceof HTMLElement) {
      this.gameMsg.textContent = "CPU launching attack...";
    }

    this.resetAnimation(this.gameMsg);

    // Delay for 1 second before executing the attack logic
    setTimeout(() => {
      attackedBoard.receiveAttack(row, column, cellParentBoard);
      this.updateCellUI(row, column, attackedBoard, cellParentBoard.id);

      // Check if the game is over after the UI is updated
      if (this.gameOver()) {
        this.endGame();
      }

      // Update the turn after the attack and UI update
      this.updateTurn();
    }, 1500);
  }

  // Update only the affected cell UI
  updateCellUI(row, column, board, boardId) {
    let cellDiv;
    this.resetAnimation(this.gameMsg);
    if (boardId === "player-one-board") {
      cellDiv = document.getElementById(`u${row}-${column}`);
    } else {
      cellDiv = document.getElementById(`c${row}-${column}`);
    }

    const attackType = board.attacksMade[row][column];

    if (attackType === "hit") {
      cellDiv.classList.add("hit-cell"); // Add appropriate class

      this.gameMsg.textContent = "Ship hit!";
      this.resetAnimation(this.gameMsg);
    } else if (attackType === "missed") {
      cellDiv.classList.add("missed-cell"); // Add appropriate class

      this.gameMsg.textContent = "...and attack misses.";
      this.resetAnimation(this.gameMsg);
    }

    const hitElem = board.grid[row][column];
    console.log("lemado", board.grid[row][column]);
    if (hitElem !== null) {
      if (hitElem.isSunk()) {
        this.gameMsg.textContent = `${hitElem.name} sunk.`;
      }
    }
  }
  resetAnimation(element) {
    // Remove the class that triggers the animation
    element.style.animation = "none";

    // Force a reflow to restart the animation
    element.offsetHeight; // This line forces reflow/repaint in the browser

    // Reapply the animation class
    element.style.animation = null;
  }

  updateUI() {
    this.renderBoard(this.game.playerOneBoard, "player-one-board");
    this.renderBoard(this.game.playerTwoBoard, "player-two-board");
    this.domElements();
    //this.setupEventListeners();
  }

  gameOver() {
    const allPlayerOneShipsSunk = this.game.checkAllShipsSunk(
      this.game.playerOne
    );
    const allPlayerTwoShipsSunk = this.game.checkAllShipsSunk(
      this.game.playerTwo
    );

    return allPlayerOneShipsSunk || allPlayerTwoShipsSunk;
  }

  // terminate game: disable all pointer events and display button to replay the game
  endGame() {
    if (this.gameEnded) return; // Prevent multiple endGame executions

    this.gameEnded = true; // Set flag to mark game as ended
    this.gameMsg.textContent = "Game Over!";
    const page = document.getElementById("game-page");

    // Check if the button already exists to avoid appending it multiple times
    let playAgainBtn = document.getElementById("play-again");
    if (!playAgainBtn) {
      playAgainBtn = document.createElement("button");
      playAgainBtn.id = "play-again";
      playAgainBtn.textContent = "Play Again";
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      page.appendChild(playAgainBtn);
    }
  }
}
