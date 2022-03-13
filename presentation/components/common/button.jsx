import React from 'react'
import styles from '../../../styles/common/Button.module.css'

const Button=({text="button"})=> {
  return (
    <button type='button' className={styles['button']}>{text}</button>
  )
}

export default Button