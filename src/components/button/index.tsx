import { FC } from 'react';

import styles from './styles.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  variant?: 'black' | 'white';
}

const Button: FC<ButtonProps> = ({ title = '', variant = 'black', ...props }) => {
  return (
    <button {...props} className={styles[variant]}>
      {title}
    </button>
  );
};

export default Button;
