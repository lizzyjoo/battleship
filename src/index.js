import { Game } from "./Game.js";
import { Gameboard } from "./Gameboard.js";
import { UI } from "./UI.js";
import "./style.css";

const game = Game.initialize();
const ui = new UI(game);

// Set up the game and UI

document.addEventListener("DOMContentLoaded", () => {
  ui.updateUI();
  ui.initialize();
});
