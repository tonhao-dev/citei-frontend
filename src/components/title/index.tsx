import { FC } from 'react';
import styles from './styles.module.css';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children, ...props }) => {
  return (
    <h1 {...props} className={styles.title}>
      {children}
    </h1>
  );
};

export default Title;
