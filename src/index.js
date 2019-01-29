import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";

renderNotes();

document.querySelector("#create-note").addEventListener("click", () => {
    const id = createNote();
    location.assign(`/edit.html#${id}`);
})

document.querySelector("#search-text").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    renderNotes();
});

document.querySelector("#sort-dropdown").addEventListener("change", (e) => {
    setFilters({
        sortBy: e.target.value
    })  
    renderNotes();
});

window.addEventListener("storage", function(e){
    if(e.key==="notes") {
        renderNotes();
    }
});


