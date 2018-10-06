import React from "react";
import "./Input.css";

const Input = ({ className, ...props }) => (
  <input className={`input-field ${className ? className : ""}`} {...props} />
);

export default Input;
