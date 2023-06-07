import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.css'

function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={styles.input} {...props} />
  )
}

export default Input;
