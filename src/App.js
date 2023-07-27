import { useState } from "react";
import Notes from "./components/Notes/Notes";
import AddNote from "./components/AddNote/AddNote";

function App() {
  const [addNote, setAddNote] =  useState(true)
  const [notes, setNotes] =useState([
    {
      id:1,
      text:'This is a note 1'
    },
    {
      id:2,
      text:'This is a note 2'
    },
    {
      id:3,
      text:'This is a note 3'
    },
  ]);

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
      {addNote && <AddNote onAdd={AddNoteHandler} close={closeOverlay}/>}
    </div>
  );
}

export default App;
