const lightchange = document.getElementById("light");

lightchange.onclick = function () {
    if (lightchange.innerText == "Dark Mode") {
        lightchange.innerText = "Light Mode";
    }else {
        lightchange.innerText = "Dark Mode";
    }
    if (lightchange.innerText == "Dark Mode") {
        document.body.style.background = "#e0def4";
    }else {
        document.body.style.background = "#232136";
    }
}


/* function to add save notes in an array */
    /*on event click of button, create array*/
    /*take in user input via events, google how to exactly do this*/
    /*place user input into the array*/
    /*remove textbox, save button and go back to the new note button*/
    /*if user presses save again, go back to step one*/

/* function to display the note when the note title is clicked */
    /* On event click of button, use Element.insertAdjacentHTML to display note next to the textbox, or wherever appropriate */

/* function of a button to change the color to dark mode on click */
    /* use Element.insertAdjacentHTML to add classes with different colors for dark mode*/
    /* replace button with another button that turns it back to light mode on event click */
    /* Make sure to have appropriate CSS code so the buttons work*/
    /* Find out if there is a better way than to replace all the classes*/