// DATA

const notes = [
    { text: "This is my first note."},
    { text: "This is a bigger note with multiple lines. This is a very long note."},
    { text: "This is another note."},
    { text: "One more note." }
]


//FUNCTIONS

function render() {
    const noteContainer = document.querySelector(".note-container")
    noteContainer.innerHTML = "";

    for (const note of notes) {
    const noteElement = createNoteElement(note);
    noteContainer.append(noteElement);
    }
}

function createNoteElement (note) {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    div.className = "note";
    p.textContent = note.text;
    button.textContent = "Delete";

    button.addEventListener("click", () => {
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        render();
      });

    div.append(p, button);

  return div;
  
}



function handleSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
  
    const text = form.elements["new-note"].value;
    addNote(text);
    form.reset();
  }

function addNote(text) {
    const newNote = {text: text};
  
    notes.push(newNote);
    render();
  }


//PROGRAM

const taskForm = document.querySelector(".new-note-form");
taskForm.addEventListener("submit", handleSubmit);

render();
