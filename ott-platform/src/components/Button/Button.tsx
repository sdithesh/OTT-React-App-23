import React from "react";
import "./Button.scss";

type ButtonProps = {
  value: string;
  className: string;
  onclick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
function Button({ value, className, onclick }: ButtonProps) {
  return (
    <>
      <button className={`button ${className}`} onClick={onclick}>
        {value}
      </button>
    </>
  );
}
export default Button;
