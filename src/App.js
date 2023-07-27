import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Notes from "./components/Notes/Notes";
import AddNote from "./components/AddNote/AddNote";

import AddNoteButton from "./components/AddNote/AddNoteButton";

function App() {
  const [addNote, setAddNote] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes){
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const AddNoteHandler = (text) => {
    setNotes((prev) => {
      let id = 0;
      if (prev.length > 0) {
        id = prev[0].id + 1;
      }

      const note = {
        text: text,
        id: id,
      };

      const newNotes = [note, ...prev];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return newNotes;
    });
  };

  const closeOverlay = () => {
    setAddNote(false);
  };

  const openOverlayHandler = () => {
    setAddNote(true);
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      const newNotes = prev.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(newNotes));

      return newNotes;
    });
  };
  return (
    <div>
      <Notes notes={notes} onDelete={deleteNote} />

      {ReactDom.createPortal(
        addNote && <AddNote onAdd={AddNoteHandler} close={closeOverlay} />,
        document.getElementById("overlay")
      )}
      {!addNote && <AddNoteButton onOpenAdd={openOverlayHandler} />}
    </div>
  );
}

export default App;
