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
        // hide the start screen overlay
        document.getElementById("overlay").style.display = "none";
        // select a Phrase object from the Game object’s array of phrases
        this.activePhrase = this.getRandomPhrase();
        // store the selected phrase into the Game's `activePhrase` property, adds phrase to game board 
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(button) {
/*      
        ● The clicked / chosen letter must be captured.
        ● The clicked letter must be checked against the phrase for a match.
        ● If there’s a match, the letter must be displayed on screen instead of the placeholder.
        ● If there’s no match, the game must remove a life from the scoreboard.
        ● The game should check if the player has won the game by revealing all of the letters in
          the phrase or if the game is lost because the player is out of lives.
        ● If the game is won or lost, a message should be displayed on screen.
*/
        
        if (button.tagName == "button") {
            let buttonLetter = button.textContent;
            button.disabled = true;

            if (!game.activePhrase.checkLetter(letter)) {
                button.className = "wrong";
                this.removeLife();
            } else {
                button.className = "chosen";
                game.activePhrase.showMatchedLetter(letter);
                this.checkForWin();
            }

        }
    }















/*  removes a life from the scoreboard, by replacing one
of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images`
folder) and increments the `missed` property. If the player has five missed
guesses (i.e they're out of lives), then end the game by calling the `gameOver()`
method.
*/  //removeLife(){}

    
    
    // checks to see if the player has revealed all of the letters in the active phrase.
    //checkForWin(){}


    
/* method displays the original start screen overlay, and
depending on the outcome of the game, updates the overlay `h1` element with a
friendly win or loss message, and replaces the overlay’s `start` CSS class with
either the `win` or `lose` CSS class.
*/ //gameOver(){} 

}