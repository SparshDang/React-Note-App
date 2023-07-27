import { useState } from "react";
import ReactDom from 'react-dom';
import Notes from "./components/Notes/Notes";
import AddNote from "./components/AddNote/AddNote";

import AddNoteButton from "./components/AddNote/AddNoteButton";

function App() {
  const [addNote, setAddNote] =  useState(false)
  const [notes, setNotes] =useState([]);

  const AddNoteHandler = (text) => {
    setNotes(
      (prev) => {
        let id=0;
        if (prev.length > 0){
          id = prev[prev.length-1].id + 1
        }

        const note = {
          text:text,
          id:id
        }

        return [note, ...prev];
      }
    )
  }

  const closeOverlay = () =>{
    setAddNote(false);
  }

  const openOverlayHandler = () =>{
    setAddNote(true);
  }

  const deleteNote  = (id) =>{
    setNotes(
      (prev) => {

        return prev.filter( (note) => note.id !== id )
      }
    )
  }
  return (
    <div>
      <Notes notes={notes} onDelete={deleteNote}/>

      {ReactDom.createPortal(
        addNote && <AddNote onAdd={AddNoteHandler} close={closeOverlay}/>,
        document.getElementById('overlay')

      )}
      {!addNote && <AddNoteButton onOpenAdd={openOverlayHandler}/>}

    </div>
  );
}

export default App;
