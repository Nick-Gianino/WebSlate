import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ButtonBase: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <div
      className={className}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default ButtonBase;
