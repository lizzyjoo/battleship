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

  receiveAttack(attack) {}
  storeAttack(attack) {}
  storeMissed(attack) {}
  allSunk() {}
}
