import React, { Children, ReactNode, useEffect } from 'react';
import styles from './styles.module.css'

export interface IModalProps {
  visible: boolean;
  children?: ReactNode
  onClose?: () => void
}

function Modal({ visible, children, onClose }: IModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== 'Escape') return

      onClose && onClose();
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
