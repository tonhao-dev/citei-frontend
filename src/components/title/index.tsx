import { FC } from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children, ...props }) => {
  return <h1 {...props}>{children}</h1>;
};

export default Title;
