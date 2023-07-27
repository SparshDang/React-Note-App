import styles from './AddNoteButton.module.css'
import Button from '../UI/Button';
export default function AddNoteButton(props) {
  return (
    <Button className={styles['addButton']} action={props.onOpenAdd}>Add Note</Button>
  )
}
