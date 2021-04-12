
light.onclick = function() {
    if (light.innerText == "Light mode") {
        light.innerText = "Dark mode";
        document.getElementById('main').style.background = "#e0def4";
    } else {
        light.innerText = "Light mode";
        document.getElementById('main').style.background = "#232136";
    }
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
    updateSidebar()
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
    console.log(notesArray)  //TODO remember to remove the notes and stuffs
}

function createNoteobject(arr) {
    return newobject= { title: arr[0], body: arr[1]}
}   

function updateSidebar () {
    let nlist = document.getElementById('notes-list')
    nlist.innerHTML=""
    for (const n of notesArray) {
        let li = document.createElement("li")
        li.textContent = n.title
        li.onclick = function () {
            displayNote(n)
        }
        nlist.appendChild(li)
    }
}

function displayNote(note) {
    let textarea = document.getElementById('note-display-body')
    let texttitle = document.getElementById('note-display-title')
    texttitle.innerHTML = note.title
    textarea.innerHTML = note.body.replaceAll('\n','<br>') 
    let parent = document.getElementById('note-display')
    parent.hidden = false
}

function closeNote () {
    let textarea = document.getElementById('note-display-body')
    let texttitle = document.getElementById('note-display-title')
    texttitle.innerHTML = ""
    textarea.innerHTML = ""
    let parent = document.getElementById('note-display')
    parent.hidden = true
}