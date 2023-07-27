import React from 'react'
import Note from './Note'

export default function Notes(props) {
  return (
    <div>
      <h1>Notes</h1>
      {
        props.notes.map(
            (note)=>{
                return <Note id={note.id} text={note.text}/>;
            }
        )
      }
    </div>
  )
}
