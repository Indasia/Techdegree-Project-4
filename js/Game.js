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
            new Phrase("Stay weird."),
            new Phrase("Live a life of purpose."),
            new Phrase("True happiness lies within."),
            new Phrase("Namaste."),
            new Phrase("Let good things happen.")
            ];
        return phraseArray;
    };   

    // selects random phrase from phrases property and returns it
    getRandomPhrase() {
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;       
    }

    //startGame(){}
    //removeLife(){}
    //checkForWin(){}
    //gameOver(){} 
}