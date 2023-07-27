import React from "react";
import Note from "./Note";

import styles from "./Notes.module.css";

export default function Notes(props) {
  return (
    <>
      <h1 className={styles.heading}>Notes</h1>
      {props.notes.length === 0 ? (
        <h2 className={styles['empty-notes-message']}>You don't have any notes. Try Adding one!!!</h2>
      ) : (
        <div className={styles["notes-container"]}>
          {props.notes.map((note) => {
            return <Note key={note.id} note={note} onDelete={props.onDelete} />;
          })}
        </div>
      )}
    </>
  );
}
