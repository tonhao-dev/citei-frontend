import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface SubtitleProps {
  children: ReactNode;
}

function SubTitle({ children, ...props }: SubtitleProps) {
  return (
    <h2 {...props} className={styles.subtitle}>
      {children}
    </h2>
  );
}

export default SubTitle;
