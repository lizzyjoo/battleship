import carrierSVGPath from "./assets/carrier.svg";
import battleshipSVGPath from "./assets/battleship.svg";
import destroyerSVGPath from "./assets/destroyer.svg";
import patrolBoatSVGPath from "./assets/patrol.svg";
import submarineSVGPath from "./assets/submarine.svg";

import { UI } from "./UI.js";
import { Game } from "./Game.js";
import { Ship } from "./Ship.js";
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
  const container = document.querySelector(".container");
  const pageContent = document.createElement("div");
  pageContent.className = "page-content";
  pageContent.id = "ship-page";

  const gameLogo = document.createElement("div");
  gameLogo.className = "logo";
  gameLogo.textContent = "BATTLESHIP";

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
  boardElement.id = "user-set-ship";
  for (let i = 0; i < 100; i++) {
    const row = parseInt(i / 10);
    const col = i % 10;
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", row + "-" + col);
    boardElement.appendChild(cell);
  }
  boardDiv.appendChild(boardElement);

  let currentShip = ships.carrier;
  instruction.textContent = `${name.toUpperCase()}, PLACE YOUR ${currentShip.name.toUpperCase()}`;
  let lastCell = null;

  function updateInstruction() {
    const uppercasedName = currentShip.name.toUpperCase();
    instruction.textContent = `${name.toUpperCase()}, PLACE YOUR ${uppercasedName}`;
  }

  boardElement.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cell")) {
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
    if (event.target.classList.contains("cell")) {
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
    const shipHead = [];
    const [row, col] = getCellPosition(cell);
    ship.start = [row, col];
    ship.placed = true;
    ship.orientation = currentOrientation;

    // Create the ship SVG only once per ship
    if (!shipHead.includes(ship.name)) {
      shipHead.push(ship.name);

      const shipSVG = document.createElement("img");
      const shipTypePath = determineShipType(ship); // Function to determine the SVG source based on the ship type
      const shipClassName = determineShipClassName(ship); // Function to determine the class name of the ship SVG

      if (shipTypePath) {
        shipSVG.src = shipTypePath; // Set the SVG path
        shipSVG.classList.add("ship-svg", shipClassName); // Add class for styling the SVG

        const svgDiv = document.createElement("div"); // Create a div to contain the SVG
        svgDiv.classList.add("svg-div");

        // Handle orientation and grid area placement
        if (ship.orientation === "X") {
          // Horizontal placement
          svgDiv.style.gridArea = `${row + 1} / ${col + 1} / span 1 / span ${
            ship.length
          }`;

          // Apply the ship class to the cells (for background color or other effects)
          for (let i = 0; i < ship.length; i++) {
            const targetCell = getCell(row, col + i);
            if (targetCell) {
              targetCell.classList.add("ship-placed"); // Add the class for background color
            }
          }
        } else if (ship.orientation === "Y") {
          // Vertical placement
          shipSVG.classList.add("y"); // Add class for vertical styling
          svgDiv.style.gridArea = `${row + 1} / ${col + 1} / span ${
            ship.length
          } / span 1`;

          // Apply the ship class to the cells (for background color or other effects)
          for (let i = 0; i < ship.length; i++) {
            const targetCell = getCell(row + i, col);
            if (targetCell) {
              targetCell.classList.add("ship-placed"); // Add the class for background color
            }
          }
        }

        // Append the SVG to the board
        svgDiv.appendChild(shipSVG);
        const boardElement = document.querySelector(".gameboard"); // Assuming the gameboard class is used
        boardElement.appendChild(svgDiv);
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
      clearContent();
      saveBoardState();
    }
    updateInstruction();
  }

  function determineShipType(ship) {
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

  function determineShipClassName(ship) {
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

  function getCellPosition(cell) {
    const [row, col] = cell.id.split("-").map(Number);
    return [row, col];
  }

  function getCell(row, col) {
    return document.getElementById(`${row}-${col}`);
  }

  function saveBoardState() {
    // Create a new Game instance with the player name and ships
    const game = new Game(ships, name);

    // Initialize the UI with the game instance
    const ui = new UI(game);

    ui.initialize();
    // Update the UI to show the game board
  }
  pageContent.appendChild(gameLogo);
  pageContent.appendChild(instruction);
  pageContent.appendChild(orientationBtn);
  pageContent.appendChild(boardDiv);
  container.appendChild(pageContent);
};

function clearContent() {
  const container = document.querySelector(".container");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    container.removeChild(pageContent);
  }
}

export default setShip;
