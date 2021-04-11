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

function setCursor () {
    const div = document.querySelector('#note')
    div.focus
}

function saveNote() {
    const div = document.querySelector("#note")
    const title = div.firstChild.textContent
    const body = convertDivsToString()
    notesArray.push(createNote(title, "body"))
    console.log(notesArray)
}

function createNote(title, body) {
    return {title, body}
}

function convertDivsToString () {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable]')]    
    for (const i of divs) {
        str += `${i.textContent}\n`
    }
    return str
}

function cleanUp () {
    const div = document.querySelector('#note-area')
    div.remove()
} 

function saveTextArea () {
    const note = document.querySelector('textarea').value
    console.log(note)
    const notesarr = note.split('\n\n')
    notesArray.push(createNoteobject(notearr))
    document.querySelector('textarea').value =""
    console.log(notesArray)
}

function createNoteobject(arr) {
    return newobject= { title: arr[0], body: arr[1]}
}   

/* function to add save notes in an array */
    /*on event click of button, create array*/
    /*take in user input via events, google how to exactly do this*/
    /*place user input into the array*/
    /*remove textbox, save button and go back to the new note button*/
    /*if user presses save again, go back to step one*/

/* function to display the note when the note title is clicked */
    /* On event click of button, use Element.insertAdjacentHTML to display note next to the textbox, or wherever appropriate */
