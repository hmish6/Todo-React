import React from "react";
import "./Button.css";

const Button = ({ text, className, ...props }) => (
  <button className={`input-button ${className ? className : ""}`} {...props}>
    {text}
  </button>
);

export default Button;
