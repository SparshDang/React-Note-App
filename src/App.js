import { useState } from "react";
import Notes from "./components/Notes/Notes";
function App() {
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
    </div>
  );
}

export default App;
