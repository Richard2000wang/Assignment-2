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

light.onclick = function() {
    if (light.innerText == "Light mode") {
        light.innerText = "Dark mode";
    } else {
        light.innerText = "Light mode";
    }
    if (light.innerText== "Light mode") {
        document.body.style.background = "Purple";
    } else {document.body.style.background = "White";}
}


const notesArray = []

function defineNoteWritingSection () {
    html = `
    <div id="note-area">
        <div id="note" contenteditable="true"></div>
        <button onclick="saveNote()">save</button>
        <button onclick="cleanUp()">cancel</button>
    </div>
    `
    return html
}

notes.onclick = function createContentWritingArea () {
    const div = document.querySelector('#content')
    div.insertAdjacentHTML('beforeend', defineNoteWritingSection())
    setCursor()
}



/* function to add save notes in an array */
    /*on event click of button, create array*/
    /*take in user input via events, google how to exactly do this*/
    /*place user input into the array*/
    /*remove textbox, save button and go back to the new note button*/
    /*if user presses save again, go back to step one*/

/* function to display the note when the note title is clicked */
    /* On event click of button, use Element.insertAdjacentHTML to display note next to the textbox, or wherever appropriate */
