import React from "react";
import "./FormInput.scss";

type InputProps = {
  label: string;
  type?: string;
  placeholder: string;
  className: string;
};
function FormInput({ label, type, placeholder, className }: InputProps) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
      ></input>
    </div>
  );
}

export default FormInput;
