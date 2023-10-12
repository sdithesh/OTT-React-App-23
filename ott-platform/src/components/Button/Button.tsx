import React, { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  className?: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type: string;
};
function Button({ className, onclick, children, type }: ButtonProps) {
  return (
    <>
      <button className={`button ${type} ${className}`} onClick={onclick}>
        {children}
      </button>
    </>
  );
}
export default Button;
