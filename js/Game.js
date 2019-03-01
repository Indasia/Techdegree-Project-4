/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        // used to track the number of missed guesses by the player. initial value = 0
        this.missed = 0;
        // an array of Phrase objects to use with the game
        this.phrases = this.createPhrases();
        // the Phrase object currently in play. initial value = null
        this.activePhrase = null;
    }

    // creates phrases for use in game and returns it
    createPhrases() {
        let phraseArray = [
            new Phrase("Stay weird"),
            new Phrase("Live a life of purpose"),
            new Phrase("True happiness lies within"),
            new Phrase("Namaste"),
            new Phrase("Let good things happen")
        ];
        return phraseArray;
    };

    // selects random phrase from phrases property and returns it
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    // begin the game by selecting a random phrase and displaying it to the user 
    startGame() {
        this.resetGame();
        // hide the start screen overlay
        document.getElementById("overlay").style.display = "none";
        // select a Phrase object from the Game object’s array of phrases
        this.activePhrase = this.getRandomPhrase();
        // store the selected phrase into the Game's `activePhrase` property, adds phrase to game board 
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {    
        // holds the text content of the button
        let buttonLetter = button.textContent;
        button.disabled = true;
        // the clicked letter must be checked against the phrase for a match
        // if the phrase does not match the clicked letter
        if (!game.activePhrase.checkLetter(buttonLetter)) { 
            // set the button class name to equal "wrong"
            button.classList.add("wrong");
            // and call the removeLife method to remove a life
            this.removeLife();
        } else {
            // set the button class name to equal "chosen"
            button.classList.add("chosen");
            // the phrase should match the clicked letter
            game.activePhrase.showMatchedLetter(buttonLetter);
            // and call the checkForWin method
            this.checkForWin(); 
        }
        // if the checkForWin() method is true
        if (this.checkForWin() === true) {
            // gameOver is true
            this.gameOver(true);
        }
    }

    // removes a life from the scoreboard, by replacing one the liveHeart.png images with a lostHeart.png image
    removeLife() {
        // increments the missed property    
        this.missed++;
        // select all scoreboard heart images (tries/lives)
        const hearts = document.querySelectorAll(".tries img");
        // take away one heart image
        hearts[this.missed - 1].src = 'images/lostHeart.png';
        // if the user misses 5 times
        if (this.missed === 5) {
            // the game is over
            this.gameOver(false);
        }   
    }
    
    // checks to see if the player has revealed all of the letters in the active phrase.
    checkForWin(){
        const hidden = document.getElementsByClassName("hide");
        // if any of the phrase letters are still hidden, return true or false
        if (hidden.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    // this method displays the original start screen overlay
    gameOver(gameWon) {
        // select the game over message
        const gameOverMessage = document.getElementById("game-over-message");
        // select the overlay element
        const overlay = document.getElementById("overlay");
        // change the overlay display to block, the original display
        overlay.style.display = "flex";
        // if the game is won
        if (gameWon) {
            // show a message and add a win CSS class
            gameOverMessage.textContent = "Looks like we have a winner!";
            overlay.classList.add("win");
        } else {
            // otherwise, show a message and ass a lose CSS class
            gameOverMessage.textContent = "You're never a loser until you quit trying.";
            overlay.classList.add("lose");
        }
    } 

    // after a game is completed, reset the gameboard
    resetGame() { 
        // select the phrase UL elements
        const ul = document.querySelector("#phrase ul");
        // set the innerHTML of the phrase UL elements to an empty string
        ul.innerHTML = "";
        // set the amount of misses back to 0
        this.missed = 0;
        // select the heart images, and for each image bring it back
        let hearts = document.querySelectorAll('.tries img');
        hearts.forEach(life => life.src = 'images/liveHeart.png')
        // select all qwerty buttons
        let keys = document.getElementsByClassName("key");
        // loop through all qwerty buttons
        for (let key of keys) {
            // and enable the buttons again
            key.disabled = false;
            // and remove the classes from the buttons that change their color
            key.classList.remove("wrong", "chosen");
        }
        
        }
    }
