
light.onclick = function() {
    if (light.innerText == "Light mode") {
        light.innerText = "Dark mode";
    } else {
        light.innerText = "Light mode";
    }
    if (light.innerText== "Light mode") {
        document.getElementById('main').style.background = "#232136";
    } else {document.getElementById('main').style.background = "#e0def4";}
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
    notesArray.push(createNote(title, body))
    console.log(notesArray)
}

function createNote(title, body) {
    return {title, body}
}

function convertDivsToString () {
    let str = ""
    const divs = [...document.querySelectorAll('[contenteditable] > div')]    
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

