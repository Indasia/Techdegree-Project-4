/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// add an event listener (click) to the element
document.getElementById("btn__reset").addEventListener("click", function () {
    // once clicked, instantiate a new Game object
    game = new Game();
    // also, call the startGame method on the game object
    game.startGame();
});