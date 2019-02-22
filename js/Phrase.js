/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        // the actual phrase the Phrase object is representing
        this.phrase = phrase.toLowerCase();
    }
}

    // adds letter placeholders to the display and displays phrase on game board
    addPhraseToDisplay(){
       // select the ul element
        const ul = document.querySelector("#phrase ul");
        let splitPhrase = this.phrase.split("");
        // for each letter in the selected array, create an li
        splitPhrase.forEach(letter => {
            let li = document.createElement("li");
            // if the letter is a space, concatenate the list item with a space
            if (letter === " ") {
                li.innerHTML = "<li>" + " " + "</li>";
            // otherwise, concatenate the html for a list item with a character
            } else {
                li.innerHTML = "<li>" + ${letter} + "</li>";
            }
            });
    ul.appendChild(li);
};
        
   // checkLetter(){}
   // showMatchedLetter(){}
 