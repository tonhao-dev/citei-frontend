import React, { ReactNode } from 'react';
import './styles.module.css';

interface SubtitleProps {
  children: ReactNode;
}

function SubTitle({ children, ...props }: SubtitleProps) {
  return (
    <h2 {...props}>
      {children}
    </h2>
  );
}

export default SubTitle;
