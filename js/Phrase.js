/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // the actual phrase the Phrase object is representing
        this.phrase = phrase.toLowerCase();
    }


    // adds letter placeholders to the display and displays phrase on game board
    addPhraseToDisplay(){
        // select the ul element
        const ul = document.querySelector("#phrase ul");
        // an empty string to hold list items
        let listItems = " ";
        // 
        let splitPhrase = this.phrase.split("");
        // for each letter in the selected array, create an li
        splitPhrase.forEach(letter => {
            // if the letter is a space, concatenate the list item with a space
            if (letter === " ") {
                listItems += `<li class = "space"> </li>`;
            // otherwise, concatenate the html for a list item with a character
            } else {
                listItems += `<li class = "hide letter ${letter}"> ${letter} </li>`;
            }
            // add the list items to the unordered list
            ul.innerHTML = listItems;
        });
        
    }
    // Checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        // if the phrase includes a certain letter
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
         }
     }
 
/*    `showMatchedLetter()`: Reveals the letter(s) on the board that matches the
player's selection. To reveal the matching letter(s), select all of the letter DOM
elements that have a CSS class name that matches the selected letter and
replace each selected element's `hide` CSS class with the `show` CSS class.
*/  /*showMatchedLetter(letter) {
        const gameboardLetters = document.querySelectorAll(".key");
        for (let i = 0; i < gameboardLetters.length; i++) {
            if (gameboardLetters[i].textContent === letter) {
                gameboardLetters.style.display = "show";
            }
        }
}*/
}        