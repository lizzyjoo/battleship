import { Ship } from "./Ship.js";
import { Game } from "./Game.js";

export const ships = {
  carrier: {
    length: 5,
    placed: false,
    start: null,
    orientation: null,
    name: "carrier",
  },
  battleship: {
    length: 4,
    placed: false,
    start: null,
    orientation: null,
    name: "battleship",
  },
  destroyer: {
    length: 3,
    placed: false,
    start: null,
    orientation: null,
    name: "destroyer",
  },
  submarine: {
    length: 3,
    placed: false,
    start: null,
    orientation: null,
    name: "submarine",
  },
  patrolBoat: {
    length: 2,
    placed: false,
    start: null,
    orientation: null,
    name: "patrolBoat",
  },
};

const setShip = (name) => {
  console.log("Received name:", name);

  const container = document.querySelector(".container");
  const pageContent = document.createElement("div");
  pageContent.className = "page-content";

  const gameLogo = document.createElement("div");
  gameLogo.className = "logo";

  const orientationBtn = document.createElement("button");
  orientationBtn.className = "orientation-btn";
  orientationBtn.id = "orientation-btn";

  let currentOrientation = "X";
  orientationBtn.textContent = "Orientation: " + currentOrientation;

  const instruction = document.createElement("div");
  instruction.className = "instruction";

  const boardDiv = document.createElement("div");
  boardDiv.className = "boards";
  const boardElement = document.createElement("div");
  boardElement.className = "gameboard";

  for (let i = 0; i < 100; i++) {
    const row = parseInt(i / 10);
    const col = i % 10;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", row + "_" + col);
    boardElement.appendChild(cell);
  }
  boardDiv.appendChild(boardElement);

  let currentShip = ships.carrier;
  instruction.textContent = `Place your ${currentShip.name.toUpperCase()}`;
  let lastCell = null;

  function updateInstruction() {
    const uppercasedName = currentShip.name.toUpperCase();
    instruction.textContent = `Place your ${uppercasedName}`;
  }

  boardElement.addEventListener("mouseover", (event) => {
    if (
      event.target.classList.contains("cell") &&
      !event.target.classList.contains("ship-placed")
    ) {
      lastCell = event.target;
      highlightCells(lastCell, currentShip);
    }
  });

  boardElement.addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("cell")) {
      removeHighlight(event.target, currentShip);
    }
  });

  boardElement.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cell") &&
      !event.target.classList.contains("ship-placed")
    ) {
      lastCell = event.target;
      placeShip(lastCell, currentShip);
      moveToNextShip();
    }
  });

  function highlightCells(cell, ship) {
    const [row, col] = getCellPosition(cell);
    let isValidPlacement = true;

    if (currentOrientation === "X") {
      if (col + ship.length > 10) {
        isValidPlacement = false;
      }
    } else if (currentOrientation === "Y") {
      if (row + ship.length > 10) {
        isValidPlacement = false;
      }
    }

    if (isValidPlacement) {
      for (let i = 0; i < ship.length; i++) {
        const targetCell =
          currentOrientation === "X"
            ? getCell(row, col + i)
            : getCell(row + i, col);
        if (targetCell) targetCell.classList.add("highlight");
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        const targetCell =
          currentOrientation === "X"
            ? getCell(row, col + i)
            : getCell(row + i, col);
        if (targetCell) targetCell.classList.add("invalid-highlight");
      }
    }
  }

  function removeHighlight(cell, ship) {
    const [row, col] = getCellPosition(cell);
    for (let i = 0; i < ship.length; i++) {
      const targetCell =
        currentOrientation === "X"
          ? getCell(row, col + i)
          : getCell(row + i, col);
      if (targetCell) {
        targetCell.classList.remove("highlight", "invalid-highlight");
      }
    }
  }

  orientationBtn.addEventListener("click", () => {
    currentOrientation = currentOrientation === "X" ? "Y" : "X";
    orientationBtn.textContent = "Orientation: " + currentOrientation;

    if (lastCell) {
      removeHighlight(lastCell, currentShip);
      highlightCells(lastCell, currentShip);
    }
  });

  function placeShip(cell, ship) {
    const [row, col] = getCellPosition(cell);
    ship.start = [row, col];
    ship.placed = true;
    ship.orientation = currentOrientation;

    if (ship.orientation === "X") {
      for (let i = 0; i < ship.length; i++) {
        const targetCell = getCell(row, col + i);
        if (targetCell) targetCell.classList.add("ship-placed");
      }
    } else if (ship.orientation === "Y") {
      for (let i = 0; i < ship.length; i++) {
        const targetCell = getCell(row + i, col);
        if (targetCell) targetCell.classList.add("ship-placed");
      }
    }
  }

  function moveToNextShip() {
    if (currentShip === ships.carrier) {
      currentShip = ships.battleship;
    } else if (currentShip === ships.battleship) {
      currentShip = ships.destroyer;
    } else if (currentShip === ships.destroyer) {
      currentShip = ships.submarine;
    } else if (currentShip === ships.submarine) {
      currentShip = ships.patrolBoat;
    } else if (currentShip === ships.patrolBoat) {
      console.log("All ships placed!", ships);
      saveBoardState();
    }
    updateInstruction();
  }

  function getCellPosition(cell) {
    const [row, col] = cell.id.split("_").map(Number);
    return [row, col];
  }

  function getCell(row, col) {
    return document.getElementById(`${row}_${col}`);
  }

  function saveBoardState() {
    console.log("Board State Saved", ships);
    const game = new Game();
    game.saveShipPlacement();
  }

  pageContent.appendChild(gameLogo);
  pageContent.appendChild(instruction);
  pageContent.appendChild(orientationBtn);
  pageContent.appendChild(boardDiv);
  container.appendChild(pageContent);
};

export default setShip;
