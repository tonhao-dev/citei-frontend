import React, { Children, ReactNode } from 'react';
import styles from './styles.module.css'

export interface IModalProps {
  visible: boolean;
  children?: ReactNode
}

function Modal({ visible, children }: IModalProps) {
  return (
    visible ? (
      <div className={styles.background} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modal}>
          {children}
        </div>
      </div>
    ) : <></>
  )
}

export default Modal;
