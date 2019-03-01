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
        // returns the matching letter
        return this.phrase.includes(letter);
     }
 
    // reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
            // select all of the letter DOM elements
            const gameboardLetters = document.querySelectorAll(".letter");
            // loops through all of the letter DOM elements
            for (let i = 0; i < gameboardLetters.length; i++) {
                // if the gameboardLetters text equals the letter
                if (gameboardLetters[i].innerText == letter) {
                    // remove the element's hide CSS class
                    gameboardLetters[i].classList.remove("hide");
                    // add the element's show CSS class
                    gameboardLetters[i].classList.add("show");
                }
            }
    }
}        