import React from 'react'
import styles from './Card.module.css'

export default function Card(props) {
    const   classNames = `${styles.card} ${props.className}`;
  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}
