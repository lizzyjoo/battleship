export class Ship {
  constructor(name, length, orientation, sunk = false, start, hits = 0) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
    this.orientation = orientation;
    this.start = start;
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
