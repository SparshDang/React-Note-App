import React from 'react'

import Card from '../UI/Card';
import Button from '../UI/Button';

import styles from './Note.module.css'

export default function Note(props) {
  return (
    <Card className={styles.note}>
        <div className={styles["text"]}>
            {props.note.text}
        </div>
            <Button className={styles.delete} action={ () => {
                props.onDelete(props.note.id);
            }}>Delete</Button>
    </Card>
  )
}
