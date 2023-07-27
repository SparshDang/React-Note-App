import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddNote.module.css";

export default function AddNote(props) {


  const inputRef = useRef();
  const [isError, setIsError] = useState(false);

  const addNote = () =>{
    if (inputRef.current.value.trim().length === 0){
        setIsError(true);
        return
    }
    props.onAdd(inputRef.current.value);
    props.close();
  }
  return (
    <div className={styles.overlay}>
      <Card className={styles.container}>
        <h2>Add Note</h2>
        <textarea name="" id="" cols="30" rows="10" ref={inputRef} className={isError ? styles.error : "" }></textarea>
        <div className={styles.actions}>
          <Button className={styles.cancel} action={props.close}>Cancel</Button>
          <Button
            className={styles.add}
            action={addNote}
          >
            Add
          </Button>
        </div>
      </Card>
    </div>
  );
}
