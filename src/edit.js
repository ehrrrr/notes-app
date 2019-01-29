import {initializeEditPage, generateLastEdited} from "./views";
import { updateNote, removeNote } from "./notes";

const noteTitle = document.querySelector("#note-title");
const lastEdited = document.querySelector("#last-edited");
const noteBody = document.querySelector("#note-body");
const removeBtn = document.querySelector("#remove-note");
const noteId = location.hash.substring(1);

initializeEditPage(noteId);

noteTitle.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
       title: e.target.value
    })
    lastEdited.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`;
});

noteBody.addEventListener("input", (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
     })
    lastEdited.textContent =  generateLastEdited(note.updatedAt);
});

removeBtn.addEventListener("click", () => {
    removeNote(noteId);
    location.assign("./index.html");
});

window.addEventListener("storage", (e) => {
    if(e.key==="notes") {
        initializeEditPage(noteId);
    }
});