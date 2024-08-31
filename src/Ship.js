export class Ship {
  constructor(name, length, orientation, hits = 0, sunk = false) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
    this.orientation = orientation;
  }
  // 'hits' the ship
  hit() {
    this.hits++;
  }

  // check whether the ship sunk or not
  isSunk() {
    return this.length <= this.hits;
  }
}
