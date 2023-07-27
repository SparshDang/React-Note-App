import React from 'react'

import styles from './Note.module.css'

export default function Note(props) {
  return (
    <div className={styles.note}>
        <div className={styles["text"]}>
            {props.note.text}
        </div>
            <button className={styles.delete} onClick={ () => {
                props.onDelete(props.note.id);
            }}>Delete</button>
    </div>
  )
}
