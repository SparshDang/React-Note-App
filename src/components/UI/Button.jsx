import React from 'react'
import styles from './Button.module.css';

export default function Button(props) {
    const className = `${styles.button} ${props.className}`
  return (
    <button className={className} onClick={props.action}>{props.children}</button>
  )
}
