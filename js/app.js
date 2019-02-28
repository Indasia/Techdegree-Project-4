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

// select all of the buttons with the key class
let keys = document.getElementsByClassName("key");
// loop through all of the keys buttons
for (let key of keys) {
    // add a click event listener to the key buttons
    key.addEventListener("click", function (event) {
        // call the handleInteraction method on game
        game.handleInteraction(event.target);
    });
}
