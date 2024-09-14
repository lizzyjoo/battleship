import { Ship } from "./Ship";
export class Gameboard {
  constructor(size) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => Array(size).fill(null));
    this.attacksMade = Array.from({ length: size }, () =>
      Array(size).fill(null)
    );
    this.ships = [];
    this.tempGrid = Array.from({ length: size }, () => Array(size).fill(null));
    this.missed = [];
  }

  placeShip(ship, x, y, isVertical) {
    if (isVertical) {
      if (x + ship.length > this.size) return false; // Out of bounds
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x + i][y] !== null) return false; // Collision with existing ship
      }
      for (let i = 0; i < ship.length; i++) {
        if (ship.name !== "temp") {
          this.grid[x + i][y] = ship; // Place the ship
        }
      }
    } else {
      // horizontal placement
      if (y + ship.length > this.size) return false; // Out of bounds
      for (let i = 0; i < ship.length; i++) {
        if (this.grid[x][y + i] !== null) return false; // Collision with existing ship
      }
      for (let i = 0; i < ship.length; i++) {
        if (ship.name !== "temp") {
          this.grid[x][y + i] = ship; // Place the ship
        }
      }
    }
    return true; // Successfully placed the ship
  }

  checkCPUShipPlacement(ship, x, y, isVertical) {
    if (isVertical) {
      if (x + ship.length > this.size) return false; // Out of bounds
      for (let i = 0; i < ship.length; i++) {
        if (this.tempGrid[x + i][y] !== null) return false; // Collision with existing ship
      }
      for (let i = 0; i < ship.length; i++) {
        this.tempGrid[x + i][y] = ship; // Place the ship
      }
    } else {
      // horizontal placement
      if (y + ship.length > this.size) return false; // Out of bounds
      for (let i = 0; i < ship.length; i++) {
        if (this.tempGrid[x][y + i] !== null) return false; // Collision with existing ship
      }
      for (let i = 0; i < ship.length; i++) {
        this.tempGrid[x][y + i] = ship; // Place the ship
      }
    }
    return true; // Successfully placed the ship
  }

  receiveAttack(row, column, cellParentBoard) {
    const hitElem = this.grid[row][column];
    if (hitElem !== null) {
      this.attacksMade[row][column] = "hit";
      hitElem.hit();
      if (hitElem.isSunk()) {
        const className = `${hitElem.name}-svg`;
        const shipImage = cellParentBoard.querySelector(`img.${className}`);
        shipImage.classList.add("sunk-ship");
        shipImage.classList.remove("cpu-hidden");
      }
    } else {
      this.attacksMade[row][column] = "missed";
      this.storeMissed(row, column);
    }
  }

  storeMissed(row, column) {
    const missedCoordinate = [row, column];
    this.missed.push(missedCoordinate);
  }
}
