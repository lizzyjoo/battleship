import { Gameboard } from "./Gameboard";
export class Player {
  constructor(type, gameboard, ships) {
    this.type = type;
    this.gameboard = gameboard;
    this.ships = ships;
  }
}
